import _forOwn from 'lodash/forOwn';
import _find from 'lodash/find';

import {constantOrFormula} from '../utils/generic';
import Formula from './Formula';

export default class Node {
	constructor(source, i, j, expandedCursor) {
		const {
			dirIn,
			dirOut,
			type,
			typeIn,
			typeOut,
			transforms,
			transformOrigin,
			x,
			y,
			tensionIn,
			tensionOut,
		} = source;

		const cursor = expandedCursor || `contours.${i}.nodes.${j}.`;

		/* eslint-disable no-negated-condition */
		this.cursor = cursor;
		this.nodeAddress = constantOrFormula(cursor, `${cursor}nodeAddress`);
		this.dirIn
			= dirIn !== undefined
				? constantOrFormula(dirIn, `${cursor}dirIn`)
				: constantOrFormula(null, `${cursor}dirIn`);
		this.dirOut
			= dirOut !== undefined
				? constantOrFormula(dirOut, `${cursor}dirOut`)
				: constantOrFormula(null, `${cursor}dirOut`);
		// simplify by having just typeIn and typeOut
		this.type = type || null;
		this.typeIn
			= typeIn !== undefined
				? constantOrFormula(typeIn, `${cursor}typeIn`)
				: constantOrFormula(this.type, `${cursor}typeIn`);
		this.typeOut
			= typeOut !== undefined
				? constantOrFormula(typeOut, `${cursor}typeOut`)
				: constantOrFormula(this.type, `${cursor}typeOut`);
		this.tensionIn
			= tensionIn !== undefined
				? constantOrFormula(tensionIn, `${cursor}tensionIn`)
				: constantOrFormula(1, `${cursor}tensionIn`);
		this.tensionOut
			= tensionOut !== undefined
				? constantOrFormula(tensionOut, `${cursor}tensionOut`)
				: constantOrFormula(1, `${cursor}tensionOut`);
		this.transforms
			= transforms !== undefined
				? constantOrFormula(transforms, `${cursor}transforms`)
				: constantOrFormula(null, `${cursor}transforms`);
		this.transformOrigin = transformOrigin
			? constantOrFormula(transformOrigin, `${cursor}transformOrigin`)
			: constantOrFormula(null, `${cursor}transformOrigin`);
		this.x
			= x !== undefined
				? constantOrFormula(x, `${cursor}x`)
				: constantOrFormula(null, `${cursor}x`);
		this.y
			= y !== undefined
				? constantOrFormula(y, `${cursor}y`)
				: constantOrFormula(null, `${cursor}y`);
		/* eslint-enable no-negated-condition */
	}

	solveOperationOrder(glyph, operationOrder) {
		const result = [];

		_forOwn(this, (value, key) => {
			if (value !== null && key !== 'cursor' && key !== 'type') {
				if (key === 'expand') {
					_forOwn(value, (item) => {
						result.push(
							...item.solveOperationOrder(glyph, [
								...operationOrder,
								...result,
							]),
						);
					});
				}
				else if (key === 'expandedTo') {
					value.forEach((item) => {
						result.push(
							...item.solveOperationOrder(glyph, [
								...operationOrder,
								...result,
							]),
						);
					});
				}
				else if (key !== 'expanding') {
					result.push(
						...value.solveOperationOrder(glyph, [...operationOrder, ...result]),
					);
				}

				if (typeof this.readyToExpand === 'function') {
					const opToAdd = {
						action: 'expand',
						cursor: this.cursor.substring(0, this.cursor.length - 1),
					};

					if (
						this.readyToExpand([...operationOrder, ...result])
						&& !_find([...operationOrder, ...result], opToAdd)
					) {
						result.push(opToAdd);
					}
				}
			}
		});

		return result;
	}

	analyzeDependency(glyph, graph) {
		_forOwn(this, (value, key) => {
			if (value instanceof Formula && key !== 'cursor') {
				if (key === 'expand') {
					_forOwn(value, (item) => {
						item.analyzeDependency(glyph, graph);
					});
				}
				else if (key === 'expandedTo') {
					value.forEach((item) => {
						item.analyzeDependency(glyph, graph);
					});
				}
				else {
					value.analyzeDependency(glyph, graph);
				}
			}
		});
	}
}

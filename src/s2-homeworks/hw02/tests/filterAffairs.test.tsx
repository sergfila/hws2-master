import React from 'react'
import { AffairType, filterAffairs } from '../HW2'

let initialState: AffairType[]

beforeEach(() => {
    initialState = [
        { _id: 1, name: 'React', priority: 'high' },
        { _id: 2, name: 'anime', priority: 'low' },
        { _id: 3, name: 'games', priority: 'low' },
        { _id: 4, name: 'work', priority: 'high' },
        { _id: 5, name: 'html & css', priority: 'middle' },
    ]
})

test('filter by all', () => {
    const filteredAffairs = filterAffairs(initialState, 'all');
    expect(filteredAffairs.length).toBe(initialState.length);
});

test('filter by high', () => {
    const filteredAffairs = filterAffairs(initialState, 'high');
    expect(filteredAffairs.length).toBe(2);
    expect(filteredAffairs[0].priority).toBe('high');
    expect(filteredAffairs[1].priority).toBe('high');
});

test('filter by middle', () => {
    const filteredAffairs = filterAffairs(initialState, 'middle');
    expect(filteredAffairs.length).toBe(1);
    expect(filteredAffairs[0].priority).toBe('middle');
});

test('filter by low', () => {
    const filteredAffairs = filterAffairs(initialState, 'low');
    expect(filteredAffairs.length).toBe(2);
    expect(filteredAffairs[0].priority).toBe('low');
    expect(filteredAffairs[1].priority).toBe('low');
});
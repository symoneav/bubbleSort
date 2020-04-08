
describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect(bubbleSort([]) ).toEqual([])
    })
    it('sorts an array', function(){
        expect(bubbleSort([5,4,3,2])).toEqual([2,3,4,5])
    })
})
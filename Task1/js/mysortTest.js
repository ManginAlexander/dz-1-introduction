test('Bubble sort', function () {
    "use strict";
    deepEqual(bubbleSort([]), [], 'Пустой массив');
    deepEqual(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], 'Уже отсортированный массив');
    deepEqual(bubbleSort([1, 2, 3, 3, 5]), [1, 2, 3, 3, 5], 'Уже отсортированный массив + есть повторяющиеся элементы');
    deepEqual(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5], 'Reverse array');
    deepEqual(bubbleSort([1, 9, 1, 2, 0]), [0, 1, 1, 2, 9], 'Не упорядоченный массив + есть повторяющийся элемент');
    deepEqual(bubbleSort([1, 9, 1, 2, 0]), [0, 1, 1, 2, 9], 'Не упорядоченный массив + есть повторяющийся элемент');
});
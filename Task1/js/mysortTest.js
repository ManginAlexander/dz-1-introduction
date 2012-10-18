test('Bubble sort', function () {
    "use strict";
    deepEqual(bubbleSort([]), [], '������ ������');
    deepEqual(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], '��� ��������������� ������');
    deepEqual(bubbleSort([1, 2, 3, 3, 5]), [1, 2, 3, 3, 5], '��� ��������������� ������ + ���� ������������� ��������');
    deepEqual(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5], 'Reverse array');
    deepEqual(bubbleSort([1, 9, 1, 2, 0]), [0, 1, 1, 2, 9], '�� ������������� ������ + ���� ������������� �������');
    deepEqual(bubbleSort([1, 9, 1, 2, 0]), [0, 1, 1, 2, 9], '�� ������������� ������ + ���� ������������� �������');
});
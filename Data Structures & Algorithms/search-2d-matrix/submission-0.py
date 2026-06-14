class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows = len(matrix)
        for row in range(rows):
            if target in matrix[row]:
                return True
        return False
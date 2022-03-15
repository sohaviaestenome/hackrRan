public class DiagonalDifference {

    public static void main(String[] args) {
        // TODO Auto-generated method stub

        List<List<Integer>> matrix = Arrays.asList(
                Arrays.asList(11, 2, 4),
                Arrays.asList(4, 5, 6),
                Arrays.asList(10, 8, -12));

        //printMatrix(matrix);

        int dif = diagonalDifference(matrix);
        System.out.println(dif);


    }  // end main method


    public static int diagonalDifference(List<List<Integer>> arr) {

        int leftToRightSum = 0;
        int rightToLeftSum = 0;

        int topRight = arr.size() - 1;
        for(int i = 0; i < arr.size(); i++) {
            leftToRightSum += arr.get(i).get(i);
            rightToLeftSum += arr.get(i).get(topRight - i);
        }

        return Math.abs(leftToRightSum - rightToLeftSum);

    } // end diagonalDifference method
}

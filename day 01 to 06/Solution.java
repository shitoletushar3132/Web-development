import java.util.*;

class Solution {
    public static int[] plusOne(int[] digits) {
        int num = 0;
        ArrayList<Integer> temp = new ArrayList<>();

        for (int i = 0; i < digits.length; i++) {
            int temp1 = digits[i];
            num = (num * 10) + temp1;
        }
        num = num + 1;

        while (num != 0) {
            temp.add(num % 10);
            num = num / 10;
        }

        int[] res = new int[temp.size()];
        // for(int i =0; i<temp.size();i++){
        // System.out.print(temp.get(i)+" ");
        // }
        for (int i = 0; i < temp.size(); i++) {
            int cu = temp.get(i);
            res[temp.size() - 1 - i] = cu;

        }
        // for(int i =0; i<temp.size();i++){
        // System.out.print(res[i]+" ");
        // }
        return res;
    }

    public static void main(String[] args) {
        int arr[] = { 1, 2, 3 };
        plusOne(arr);
    }
}
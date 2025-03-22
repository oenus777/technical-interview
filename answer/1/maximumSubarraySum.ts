// 時間計算量はO(n)で、空間計算量はO(1)です。
function maxSubarraySum(arr: number[]): { maxSum: number; subarray: number[] } {
    // 配列が空の場合は早期リターン
    if (arr.length === 0) {
      return { maxSum: 0, subarray: [] };
    }
  
    let currentSum = arr[0];
    let maxSum = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;
  
    // インデックス1から開始（最初の要素は既に処理済み）
    for (let i = 1; i < arr.length; i++) {
      // 現在の要素を追加した和と、現在の要素から新しく始める場合を比較
      if (currentSum + arr[i] > arr[i]) {
        currentSum = currentSum + arr[i];
      } else {
        currentSum = arr[i];
        tempStart = i;
      }
  
      // 最大和を更新する必要があるか確認
      if (currentSum > maxSum) {
        maxSum = currentSum;
        start = tempStart;
        end = i;
      }
    }
  
    // 最大和を持つ部分配列を抽出
    const subarray = arr.slice(start, end + 1);
    
    return { maxSum, subarray };
  }
  
  // 使用例
  const array = [2, 1, 3, 4, 2, 2, 15, 5, 4];
  const result = maxSubarraySum(array);
  console.log(`最大和: ${result.maxSum}`);
  console.log(`部分配列: [${result.subarray}]`);
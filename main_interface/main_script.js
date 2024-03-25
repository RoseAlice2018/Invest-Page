document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('add-investment');
    var investmentTableBody = document.getElementById('investment-table').tBodies[0];
    var totalHoldingsSpan = document.getElementById('total-holdings');
    var targetAmountSpan = document.getElementById('target-amount');
    var ratioSpan = document.getElementById('ratio');
  
    // 初始化总金额和目标金额
    var totalHoldings = 0;
    var targetAmount = 1000000; // 假设目标金额为100万
  
    // 添加投资的函数
    function addInvestment(stock, amount) {
      var newRow = investmentTableBody.insertRow();
      var stockCell = newRow.insertCell(0);
      var amountCell = newRow.insertCell(1);
      stockCell.textContent = stock;
      amountCell.textContent = amount;
      totalHoldings += amount;
      updateSummary();
    }
  
    // 更新总结信息的函数
    function updateSummary() {
      totalHoldingsSpan.textContent = totalHoldings;
      ratioSpan.textContent = (totalHoldings / targetAmount * 100).toFixed(2) + '%';
    }
  
    // 为添加按钮绑定点击事件
    addButton.addEventListener('click', function() {
      // 这里可以添加逻辑以获取用户输入的股票名称和金额
      // 例如：var stockName = prompt('请输入股票名称');
      // var amount = prompt('请输入金额');
      // 然后调用addInvestment(stockName, amount);
    });
  });
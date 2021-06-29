$(function () {
    console.log("ready");
    var str = "";
    $(".mycart-btn").click(function () {
      var title = $(this).data("title");
      var price = $(this).data("price");
      console.log(title + "," + price);
      str += '<tr class="cart-item">' +
        '<td><input type="checkbox" class="j-check"></td>' +
        '<td>' + title + '</td>' +
        '<td class="p-price">' + price + '</td>' +
        '<td class="p-num"><button class="btn btn-wheat dec">-</button>' +
        '<input type="text" value="1" class="itxt">' +
        '<button class="btn btn-wheat inc">+</button>' +
        '</td>' +
        '<td class="p-sum">' + price + '</td>' +
        '<td><button class="btn bg-wheat p-action">刪除</button></td>' +
        '</tr>';
      console.log(str);
      localStorage.shopping = str;
    });
  });
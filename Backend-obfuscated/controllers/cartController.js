const _0x23bc81 = _0x2e61;
(function (_0xfafd29, _0x242f28) {
  const _0xab79dd = _0x2e61,
    _0x5bb580 = _0xfafd29();
  while (!![]) {
    try {
      const _0x4b1d88 =
        (-parseInt(_0xab79dd(0x146)) / 0x1) *
          (-parseInt(_0xab79dd(0x15b)) / 0x2) +
        (parseInt(_0xab79dd(0x139)) / 0x3) *
          (-parseInt(_0xab79dd(0x158)) / 0x4) +
        (parseInt(_0xab79dd(0x134)) / 0x5) *
          (-parseInt(_0xab79dd(0x148)) / 0x6) +
        -parseInt(_0xab79dd(0x138)) / 0x7 +
        (-parseInt(_0xab79dd(0x137)) / 0x8) *
          (parseInt(_0xab79dd(0x15d)) / 0x9) +
        (parseInt(_0xab79dd(0x13d)) / 0xa) *
          (-parseInt(_0xab79dd(0x14e)) / 0xb) +
        (-parseInt(_0xab79dd(0x13a)) / 0xc) *
          (-parseInt(_0xab79dd(0x156)) / 0xd);
      if (_0x4b1d88 === _0x242f28) break;
      else _0x5bb580["push"](_0x5bb580["shift"]());
    } catch (_0x335b53) {
      _0x5bb580["push"](_0x5bb580["shift"]());
    }
  }
})(_0x4162, 0xbc9d5);
function _0x4162() {
  const _0x216acf = [
    "Server\x20error",
    "8640797fQDqSt",
    "name",
    "length",
    "Restaurant\x20not\x20found",
    "Cart\x20not\x20found",
    "items",
    "foodItem",
    "splice",
    "70407662oEgtPU",
    "../models/foodItem",
    "1228DxgeUh",
    "items.foodItem",
    "Cart\x20item\x20quantity\x20updated",
    "3058RfMOGu",
    "findIndex",
    "2979099ajQGJB",
    "Cart\x20updated",
    "deleteOne",
    "../models/cartModel",
    "name\x20price\x20images",
    "exports",
    "status",
    "475885iSudJu",
    "populate",
    "push",
    "32vglMli",
    "9941183zQJNid",
    "10599gTbZCx",
    "12EvJPYt",
    "success",
    "Cart\x20deleted",
    "10wLyhrx",
    "toString",
    "json",
    "save",
    "findOne",
    "_id",
    "Cart\x20item\x20deleted",
    "restaurant",
    "body",
    "230EaBoAb",
    "../models/restaurant",
    "24YFsmCC",
    "No\x20cart\x20found",
    "quantity",
    "findById",
    "Food\x20item\x20not\x20found\x20in\x20cart",
  ];
  _0x4162 = function () {
    return _0x216acf;
  };
  return _0x4162();
}
function _0x2e61(_0x44ea6f, _0xefcfee) {
  const _0x416278 = _0x4162();
  return (
    (_0x2e61 = function (_0x2e6174, _0x13d7bc) {
      _0x2e6174 = _0x2e6174 - 0x131;
      let _0x53045d = _0x416278[_0x2e6174];
      return _0x53045d;
    }),
    _0x2e61(_0x44ea6f, _0xefcfee)
  );
}
const Cart = require(_0x23bc81(0x160)),
  FoodItem = require(_0x23bc81(0x157)),
  Restaurant = require(_0x23bc81(0x147));
async function addItemToCart(_0x18189f, _0x40ca66) {
  const _0x545151 = _0x23bc81,
    {
      userId: _0xaac0de,
      foodItemId: _0x1f91f9,
      restaurantId: _0x5275af,
      quantity: _0x23eefc,
    } = _0x18189f[_0x545151(0x145)];
  try {
    const _0x3a759d = await FoodItem["findById"](_0x1f91f9);
    if (!_0x3a759d)
      return _0x40ca66[_0x545151(0x133)](0x194)[_0x545151(0x13f)]({
        message: "Food\x20item\x20not\x20found",
      });
    const _0x2d0c02 = await Restaurant[_0x545151(0x14b)](_0x5275af);
    if (!_0x2d0c02)
      return _0x40ca66[_0x545151(0x133)](0x194)["json"]({
        message: _0x545151(0x151),
      });
    let _0x36baeb = await Cart["findOne"]({ user: _0xaac0de });
    if (_0x36baeb) {
      if (_0x36baeb[_0x545151(0x144)][_0x545151(0x13e)]() !== _0x5275af)
        await Cart[_0x545151(0x15f)]({ _id: _0x36baeb[_0x545151(0x142)] }),
          (_0x36baeb = new Cart({
            user: _0xaac0de,
            restaurant: _0x5275af,
            items: [{ foodItem: _0x1f91f9, quantity: _0x23eefc }],
          }));
      else {
        const _0x6e3c2c = _0x36baeb[_0x545151(0x153)][_0x545151(0x15c)](
          (_0x51510c) =>
            _0x51510c[_0x545151(0x154)][_0x545151(0x13e)]() === _0x1f91f9
        );
        _0x6e3c2c > -0x1
          ? (_0x36baeb[_0x545151(0x153)][_0x6e3c2c][_0x545151(0x14a)] +=
              _0x23eefc)
          : _0x36baeb[_0x545151(0x153)][_0x545151(0x136)]({
              foodItem: _0x1f91f9,
              quantity: _0x23eefc,
            });
      }
    } else
      _0x36baeb = new Cart({
        user: _0xaac0de,
        restaurant: _0x5275af,
        items: [{ foodItem: _0x1f91f9, quantity: _0x23eefc }],
      });
    await _0x36baeb[_0x545151(0x140)]();
    const _0x4e26d1 = await Cart[_0x545151(0x141)]({ user: _0xaac0de })
      [_0x545151(0x135)]({ path: _0x545151(0x159), select: _0x545151(0x131) })
      ["populate"]({ path: _0x545151(0x144), select: "name" });
    _0x40ca66["status"](0xc8)["json"]({
      message: _0x545151(0x15e),
      cart: _0x4e26d1,
    });
  } catch (_0x15fedd) {
    _0x40ca66[_0x545151(0x133)](0x1f4)[_0x545151(0x13f)]({
      message: _0x545151(0x14d),
      error: _0x15fedd,
    });
  }
}
async function updateCartItemQuantity(_0x445840, _0xfc9540) {
  const _0x397e5d = _0x23bc81,
    {
      userId: _0xc78bc5,
      foodItemId: _0x37199a,
      quantity: _0x4c3e05,
    } = _0x445840[_0x397e5d(0x145)];
  try {
    let _0x340c19 = await Cart[_0x397e5d(0x141)]({ user: _0xc78bc5 });
    if (!_0x340c19)
      return _0xfc9540[_0x397e5d(0x133)](0x194)[_0x397e5d(0x13f)]({
        message: _0x397e5d(0x152),
      });
    const _0x10c1b2 = _0x340c19[_0x397e5d(0x153)][_0x397e5d(0x15c)](
      (_0x24be80) => _0x24be80["foodItem"][_0x397e5d(0x13e)]() === _0x37199a
    );
    if (_0x10c1b2 === -0x1)
      return _0xfc9540[_0x397e5d(0x133)](0x194)[_0x397e5d(0x13f)]({
        message: _0x397e5d(0x14c),
      });
    (_0x340c19[_0x397e5d(0x153)][_0x10c1b2][_0x397e5d(0x14a)] = _0x4c3e05),
      await _0x340c19[_0x397e5d(0x140)]();
    const _0x5a4f21 = await Cart["findOne"]({ user: _0xc78bc5 })
      ["populate"]({ path: "items.foodItem", select: _0x397e5d(0x131) })
      [_0x397e5d(0x135)]({ path: "restaurant", select: _0x397e5d(0x14f) });
    _0xfc9540[_0x397e5d(0x133)](0xc8)[_0x397e5d(0x13f)]({
      message: _0x397e5d(0x15a),
      cart: _0x5a4f21,
    });
  } catch (_0x155ba8) {
    _0xfc9540[_0x397e5d(0x133)](0x1f4)[_0x397e5d(0x13f)]({
      message: "Server\x20error",
      error: _0x155ba8,
    });
  }
}
async function deleteCartItem(_0x4a1d12, _0x54f9c4) {
  const _0x387fa0 = _0x23bc81,
    { userId: _0x4b64ba, foodItemId: _0x4c2e25 } = _0x4a1d12[_0x387fa0(0x145)];
  try {
    let _0x255aad = await Cart[_0x387fa0(0x141)]({ user: _0x4b64ba });
    if (!_0x255aad)
      return _0x54f9c4[_0x387fa0(0x133)](0x194)[_0x387fa0(0x13f)]({
        message: _0x387fa0(0x152),
      });
    const _0x37abc3 = _0x255aad[_0x387fa0(0x153)][_0x387fa0(0x15c)](
      (_0x1b4c45) => _0x1b4c45[_0x387fa0(0x154)]["toString"]() === _0x4c2e25
    );
    if (_0x37abc3 === -0x1)
      return _0x54f9c4[_0x387fa0(0x133)](0x194)[_0x387fa0(0x13f)]({
        message: _0x387fa0(0x14c),
      });
    _0x255aad[_0x387fa0(0x153)][_0x387fa0(0x155)](_0x37abc3, 0x1);
    if (_0x255aad[_0x387fa0(0x153)][_0x387fa0(0x150)] === 0x0)
      return (
        await Cart[_0x387fa0(0x15f)]({ _id: _0x255aad["_id"] }),
        _0x54f9c4[_0x387fa0(0x133)](0xc8)[_0x387fa0(0x13f)]({
          message: _0x387fa0(0x13c),
        })
      );
    else {
      await _0x255aad[_0x387fa0(0x140)]();
      const _0x1503da = await Cart[_0x387fa0(0x141)]({ user: _0x4b64ba })
        ["populate"]({ path: _0x387fa0(0x159), select: _0x387fa0(0x131) })
        [_0x387fa0(0x135)]({ path: _0x387fa0(0x144), select: "name" });
      _0x54f9c4[_0x387fa0(0x133)](0xc8)[_0x387fa0(0x13f)]({
        message: _0x387fa0(0x143),
        cart: _0x1503da,
      });
    }
  } catch (_0x17cab0) {
    _0x54f9c4[_0x387fa0(0x133)](0x1f4)[_0x387fa0(0x13f)]({
      message: _0x387fa0(0x14d),
      error: _0x17cab0,
    });
  }
}
async function getCartItem(_0x4457c7, _0x505f5a) {
  const _0x4051fb = _0x23bc81,
    _0x4e5e89 = _0x4457c7["user"];
  try {
    const _0x20fa80 = await Cart[_0x4051fb(0x141)]({ user: _0x4e5e89 })
      ["populate"]({ path: _0x4051fb(0x159), select: _0x4051fb(0x131) })
      [_0x4051fb(0x135)]({ path: _0x4051fb(0x144), select: _0x4051fb(0x14f) });
    return !_0x20fa80
      ? _0x505f5a[_0x4051fb(0x133)](0x194)[_0x4051fb(0x13f)]({
          message: _0x4051fb(0x149),
        })
      : _0x505f5a[_0x4051fb(0x133)](0xc8)[_0x4051fb(0x13f)]({
          status: _0x4051fb(0x13b),
          data: _0x20fa80,
        });
  } catch (_0xf48f51) {
    _0x505f5a[_0x4051fb(0x133)](0x1f4)[_0x4051fb(0x13f)]({
      message: _0x4051fb(0x14d),
      error: _0xf48f51,
    });
  }
}
module[_0x23bc81(0x132)] = {
  addItemToCart: addItemToCart,
  updateCartItemQuantity: updateCartItemQuantity,
  deleteCartItem: deleteCartItem,
  getCartItem: getCartItem,
};

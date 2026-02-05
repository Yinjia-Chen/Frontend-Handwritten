# 前端手撕专题

## instanceof

- **功能**：`A instanceof B`，判断 A 是否是 B 的实例
- **前提**：A 是对象，B 是构造函数
- **判断逻辑**：`A.__proto__ === B.prototype`
- **注意**⚠️：`[1, 2] instanceof Object === true`，因此要判断 `B.prototype` 是否在 A 的原型链上
- **实现要点**：必须有循环，沿原型链向上维护 A 的原型
- **Q&A**：为什么instanceof不能判断基本数据类型？基本数据类型没有原型，instanceof 结果返回 false
- **边界**：A 和 B 的类型校验，instanceof 左右都不能出现空值，instanceof 左侧允许函数（用 &&）
- **风格优化**：推荐用 `Object.getPrototypeOf(A)` 获取 A 的原型

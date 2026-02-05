# 前端手撕专题

## instanceof 类型（原型链）判断

- **功能**：`A instanceof B`，判断 A 是否是 B 的实例
- **前提**：A 是对象，B 是构造函数
- **判断逻辑**：`A.__proto__ === B.prototype`
- **注意**⚠️：`[1, 2] instanceof Object === true`，因此要判断 `B.prototype` 是否在 A 的原型链上
- **实现要点**：必须有循环，沿原型链向上维护 A 的原型
- **边界**：A 和 B 的类型校验，instanceof 左右都不能出现空值，instanceof 左侧允许函数（用 &&）
- **风格优化**：推荐用 `Object.getPrototypeOf(A)` 获取 A 的原型
- **Q&A**：为什么instanceof不能判断基本数据类型？基本数据类型没有原型，instanceof 结果返回 false

## deepClone 深拷贝

- **功能**：递归实现深拷贝
- **特点**：`JSON.parse(JSON.stringify(source))` 不能拷贝非纯数据对象（包含函数等），且丢失原型链
- **实现要点**：
  - 属性值可能对象嵌套，故用递归 `cloned[key] = deepClone(source[key])`
  - 递归终止条件 -> 新进入 deepClone 的参数是一个非对象，直接返回
  - 只拷贝本身属性：`source.hasOwnProperty(key)`
- **返回值**：深拷贝返回新对象，也可能是数组，创建返回值时要兼顾数组判断，赋值用 `source[key]`
- **原型**：创建返回值用 `Object.create(Object.getPrototypeOf)`，否则深拷贝后丢失原型链
- **类型校验**：`null` 或非对象类型直接返回 `source`
- **Q&A**：hasOwnProperty 为什么必要？深拷贝不拷贝继承过来的属性
- **进阶**：后续可以考虑 循环引用 、 不可枚举/符号键 、 属性描述符 、Date/RegExp/Map/Set 等特殊边界的优化

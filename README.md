TypeScript Chai Add Chainable Method "trimmed" Demo
===================================================

使用`chai.Assertion.addChainableMethod`添加自己的chainer `trimmed`

注意：虽然可行，但是美中不足的是，生成的assertion message是由`equal`决定的，所以体现不出来`trimmed`。

不推荐这种做法，不如直接定义一个普通的method，比如`trimmedEqual`

```
npm install
npm test
```

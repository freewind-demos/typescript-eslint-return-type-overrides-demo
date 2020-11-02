TypeScript Eslint Return Type Demo
============================================

希望配置Eslint，在需要显式写明return type的时候写，不需要写的时候不写。

对于非React组件，已经达到了目的，但是react组件处遇到了麻烦：

我希望在维持其它地方不变的情况下，下面onClick中的函数不需要写返回值：

```
 return <button onClick={() => console.log('clicked')}>Button</button>
```

但是目前还没有找到合适的配置。

```
npm install
npm run lint
```

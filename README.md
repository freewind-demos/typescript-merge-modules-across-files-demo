TypeScript Merge Modules Across Files Demo
===========================

关键点是 `module` 前不能加 `export`，它就会被当成一个 namespace 而不是 module

然后直接 `import './ns1'` 这样把多个module文件导入即可使用

```
npm install
npm start
```

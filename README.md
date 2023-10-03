TypeScript Merge Namespaces Across Files Demo
===========================

关键点是 `namespace` 前不能加 `export`，否则会被当成一个 `module`而不再是namaspace\

然后直接 `import './ns1'` 这样把多个namespace文件导入即可使用

```
npm install
npm start
```

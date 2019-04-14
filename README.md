# create-boilerplate

Creates a boilerplatejs application using the command line.

## Usage

```bash
$ yarn create @zcorky/boilerplate [appName?]
```

## Boilerplates

* `dva ` - Create project with dva and typescript.
* `redux ` - [WIP]
* `mobx ` - [WIP]

## Usage Example

```bash
$ yarn create @zcorky/boilerplate

? Select the boilerplate type (Use arrow keys)
❯ app             - Create boilerplate project with dva & TypeScript.

? What functionality do you want to enable? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◯ dva

  create abc/package.json
  create abc/.gitignore
  create abc/.editorconfig
  create abc/.env
  create abc/.eslintrc
  create abc/.prettierignore
  create abc/.prettierrc
  create abc/.boilerplaterc.js
  create abc/mock/.gitkeep
  create abc/src/assets/yay.jpg
  create abc/src/global.css
  create abc/src/layouts/index.css
  create abc/src/layouts/index.tsx
  create abc/src/pages/index.css
  create abc/src/pages/index.tsx
  create abc/tsconfig.json
  create abc/typings.d.ts
 📋  Copied to clipboard, just use Ctrl+V
 ✨  File Generate Done
```

## FAQ

### `yarn create @zcorky/boilerplate` command failed

这个问题基本上都是因为没有添加 yarn global module 的路径到 PATH 环境变量引起的。

先执行 `yarn global bin` 拿到路径，然后添加到 PATH 环境变量里。

```bash
$ yarn global bin
/usr/local/bin
```

你也可以尝试用 npm，

```bash
$ npm create boilerplate
```

或者手动安装 @zcorky/create-boilerplate，并执行他，

```bash
$ npm install @zcorky/create-boilerplate -g
$ create-boilerplate
```

## LICENSE

MIT

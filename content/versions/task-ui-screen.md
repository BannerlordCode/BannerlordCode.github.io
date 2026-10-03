---
title: "挂一个 UI 面板"
description: "开发者视角总览：Gauntlet UI 的三层结构——XML 布局、GauntletMovie 生命周期、ScreenManager 屏幕栈，加上 ViewModel 数据绑定。"
extra:
  sidebar: auto
---

# 挂一个 UI 面板

> **这条路径解决什么**：你要在游戏里加一个自己的界面 —— 一个菜单页、一个设置面板、
> 一个 HUD 元素，并且它能读写游戏状态。

## 心智模型：三层，各管一件事

Bannerlord 的 UI 不是「一个类画一个界面」。它是三层，每层的职责完全不重叠：

```text
① 布局层  XML prefab          「有哪些控件、摆在哪」—— 声明式，不是代码
② 行为层  GauntletMovie       「控件出现时干什么」—— 生命周期回调
③ 数据层  ViewModel           「显示什么值」—— 可绑定的属性
     +
     栈层  ScreenManager      「什么时候这个界面在屏幕上」
```

最常见的错误是**跳过②直接写③**或者**在①里塞逻辑**。XML 只描述结构，
代码只描述行为与数据。

## 下钻路径

| 步骤 | 做什么 | 打开 |
| --- | --- | --- |
| 1 | 建立整体概念，四层各是什么 | [Gauntlet UI 指南](../../v1.3.15/zh/guide/gauntlet-ui) |
| 2 | 写生命周期行为层 | [GauntletMovie](../../v1.3.15/zh/api/gui/GauntletMovie) |
| 3 | 把界面挂进屏幕栈 | [ScreenManager](../../v1.3.15/zh/api/gui/ScreenManager) · [ScreenBase（v1.3.15 · campaign-ext）](../../v1.3.15/zh/api/campaign-ext/ScreenBase) |
| 4 | 写可绑定的数据层 | [ViewModel](../../v1.3.15/zh/api/core-extra/ViewModel) |
| 5 | 需要自绘 / 渲染层产物时 | [GauntletLayer（engine 桶）](../../v1.3.15/zh/api/engine/GauntletLayer) |
| 6 | 这个面板要读写战役状态 | [做一个新的战役动作](../task-campaign-action) |
| 7 | 界面里要显示存档数据 | [读写存档](../task-save) |
| 8 | 从 XML 加载界面的完整走法 | [Gauntlet UI 指南](../../v1.3.15/zh/guide/gauntlet-ui) |

## 关键类型就这几个

- [GauntletMovie](../../v1.3.15/zh/api/gui/GauntletMovie) —— **界面本体**。
  它有明确的生命周期（创建、加载完成、每帧、销毁），在这些回调里做绑定与事件挂接。
- [ScreenManager](../../v1.3.15/zh/api/gui/ScreenManager) —— **屏幕栈**。
  「什么时候这个界面出现」由它管，不由你的类管。
- [ScreenBase（v1.3.15 树 · campaign-ext 桶）](../../v1.3.15/zh/api/campaign-ext/ScreenBase) —— 屏幕栈上的一个槽位。
  注意它在不同版本的文档树里落在不同桶，见下方提示。
- [ViewModel](../../v1.3.15/zh/api/core-extra/ViewModel) —— **数据绑定基类**。
  属性上加绑定特性，XML 里的控件就能跟着变。
- [GauntletLayer（engine 桶）](../../v1.3.15/zh/api/engine/GauntletLayer) —— 渲染层产物。
  只有要处理绘制/合成时才需要。

> **同名类多桶（写链接前必查）。** `ScreenBase` 这个类型在全站有 **10 个页面**：
> v1.3.15 与 v1.4.5 落在 `campaign-ext`，v1.4.6 / v1.4.7 / v1.5.3 落在 `gui`。
> 桶边界是按职责分的，不按名字分 —— 1.4.5 那个目录本身是混合的，无法用命名空间规则复现。
> `GauntletLayer` 则是**十个版本全在 `engine`**，因为源码里有 `TaleWorlds.GauntletUI`
> 与 `TaleWorlds.Engine.GauntletUI` 两个只差一级前缀的命名空间。
> **写类链接前先确定你指的是哪一版；返回多条命中时不得静默任选一条。**
> 上面链接文字里带版本与桶，就是这个原因。

## 你要注意什么

- **XML 里的控件名要和代码里绑定的名字一致。** 不一致的表现是「界面显示出来了但控件是空的」，
  没有任何报错。
- **生命周期回调里不要做重活。** 每帧回调（tick 类）里做分配或反射会直接掉帧。
- **`ScreenManager` 的入栈/出栈要配对。** 只 push 不 pop 会让界面再也关不掉，
  而且栈里的界面会继续吃输入。
- **ViewModel 是数据，不是行为。** 在 ViewModel 里改游戏状态会让绑定方向反过来，
  排查时非常难定位。状态变更走 [战役动作](../task-campaign-action)，界面只读。
- **界面在主菜单阶段也可能被打开。** 那时 `Campaign.Current` 是 `null`。
  任何读战役状态的绑定都要判空。
- **每帧读大量世界状态会卡。** 需要刷新就绑到 ViewModel 属性上，
  而不是每帧在回调里遍历英雄。

## 最小可运行形状

四层的分工，不是可运行代码：

```text
XML     : 声明一个按钮，命名与下面的绑定对上
Movie   : 在「加载完成」回调里把点击事件接到你的方法
Screen  : 定义这个屏幕在栈上的身份
VM      : 一个可绑定属性，XML 控件绑到它
```

具体 API 形状见 [GauntletMovie](../../v1.3.15/zh/api/gui/GauntletMovie) 与
[ViewModel](../../v1.3.15/zh/api/core-extra/ViewModel)。

## 常见 UI 模式

按钮点击、列表/网格、弹出对话框的完整写法都在
[Gauntlet UI 指南](../../v1.3.15/zh/guide/gauntlet-ui) 里，不必从类型页反推。

## 导航

- ↑ [跨版本中枢 / 任务入口](../)
- ↑ [站点首页](../../)
- ↔ [Gauntlet UI 指南](../../v1.3.15/zh/guide/gauntlet-ui) · [ScreenManager](../../v1.3.15/zh/api/gui/ScreenManager)

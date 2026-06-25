---
title: GauntletMovie
description: GauntletMovie - Gauntlet UI 影片，桥?UI Prefab ?ViewModel 并驱动更?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletMovie`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GauntletMovie
**命名空间:** TaleWorlds.GauntletUI.Data
**模块:** TaleWorlds.GauntletUI.Data
**类型:** class（实?

`IGauntletMovie

`?
## 概述
`GauntletMovie

` ?Gauntlet UI 系统?影片"（Movie）的实现，它把一?UI Prefab?prefab 模板）与一?

`ViewModel

` 绑定在一起，生成可渲染的 Widget 树，并每帧驱动数据绑定更新。它?

`GauntletMovie.Load

` 的返回类型，也是 UI 框架与业务逻辑之间的核心桥梁?
构造时接收 

`UIContext

`、`ViewModel

`、`movieName

`、`doManualUpdate

`。`Load

` 阙口通过 

`PrefabSystem

` 加载指定 

`movieName

` ?Prefab，用 

`WidgetFactory

` 生成 Widget 树，?

`ViewModel

` 注入?Widget。`Update

` 每帧调用，刷新所有数据绑定（

`Binding

`、`PropertyBinding

`、`EventBinding

`）。`Release

` 释放影片，销?Widget 树并解绑 ViewModel?
## 心智模型
?

`GauntletMovie

` 看作"一个运行中?UI 实例"。Prefab 是模板（类），Movie 是实例（对象）。一?Prefab 可以同时加载多个 Movie（如多个背包面板）。Movie 持有?Widget 引用（`RootView

`），每帧 

`Update

` ?ViewModel 属性变化推送到 Widget，把 Widget 事件（点击、拖拽）回调?ViewModel 命令。`doManualUpdate

` ?

`true

` 时不自动每帧更新，需外部手动?

`Update

`?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`MovieName

` \| 

`string

` \| Prefab 名称（只读） \|
\| 

`RootView

` \| 

`Widget

` \| ?Widget（只读） \|
\| 

`ViewModel

` \| 

`ViewModel

` \| 绑定的视图模型（只读?\|
\| 

`Context

` \| 

`UIContext

` \| UI 上下文（只读?\|
\| 

`WidgetFactory

` \| 

`WidgetFactory

` \| Widget 工厂（只读） \|
\| 

`BrushFactory

` \| 

`BrushFactory

` \| 画刷工厂（只读） \|

## 主要方法
### Update
`

`

`csharp
public void Update()
`

`

`
每帧调用：刷新所有数据绑定，?ViewModel 属性推送到 Widget，把 Widget 事件回调?ViewModel?
### Release
`

`

`csharp
public void Release()
`

`

`
释放影片：解?ViewModel，销?Widget 树，?UI 上下文注销?
### Load (静?
`

`

`csharp
public static IGauntletMovie Load(UIContext context, ViewModel viewModel,
    string movieName, bool doManualUpdate = false)
`

`

`
工厂方法：加载指?Prefab，构?

`GauntletMovie

`，生?Widget 树并绑定 ViewModel?
## 使用示例
### 示例: 加载并显示一?UI 面板
**场景**: 战役地图上显示任务面?

`

`

`csharp
// 1. 创建 ViewModel
var questVM = new QuestPanelVM(campaign);

// 2. 加载 Movie（加?Prefab 并绑?ViewModel?IGauntletMovie movie = GauntletMovie.Load(
    context: uiContext,
    viewModel: questVM,
    movieName: "QuestPanel",
    doManualUpdate: false);

// 3. 每帧自动 Update（由 UI 上下文驱动）
//    ViewModel 属性变??Widget 自动刷新
//    Widget 事件 ?ViewModel 命令自动调用

// 4. 关闭面板时释?movie.Release();
questVM.OnFinalize();
`

`

`
**要点**: 

`doManualUpdate

` ?

`true

` 时需外部每帧手动?

`Update

`，用于需要精确控制更新时机的场景（如编辑器）。`Release

` 必须?ViewModel ?

`OnFinalize

` 之前或之后调用，但不能跳过——否?Widget 树与绑定泄漏。`Load

` 会缓?Prefab 解析结果，重复加载同?Prefab 不会重新解析 XML。`RootView

` ?Widget 树的根，可手动遍历查找特?Widget（不推荐，应通过绑定操作）?
## 参见
- [完整类目录](../catalog-ui)
- [本领域目录](../catalog-ui)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)

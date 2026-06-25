---
title: "GauntletMovie"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletMovie`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMovie

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletMovie : IGauntletMovie`
**Base:** `IGauntletMovie`
**File:** `TaleWorlds.GauntletUI.Data/GauntletMovie.cs`

## 概述

`GauntletMovie` 位于 `TaleWorlds.GauntletUI.Data`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Data` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |
| `BrushFactory` | `public BrushFactory BrushFactory { get; }` |
| `Context` | `public UIContext Context { get; }` |
| `ViewModel` | `public IViewModel ViewModel { get; }` |
| `MovieName` | `public string MovieName { get; }` |
| `RootView` | `public GauntletView RootView { get; }` |
| `RootWidget` | `public Widget RootWidget { get; }` |
| `IsReleased` | `public bool IsReleased { get; }` |

## 主要方法

### RefreshDataSource
`public void RefreshDataSource(IViewModel dataSourve)`

**用途 / Purpose:** 刷新 `data source` 的显示或缓存。

### Release
`public void Release()`

**用途 / Purpose:** 处理 `release` 相关逻辑。

### Update
`public void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### Load
`public static IGauntletMovie Load(UIContext context, WidgetFactory widgetFactory, string movieName, IViewModel datasource, bool doNotUseGeneratedPrefabs, bool hotReloadEnabled)`

**用途 / Purpose:** 加载 `load` 数据。

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**用途 / Purpose:** 刷新 `binding with children` 的显示或缓存。

### FindViewOf
`public GauntletView FindViewOf(Widget widget)`

**用途 / Purpose:** 处理 `find view of` 相关逻辑。

## 使用示例

```csharp
var value = new GauntletMovie();
value.RefreshDataSource(dataSourve);
```

## 参见

- [完整类目录](../catalog)
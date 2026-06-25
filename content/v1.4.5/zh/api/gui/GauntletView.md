---
title: "GauntletView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletView`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletView

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletView : WidgetComponent`
**Base:** `WidgetComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.Data/TaleWorlds.GauntletUI.Data/GauntletView.cs`

## 概述

`GauntletView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GauntletMovie` | `public GauntletMovie GauntletMovie { get; }` |
| `ItemTemplateUsageWithData` | `public ItemTemplateUsageWithData ItemTemplateUsageWithData { get; set; }` |
| `ViewModelPath` | `public BindingPath ViewModelPath { get; }` |
| `ViewModelPathString` | `public string ViewModelPathString { get; }` |
| `Parent` | `public GauntletView Parent { get; }` |
| `DisplayName` | `public string DisplayName { get; }` |

## 主要方法

### AddChild
`public void AddChild(GauntletView child)`

**用途 / Purpose:** 向当前集合/状态中添加 `child`。

### RemoveChild
`public void RemoveChild(GauntletView child)`

**用途 / Purpose:** 从当前集合/状态中移除 `child`。

### SwapChildrenAtIndeces
`public void SwapChildrenAtIndeces(GauntletView child1, GauntletView child2)`

**用途 / Purpose:** 处理 `swap children at indeces` 相关逻辑。

### RefreshBinding
`public void RefreshBinding()`

**用途 / Purpose:** 刷新 `binding` 的显示或缓存。

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**用途 / Purpose:** 刷新 `binding with children` 的显示或缓存。

### ReleaseBindingWithChildren
`public void ReleaseBindingWithChildren()`

**用途 / Purpose:** 处理 `release binding with children` 相关逻辑。

### BindData
`public void BindData(string property, BindingPath path)`

**用途 / Purpose:** 处理 `bind data` 相关逻辑。

## 使用示例

```csharp
var view = new GauntletView();
```

## 参见

- [完整类目录](../catalog)
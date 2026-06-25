---
title: "GauntletView"
description: "GauntletView 的自动生成类参考。"
---
# GauntletView

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletView : WidgetComponent`
**Base:** `WidgetComponent`
**File:** `TaleWorlds.GauntletUI.Data/GauntletView.cs`

## 概述

`GauntletView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Tag` | `public object Tag { get; }` |
| `GauntletMovie` | `public GauntletMovie GauntletMovie { get; }` |
| `ItemTemplateUsageWithData` | `public ItemTemplateUsageWithData ItemTemplateUsageWithData { get; set; }` |
| `ViewModelPath` | `public BindingPath ViewModelPath { get; }` |
| `ViewModelPathString` | `public string ViewModelPathString { get; }` |
| `Children` | `public MBReadOnlyList<GauntletView> Children { get; }` |
| `AllChildren` | `public IEnumerable<GauntletView> AllChildren { get; }` |
| `Parent` | `public GauntletView Parent { get; }` |
| `DisplayName` | `public string DisplayName { get; }` |

## 主要方法

### AddChild
`public void AddChild(GauntletView child)`

**用途 / Purpose:** 将 child 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.AddChild(child);
```

### RemoveChild
`public void RemoveChild(GauntletView child)`

**用途 / Purpose:** 从当前容器或状态中移除 child。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.RemoveChild(child);
```

### SwapChildrenAtIndeces
`public void SwapChildrenAtIndeces(GauntletView child1, GauntletView child2)`

**用途 / Purpose:** 调用 SwapChildrenAtIndeces 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.SwapChildrenAtIndeces(child1, child2);
```

### RefreshBinding
`public void RefreshBinding()`

**用途 / Purpose:** 使 binding 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.RefreshBinding();
```

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**用途 / Purpose:** 使 binding with children 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.RefreshBindingWithChildren();
```

### ReleaseBindingWithChildren
`public void ReleaseBindingWithChildren()`

**用途 / Purpose:** 调用 ReleaseBindingWithChildren 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.ReleaseBindingWithChildren();
```

### BindData
`public void BindData(string property, BindingPath path)`

**用途 / Purpose:** 调用 BindData 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.BindData("example", path);
```

### ClearBinding
`public void ClearBinding(string propertyName)`

**用途 / Purpose:** 清空当前对象中的binding。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.ClearBinding("example");
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletView view = ...;
```

## 参见

- [本区域目录](../)
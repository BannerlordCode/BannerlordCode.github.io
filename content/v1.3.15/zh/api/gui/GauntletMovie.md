---
title: "GauntletMovie"
description: "GauntletMovie 的自动生成类参考。"
---
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
| `IsLoaded` | `public bool IsLoaded { get; }` |
| `IsReleased` | `public bool IsReleased { get; }` |

## 主要方法

### RefreshDataSource
`public void RefreshDataSource(IViewModel dataSourve)`

**用途 / Purpose:** **用途 / Purpose:** 使 data source 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GauntletMovie 实例
GauntletMovie gauntletMovie = ...;
gauntletMovie.RefreshDataSource(dataSourve);
```

### Release
`public void Release()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Release 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletMovie 实例
GauntletMovie gauntletMovie = ...;
gauntletMovie.Release();
```

### Update
`public void Update()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 GauntletMovie 实例
GauntletMovie gauntletMovie = ...;
gauntletMovie.Update();
```

### Load
`public static IGauntletMovie Load(UIContext context, WidgetFactory widgetFactory, string movieName, IViewModel datasource, bool doNotUseGeneratedPrefabs, bool hotReloadEnabled)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取当前对象的数据。

```csharp
// 静态调用，不需要实例
GauntletMovie.Load(context, widgetFactory, "example", datasource, false, false);
```

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**用途 / Purpose:** **用途 / Purpose:** 使 binding with children 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GauntletMovie 实例
GauntletMovie gauntletMovie = ...;
gauntletMovie.RefreshBindingWithChildren();
```

### FindViewOf
`public GauntletView FindViewOf(Widget widget)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的view of。

```csharp
// 先通过子系统 API 拿到 GauntletMovie 实例
GauntletMovie gauntletMovie = ...;
var result = gauntletMovie.FindViewOf(widget);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GauntletMovie gauntletMovie = ...;
gauntletMovie.RefreshDataSource(dataSourve);
```

## 参见

- [本区域目录](../)
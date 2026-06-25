---
title: "BannerBuilderLayerVM"
description: "BannerBuilderLayerVM 的自动生成类参考。"
---
# BannerBuilderLayerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderLayerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderLayerVM.cs`

## 概述

`BannerBuilderLayerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Data` | `public BannerData Data { get; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CanDeleteLayer` | `public bool CanDeleteLayer { get; set; }` |
| `IsLayerPattern` | `public bool IsLayerPattern { get; set; }` |
| `IsDrawStrokeActive` | `public bool IsDrawStrokeActive { get; set; }` |
| `IsMirrorActive` | `public bool IsMirrorActive { get; set; }` |
| `RotationValue` | `public float RotationValue { get; set; }` |
| `RotationValue360` | `public int RotationValue360 { get; set; }` |
| `IconID` | `public int IconID { get; set; }` |
| `LayerIndex` | `public int LayerIndex { get; set; }` |
| `EditableAreaSize` | `public int EditableAreaSize { get; set; }` |
| `TotalAreaSize` | `public int TotalAreaSize { get; set; }` |
| `IconIDAsString` | `public string IconIDAsString { get; set; }` |
| `Color1` | `public Color Color1 { get; set; }` |
| `Color2` | `public Color Color2 { get; set; }` |
| `Color1AsStr` | `public string Color1AsStr { get; set; }` |
| `Color2AsStr` | `public string Color2AsStr { get; set; }` |
| `PositionValue` | `public Vec2 PositionValue { get; set; }` |
| `PositionValueX` | `public float PositionValueX { get; set; }` |
| `PositionValueY` | `public float PositionValueY { get; set; }` |
| `SizeValue` | `public Vec2 SizeValue { get; set; }` |
| `SizeValueX` | `public float SizeValueX { get; set; }` |
| `SizeValueY` | `public float SizeValueY { get; set; }` |

## 主要方法

### Refresh
`public void Refresh()`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 BannerBuilderLayerVM 实例
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.Refresh();
```

### ExecuteDelete
`public void ExecuteDelete()`

**用途 / Purpose:** **用途 / Purpose:** 执行 delete 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderLayerVM 实例
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteDelete();
```

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** **用途 / Purpose:** 执行 selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderLayerVM 实例
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteSelection();
```

### SetLayerIndex
`public void SetLayerIndex(int newIndex)`

**用途 / Purpose:** **用途 / Purpose:** 为 layer index 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerBuilderLayerVM 实例
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.SetLayerIndex(0);
```

### ExecuteSelectColor1
`public void ExecuteSelectColor1()`

**用途 / Purpose:** **用途 / Purpose:** 执行 select color1 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderLayerVM 实例
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteSelectColor1();
```

### ExecuteSelectColor2
`public void ExecuteSelectColor2()`

**用途 / Purpose:** **用途 / Purpose:** 执行 select color2 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderLayerVM 实例
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteSelectColor2();
```

### ExecuteSwapColors
`public void ExecuteSwapColors()`

**用途 / Purpose:** **用途 / Purpose:** 执行 swap colors 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderLayerVM 实例
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteSwapColors();
```

### ExecuteCenterSigil
`public void ExecuteCenterSigil()`

**用途 / Purpose:** **用途 / Purpose:** 执行 center sigil 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderLayerVM 实例
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteCenterSigil();
```

### ExecuteResetSize
`public void ExecuteResetSize()`

**用途 / Purpose:** **用途 / Purpose:** 执行 reset size 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderLayerVM 实例
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteResetSize();
```

### ExecuteUpdateBanner
`public void ExecuteUpdateBanner()`

**用途 / Purpose:** **用途 / Purpose:** 执行 update banner 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderLayerVM 实例
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteUpdateBanner();
```

### SetLayerActions
`public static void SetLayerActions(Action refresh, Action<BannerBuilderLayerVM> onSelection, Action<BannerBuilderLayerVM> onDeletion, Action<int, Action<BannerBuilderColorItemVM>> onColorSelection)`

**用途 / Purpose:** **用途 / Purpose:** 为 layer actions 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
BannerBuilderLayerVM.SetLayerActions(refresh, onSelection, onDeletion, action<int, onColorSelection);
```

### ResetLayerActions
`public static void ResetLayerActions()`

**用途 / Purpose:** **用途 / Purpose:** 将 layer actions 重置回默认或初始状态。

```csharp
// 静态调用，不需要实例
BannerBuilderLayerVM.ResetLayerActions();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.Refresh();
```

## 参见

- [本区域目录](../)
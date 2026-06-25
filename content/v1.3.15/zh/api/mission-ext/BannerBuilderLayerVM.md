---
title: "BannerBuilderLayerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerBuilderLayerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### ExecuteDelete
`public void ExecuteDelete()`

**用途 / Purpose:** 执行 `delete` 操作或流程。

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** 执行 `selection` 操作或流程。

### SetLayerIndex
`public void SetLayerIndex(int newIndex)`

**用途 / Purpose:** 设置 `layer index` 的值或状态。

### ExecuteSelectColor1
`public void ExecuteSelectColor1()`

**用途 / Purpose:** 执行 `select color1` 操作或流程。

### ExecuteSelectColor2
`public void ExecuteSelectColor2()`

**用途 / Purpose:** 执行 `select color2` 操作或流程。

### ExecuteSwapColors
`public void ExecuteSwapColors()`

**用途 / Purpose:** 执行 `swap colors` 操作或流程。

### ExecuteCenterSigil
`public void ExecuteCenterSigil()`

**用途 / Purpose:** 执行 `center sigil` 操作或流程。

### ExecuteResetSize
`public void ExecuteResetSize()`

**用途 / Purpose:** 执行 `reset size` 操作或流程。

### ExecuteUpdateBanner
`public void ExecuteUpdateBanner()`

**用途 / Purpose:** 执行 `update banner` 操作或流程。

### SetLayerActions
`public static void SetLayerActions(Action refresh, Action<BannerBuilderLayerVM> onSelection, Action<BannerBuilderLayerVM> onDeletion, Action<int, Action<BannerBuilderColorItemVM>> onColorSelection)`

**用途 / Purpose:** 设置 `layer actions` 的值或状态。

### ResetLayerActions
`public static void ResetLayerActions()`

**用途 / Purpose:** 将 `layer actions` 重置为初始状态。

## 使用示例

```csharp
var value = new BannerBuilderLayerVM();
value.Refresh();
```

## 参见

- [完整类目录](../catalog)
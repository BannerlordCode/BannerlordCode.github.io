<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerBuilderLayerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerBuilderLayerVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`BannerBuilderLayerVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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


## 主要方法

### Refresh

```csharp
public void Refresh()
```

### ExecuteDelete

```csharp
public void ExecuteDelete()
```

### ExecuteSelection

```csharp
public void ExecuteSelection()
```

### SetLayerIndex

```csharp
public void SetLayerIndex(int newIndex)
```

### ExecuteSelectColor1

```csharp
public void ExecuteSelectColor1()
```

### ExecuteSelectColor2

```csharp
public void ExecuteSelectColor2()
```

### ExecuteSwapColors

```csharp
public void ExecuteSwapColors()
```

### ExecuteCenterSigil

```csharp
public void ExecuteCenterSigil()
```

### ExecuteResetSize

```csharp
public void ExecuteResetSize()
```

### ExecuteUpdateBanner

```csharp
public void ExecuteUpdateBanner()
```

### SetLayerActions

```csharp
public static void SetLayerActions(Action refresh, Action<BannerBuilderLayerVM> onSelection, Action<BannerBuilderLayerVM> onDeletion, Action<int, Action<BannerBuilderColorItemVM>> onColorSelection)
```

### ResetLayerActions

```csharp
public static void ResetLayerActions()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
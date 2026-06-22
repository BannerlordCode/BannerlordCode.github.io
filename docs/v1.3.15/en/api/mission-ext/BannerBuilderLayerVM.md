<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerBuilderLayerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerBuilderLayerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BannerBuilderLayerVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
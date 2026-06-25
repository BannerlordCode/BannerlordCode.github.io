---
title: "BannerBuilderLayerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerBuilderLayerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerBuilderLayerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderLayerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder/BannerBuilderLayerVM.cs`

## Overview

`BannerBuilderLayerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
| `SizeValue` | `public Vec2 SizeValue { get; set; }` |
| `SizeValueX` | `public float SizeValueX { get; set; }` |
| `SizeValueY` | `public float SizeValueY { get; set; }` |

## Key Methods

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### ExecuteDelete
`public void ExecuteDelete()`

**Purpose:** Executes the `delete` operation or workflow.

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Executes the `selection` operation or workflow.

### SetLayerIndex
`public void SetLayerIndex(int newIndex)`

**Purpose:** Sets the value or state of `layer index`.

### ExecuteSelectColor1
`public void ExecuteSelectColor1()`

**Purpose:** Executes the `select color1` operation or workflow.

### ExecuteSelectColor2
`public void ExecuteSelectColor2()`

**Purpose:** Executes the `select color2` operation or workflow.

### ExecuteSwapColors
`public void ExecuteSwapColors()`

**Purpose:** Executes the `swap colors` operation or workflow.

### ExecuteCenterSigil
`public void ExecuteCenterSigil()`

**Purpose:** Executes the `center sigil` operation or workflow.

### ExecuteResetSize
`public void ExecuteResetSize()`

**Purpose:** Executes the `reset size` operation or workflow.

### ExecuteUpdateBanner
`public void ExecuteUpdateBanner()`

**Purpose:** Executes the `update banner` operation or workflow.

### SetLayerActions
`public static void SetLayerActions(Action refresh, Action<BannerBuilderLayerVM> onSelection, Action<BannerBuilderLayerVM> onDeletion, Action<int, Action<BannerBuilderColorItemVM>> onColorSelection)`

**Purpose:** Sets the value or state of `layer actions`.

### ResetLayerActions
`public static void ResetLayerActions()`

**Purpose:** Resets `layer actions` to its initial state.

## Usage Example

```csharp
var value = new BannerBuilderLayerVM();
value.Refresh();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "BannerBuilderLayerVM"
description: "Auto-generated class reference for BannerBuilderLayerVM."
---
# BannerBuilderLayerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderLayerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder/BannerBuilderLayerVM.cs`

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

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of BannerBuilderLayerVM from the subsystem API first
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.Refresh();
```

### ExecuteDelete
`public void ExecuteDelete()`

**Purpose:** Runs the operation or workflow associated with `delete`.

```csharp
// Obtain an instance of BannerBuilderLayerVM from the subsystem API first
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteDelete();
```

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Runs the operation or workflow associated with `selection`.

```csharp
// Obtain an instance of BannerBuilderLayerVM from the subsystem API first
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteSelection();
```

### SetLayerIndex
`public void SetLayerIndex(int newIndex)`

**Purpose:** Assigns a new value to `layer index` and updates the object's internal state.

```csharp
// Obtain an instance of BannerBuilderLayerVM from the subsystem API first
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.SetLayerIndex(0);
```

### ExecuteSelectColor1
`public void ExecuteSelectColor1()`

**Purpose:** Runs the operation or workflow associated with `select color1`.

```csharp
// Obtain an instance of BannerBuilderLayerVM from the subsystem API first
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteSelectColor1();
```

### ExecuteSelectColor2
`public void ExecuteSelectColor2()`

**Purpose:** Runs the operation or workflow associated with `select color2`.

```csharp
// Obtain an instance of BannerBuilderLayerVM from the subsystem API first
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteSelectColor2();
```

### ExecuteSwapColors
`public void ExecuteSwapColors()`

**Purpose:** Runs the operation or workflow associated with `swap colors`.

```csharp
// Obtain an instance of BannerBuilderLayerVM from the subsystem API first
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteSwapColors();
```

### ExecuteCenterSigil
`public void ExecuteCenterSigil()`

**Purpose:** Runs the operation or workflow associated with `center sigil`.

```csharp
// Obtain an instance of BannerBuilderLayerVM from the subsystem API first
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteCenterSigil();
```

### ExecuteResetSize
`public void ExecuteResetSize()`

**Purpose:** Runs the operation or workflow associated with `reset size`.

```csharp
// Obtain an instance of BannerBuilderLayerVM from the subsystem API first
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteResetSize();
```

### ExecuteUpdateBanner
`public void ExecuteUpdateBanner()`

**Purpose:** Runs the operation or workflow associated with `update banner`.

```csharp
// Obtain an instance of BannerBuilderLayerVM from the subsystem API first
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.ExecuteUpdateBanner();
```

### SetLayerActions
`public static void SetLayerActions(Action refresh, Action<BannerBuilderLayerVM> onSelection, Action<BannerBuilderLayerVM> onDeletion, Action<int, Action<BannerBuilderColorItemVM>> onColorSelection)`

**Purpose:** Assigns a new value to `layer actions` and updates the object's internal state.

```csharp
// Static call; no instance required
BannerBuilderLayerVM.SetLayerActions(refresh, onSelection, onDeletion, action<int, onColorSelection);
```

### ResetLayerActions
`public static void ResetLayerActions()`

**Purpose:** Returns `layer actions` to its default or initial condition.

```csharp
// Static call; no instance required
BannerBuilderLayerVM.ResetLayerActions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerBuilderLayerVM bannerBuilderLayerVM = ...;
bannerBuilderLayerVM.Refresh();
```

## See Also

- [Area Index](../)
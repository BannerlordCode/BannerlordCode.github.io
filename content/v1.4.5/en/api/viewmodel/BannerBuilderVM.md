---
title: "BannerBuilderVM"
description: "Auto-generated class reference for BannerBuilderVM."
---
# BannerBuilderVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder/BannerBuilderVM.cs`

## Overview

`BannerBuilderVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentBanner` | `public Banner CurrentBanner { get; }` |
| `BannerImageIdentifier` | `public BannerImageIdentifierVM BannerImageIdentifier { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Categories` | `public MBBindingList<BannerBuilderCategoryVM> Categories { get; set; }` |
| `ColorSelection` | `public BannerBuilderColorSelectionVM ColorSelection { get; set; }` |
| `Layers` | `public MBBindingList<BannerBuilderLayerVM> Layers { get; set; }` |
| `CurrentSelectedLayer` | `public BannerBuilderLayerVM CurrentSelectedLayer { get; set; }` |
| `CurrentSelectedItem` | `public BannerBuilderItemVM CurrentSelectedItem { get; set; }` |
| `RandomizeHint` | `public HintViewModel RandomizeHint { get; set; }` |
| `UndoHint` | `public HintViewModel UndoHint { get; set; }` |
| `RedoHint` | `public HintViewModel RedoHint { get; set; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `DrawStrokeHint` | `public HintViewModel DrawStrokeHint { get; set; }` |
| `CenterHint` | `public HintViewModel CenterHint { get; set; }` |
| `ResetSizeHint` | `public HintViewModel ResetSizeHint { get; set; }` |
| `MirrorHint` | `public HintViewModel MirrorHint { get; set; }` |
| `CurrentShieldName` | `public string CurrentShieldName { get; set; }` |
| `MinIconSize` | `public int MinIconSize { get; set; }` |
| `MaxIconSize` | `public int MaxIconSize { get; set; }` |
| `BannerCodeAsString` | `public string BannerCodeAsString { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `BannerVM` | `public BannerViewModel BannerVM { get; set; }` |
| `IconCodes` | `public string IconCodes { get; set; }` |
| `ColorCodes` | `public string ColorCodes { get; set; }` |
| `CanChangeBackgroundColor` | `public bool CanChangeBackgroundColor { get; set; }` |
| `IsBannerPreviewsActive` | `public bool IsBannerPreviewsActive { get; set; }` |
| `IsEditorPreviewActive` | `public bool IsEditorPreviewActive { get; set; }` |
| `IsLayerPreviewActive` | `public bool IsLayerPreviewActive { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.RefreshValues();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteCancel();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteDone();
```

### ExecuteAddDefaultLayer
`public void ExecuteAddDefaultLayer()`

**Purpose:** Runs the operation or workflow associated with add default layer.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteAddDefaultLayer();
```

### ExecuteDuplicateCurrentLayer
`public void ExecuteDuplicateCurrentLayer()`

**Purpose:** Runs the operation or workflow associated with duplicate current layer.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteDuplicateCurrentLayer();
```

### ExecuteCopyBannerCode
`public void ExecuteCopyBannerCode()`

**Purpose:** Runs the operation or workflow associated with copy banner code.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteCopyBannerCode();
```

### ExecuteReorderWithParameters
`public void ExecuteReorderWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)`

**Purpose:** Runs the operation or workflow associated with reorder with parameters.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteReorderWithParameters(layer, 0, "example");
```

### ExecuteReorderToEndWithParameters
`public void ExecuteReorderToEndWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)`

**Purpose:** Runs the operation or workflow associated with reorder to end with parameters.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteReorderToEndWithParameters(layer, 0, "example");
```

### GetBannerCode
`public string GetBannerCode()`

**Purpose:** Reads and returns the banner code value held by the this instance.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
var result = bannerBuilderVM.GetBannerCode();
```

### SetBannerCode
`public void SetBannerCode(string v)`

**Purpose:** Assigns a new value to banner code and updates the object's internal state.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.SetBannerCode("example");
```

### TranslateCurrentLayerWith
`public void TranslateCurrentLayerWith(Vec2 moveDirection)`

**Purpose:** Executes the TranslateCurrentLayerWith logic.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.TranslateCurrentLayerWith(moveDirection);
```

### DeleteCurrentLayer
`public void DeleteCurrentLayer()`

**Purpose:** Executes the DeleteCurrentLayer logic.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.DeleteCurrentLayer();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of BannerBuilderVM from the subsystem API first
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.RefreshValues();
```

## See Also

- [Area Index](../)
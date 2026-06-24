<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerBuilderVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerBuilderVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteAddDefaultLayer
`public void ExecuteAddDefaultLayer()`

**Purpose:** Executes the `add default layer` operation or workflow.

### ExecuteDuplicateCurrentLayer
`public void ExecuteDuplicateCurrentLayer()`

**Purpose:** Executes the `duplicate current layer` operation or workflow.

### ExecuteCopyBannerCode
`public void ExecuteCopyBannerCode()`

**Purpose:** Executes the `copy banner code` operation or workflow.

### ExecuteReorderWithParameters
`public void ExecuteReorderWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)`

**Purpose:** Executes the `reorder with parameters` operation or workflow.

### ExecuteReorderToEndWithParameters
`public void ExecuteReorderToEndWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)`

**Purpose:** Executes the `reorder to end with parameters` operation or workflow.

### GetBannerCode
`public string GetBannerCode()`

**Purpose:** Gets the current value of `banner code`.

### SetBannerCode
`public void SetBannerCode(string v)`

**Purpose:** Sets the value or state of `banner code`.

### TranslateCurrentLayerWith
`public void TranslateCurrentLayerWith(Vec2 moveDirection)`

**Purpose:** Handles logic related to `translate current layer with`.

### DeleteCurrentLayer
`public void DeleteCurrentLayer()`

**Purpose:** Handles logic related to `delete current layer`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new BannerBuilderVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
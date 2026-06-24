<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CheerBarkNodeItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CheerBarkNodeItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CheerBarkNodeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CheerBarkNodeItemVM.cs`

## Overview

`CheerBarkNodeItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `SubNodes` | `public MBBindingList<CheerBarkNodeItemVM> SubNodes { get; set; }` |
| `CheerNameText` | `public string CheerNameText { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasSubNodes` | `public bool HasSubNodes { get; set; }` |
| `TypeAsString` | `public string TypeAsString { get; set; }` |
| `TauntVisualName` | `public string TauntVisualName { get; set; }` |
| `SelectedNodeText` | `public string SelectedNodeText { get; set; }` |

## Key Methods

### ClearSelectionRecursive
`public void ClearSelectionRecursive()`

**Purpose:** Handles logic related to `clear selection recursive`.

### ExecuteFocused
`public void ExecuteFocused()`

**Purpose:** Executes the `focused` operation or workflow.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### AddSubNode
`public void AddSubNode(CheerBarkNodeItemVM subNode)`

**Purpose:** Adds `sub node` to the current collection or state.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new CheerBarkNodeItemVM();
value.ClearSelectionRecursive();
```

## See Also

- [Complete Class Catalog](../catalog)
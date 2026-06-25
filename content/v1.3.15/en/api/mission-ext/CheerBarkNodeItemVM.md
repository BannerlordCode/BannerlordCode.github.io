---
title: "CheerBarkNodeItemVM"
description: "Auto-generated class reference for CheerBarkNodeItemVM."
---
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

**Purpose:** **Purpose:** Removes all selection recursive from the this instance.

```csharp
// Obtain an instance of CheerBarkNodeItemVM from the subsystem API first
CheerBarkNodeItemVM cheerBarkNodeItemVM = ...;
cheerBarkNodeItemVM.ClearSelectionRecursive();
```

### ExecuteFocused
`public void ExecuteFocused()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with focused.

```csharp
// Obtain an instance of CheerBarkNodeItemVM from the subsystem API first
CheerBarkNodeItemVM cheerBarkNodeItemVM = ...;
cheerBarkNodeItemVM.ExecuteFocused();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of CheerBarkNodeItemVM from the subsystem API first
CheerBarkNodeItemVM cheerBarkNodeItemVM = ...;
cheerBarkNodeItemVM.RefreshValues();
```

### AddSubNode
`public void AddSubNode(CheerBarkNodeItemVM subNode)`

**Purpose:** **Purpose:** Adds sub node to the current collection or state.

```csharp
// Obtain an instance of CheerBarkNodeItemVM from the subsystem API first
CheerBarkNodeItemVM cheerBarkNodeItemVM = ...;
cheerBarkNodeItemVM.AddSubNode(subNode);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of CheerBarkNodeItemVM from the subsystem API first
CheerBarkNodeItemVM cheerBarkNodeItemVM = ...;
cheerBarkNodeItemVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CheerBarkNodeItemVM cheerBarkNodeItemVM = ...;
cheerBarkNodeItemVM.ClearSelectionRecursive();
```

## See Also

- [Area Index](../)
---
title: "SelectorVM"
description: "Auto-generated class reference for SelectorVM."
---
# SelectorVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Selector
**Module:** TaleWorlds.Core
**Type:** `public class SelectorVM<T> : ViewModel where T : SelectorItemVM`
**Base:** `ViewModel where T : SelectorItemVM`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Selector/SelectorVM.cs`

## Overview

`SelectorVM` lives in `TaleWorlds.Core.ViewModelCollection.Selector` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Selector` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemList` | `public MBBindingList<T> ItemList { get; set; }` |
| `SelectedIndex` | `public int SelectedIndex { get; set; }` |
| `SelectedItem` | `public T SelectedItem { get; set; }` |
| `HasSingleItem` | `public bool HasSingleItem { get; set; }` |

## Key Methods

### Refresh
`public void Refresh(IEnumerable<string> list, int selectedIndex, Action<SelectorVM<T>> onChange)`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of SelectorVM from the subsystem API first
SelectorVM selectorVM = ...;
selectorVM.Refresh(list, 0, onChange);
```

### Refresh
`public void Refresh(IEnumerable<TextObject> list, int selectedIndex, Action<SelectorVM<T>> onChange)`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of SelectorVM from the subsystem API first
SelectorVM selectorVM = ...;
selectorVM.Refresh(list, 0, onChange);
```

### Refresh
`public void Refresh(IEnumerable<T> list, int selectedIndex, Action<SelectorVM<T>> onChange)`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of SelectorVM from the subsystem API first
SelectorVM selectorVM = ...;
selectorVM.Refresh(list, 0, onChange);
```

### SetOnChangeAction
`public void SetOnChangeAction(Action<SelectorVM<T>> onChange)`

**Purpose:** Assigns a new value to `on change action` and updates the object's internal state.

```csharp
// Obtain an instance of SelectorVM from the subsystem API first
SelectorVM selectorVM = ...;
selectorVM.SetOnChangeAction(onChange);
```

### AddItem
`public void AddItem(T item)`

**Purpose:** Adds `item` to the current collection or state.

```csharp
// Obtain an instance of SelectorVM from the subsystem API first
SelectorVM selectorVM = ...;
selectorVM.AddItem(item);
```

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** Runs the operation or workflow associated with `randomize`.

```csharp
// Obtain an instance of SelectorVM from the subsystem API first
SelectorVM selectorVM = ...;
selectorVM.ExecuteRandomize();
```

### ExecuteSelectNextItem
`public void ExecuteSelectNextItem()`

**Purpose:** Runs the operation or workflow associated with `select next item`.

```csharp
// Obtain an instance of SelectorVM from the subsystem API first
SelectorVM selectorVM = ...;
selectorVM.ExecuteSelectNextItem();
```

### ExecuteSelectPreviousItem
`public void ExecuteSelectPreviousItem()`

**Purpose:** Runs the operation or workflow associated with `select previous item`.

```csharp
// Obtain an instance of SelectorVM from the subsystem API first
SelectorVM selectorVM = ...;
selectorVM.ExecuteSelectPreviousItem();
```

### GetCurrentItem
`public T GetCurrentItem()`

**Purpose:** Reads and returns the `current item` value held by the current object.

```csharp
// Obtain an instance of SelectorVM from the subsystem API first
SelectorVM selectorVM = ...;
var result = selectorVM.GetCurrentItem();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of SelectorVM from the subsystem API first
SelectorVM selectorVM = ...;
selectorVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SelectorVM selectorVM = ...;
selectorVM.Refresh(list, 0, onChange);
```

## See Also

- [Area Index](../)
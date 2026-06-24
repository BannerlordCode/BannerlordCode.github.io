<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SelectorVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SelectorVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Selector
**Module:** TaleWorlds.Core
**Type:** `public class SelectorVM<T> : ViewModel where T : SelectorItemVM`
**Base:** `ViewModel where T : SelectorItemVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Selector/SelectorVM.cs`

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

**Purpose:** Refreshes the display or cache of `refresh`.

### Refresh
`public void Refresh(IEnumerable<TextObject> list, int selectedIndex, Action<SelectorVM<T>> onChange)`

**Purpose:** Refreshes the display or cache of `refresh`.

### Refresh
`public void Refresh(IEnumerable<T> list, int selectedIndex, Action<SelectorVM<T>> onChange)`

**Purpose:** Refreshes the display or cache of `refresh`.

### SetOnChangeAction
`public void SetOnChangeAction(Action<SelectorVM<T>> onChange)`

**Purpose:** Sets the value or state of `on change action`.

### AddItem
`public void AddItem(T item)`

**Purpose:** Adds `item` to the current collection or state.

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** Executes the `randomize` operation or workflow.

### ExecuteSelectNextItem
`public void ExecuteSelectNextItem()`

**Purpose:** Executes the `select next item` operation or workflow.

### ExecuteSelectPreviousItem
`public void ExecuteSelectPreviousItem()`

**Purpose:** Executes the `select previous item` operation or workflow.

### GetCurrentItem
`public T GetCurrentItem()`

**Purpose:** Gets the current value of `current item`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new SelectorVM();
value.Refresh(list, 0, onChange);
```

## See Also

- [Complete Class Catalog](../catalog)
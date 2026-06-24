<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SelectorItemVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SelectorItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Selector
**Module:** TaleWorlds.Core
**Type:** `public class SelectorItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs`

## Overview

`SelectorItemVM` lives in `TaleWorlds.Core.ViewModelCollection.Selector` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Selector` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringItem` | `public string StringItem { get; set; }` |
| `CanBeSelected` | `public bool CanBeSelected { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new SelectorItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
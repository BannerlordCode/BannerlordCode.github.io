<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EscapeMenuVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EscapeMenuVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EscapeMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu/EscapeMenuVM.cs`

## Overview

`EscapeMenuVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `MenuItems` | `public MBBindingList<EscapeMenuItemVM> MenuItems { get; set; }` |
| `Tips` | `public GameTipsVM Tips { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Tick
`public virtual void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### RefreshItems
`public void RefreshItems(IEnumerable<EscapeMenuItemVM> items)`

**Purpose:** Refreshes the display or cache of `items`.

## Usage Example

```csharp
var value = new EscapeMenuVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
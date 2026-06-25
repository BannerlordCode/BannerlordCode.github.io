---
title: "EscapeMenuVM"
description: "Auto-generated class reference for EscapeMenuVM."
---
# EscapeMenuVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EscapeMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu/EscapeMenuVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EscapeMenuVM from the subsystem API first
EscapeMenuVM escapeMenuVM = ...;
escapeMenuVM.RefreshValues();
```

### Tick
`public virtual void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of EscapeMenuVM from the subsystem API first
EscapeMenuVM escapeMenuVM = ...;
escapeMenuVM.Tick(0);
```

### RefreshItems
`public void RefreshItems(IEnumerable<EscapeMenuItemVM> items)`

**Purpose:** Keeps the display or cache of items in sync with the underlying state.

```csharp
// Obtain an instance of EscapeMenuVM from the subsystem API first
EscapeMenuVM escapeMenuVM = ...;
escapeMenuVM.RefreshItems(items);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EscapeMenuVM escapeMenuVM = ...;
escapeMenuVM.RefreshValues();
```

## See Also

- [Area Index](../)
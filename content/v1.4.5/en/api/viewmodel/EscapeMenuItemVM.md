---
title: "EscapeMenuItemVM"
description: "Auto-generated class reference for EscapeMenuItemVM."
---
# EscapeMenuItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EscapeMenuItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu/EscapeMenuItemVM.cs`

## Overview

`EscapeMenuItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsPositiveBehaviored` | `public bool IsPositiveBehaviored { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EscapeMenuItemVM from the subsystem API first
EscapeMenuItemVM escapeMenuItemVM = ...;
escapeMenuItemVM.RefreshValues();
```

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of EscapeMenuItemVM from the subsystem API first
EscapeMenuItemVM escapeMenuItemVM = ...;
escapeMenuItemVM.ExecuteAction();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EscapeMenuItemVM escapeMenuItemVM = ...;
escapeMenuItemVM.RefreshValues();
```

## See Also

- [Area Index](../)
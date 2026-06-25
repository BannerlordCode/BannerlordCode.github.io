---
title: "InitialMenuOptionVM"
description: "Auto-generated class reference for InitialMenuOptionVM."
---
# InitialMenuOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialMenuOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu/InitialMenuOptionVM.cs`

## Overview

`InitialMenuOptionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `EnabledHint` | `public HintViewModel EnabledHint { get; set; }` |

## Key Methods

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of InitialMenuOptionVM from the subsystem API first
InitialMenuOptionVM initialMenuOptionVM = ...;
initialMenuOptionVM.ExecuteAction();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of InitialMenuOptionVM from the subsystem API first
InitialMenuOptionVM initialMenuOptionVM = ...;
initialMenuOptionVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InitialMenuOptionVM initialMenuOptionVM = ...;
initialMenuOptionVM.ExecuteAction();
```

## See Also

- [Area Index](../)
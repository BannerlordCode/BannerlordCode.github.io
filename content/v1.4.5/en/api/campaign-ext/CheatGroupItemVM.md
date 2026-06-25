---
title: "CheatGroupItemVM"
description: "Auto-generated class reference for CheatGroupItemVM."
---
# CheatGroupItemVM

**Namespace:** SandBox.ViewModelCollection.Map.Cheat
**Module:** SandBox.ViewModelCollection
**Type:** `public class CheatGroupItemVM : CheatItemBaseVM`
**Base:** `CheatItemBaseVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Cheat/CheatGroupItemVM.cs`

## Overview

`CheatGroupItemVM` lives in `SandBox.ViewModelCollection.Map.Cheat` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Cheat` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of CheatGroupItemVM from the subsystem API first
CheatGroupItemVM cheatGroupItemVM = ...;
cheatGroupItemVM.RefreshValues();
```

### ExecuteAction
`public override void ExecuteAction()`

**Purpose:** Runs the operation or workflow associated with `action`.

```csharp
// Obtain an instance of CheatGroupItemVM from the subsystem API first
CheatGroupItemVM cheatGroupItemVM = ...;
cheatGroupItemVM.ExecuteAction();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CheatGroupItemVM cheatGroupItemVM = ...;
cheatGroupItemVM.RefreshValues();
```

## See Also

- [Area Index](../)
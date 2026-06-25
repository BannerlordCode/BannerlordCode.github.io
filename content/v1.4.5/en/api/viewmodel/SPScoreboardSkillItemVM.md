---
title: "SPScoreboardSkillItemVM"
description: "Auto-generated class reference for SPScoreboardSkillItemVM."
---
# SPScoreboardSkillItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardSkillItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardSkillItemVM.cs`

## Overview

`SPScoreboardSkillItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Level` | `public string Level { get; set; }` |
| `SkillId` | `public string SkillId { get; set; }` |
| `Description` | `public string Description { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SPScoreboardSkillItemVM from the subsystem API first
SPScoreboardSkillItemVM sPScoreboardSkillItemVM = ...;
sPScoreboardSkillItemVM.RefreshValues();
```

### UpdateSkill
`public void UpdateSkill(int newValue)`

**Purpose:** Recalculates and stores the latest representation of skill.

```csharp
// Obtain an instance of SPScoreboardSkillItemVM from the subsystem API first
SPScoreboardSkillItemVM sPScoreboardSkillItemVM = ...;
sPScoreboardSkillItemVM.UpdateSkill(0);
```

### IsValid
`public bool IsValid()`

**Purpose:** Determines whether the this instance is in the valid state or condition.

```csharp
// Obtain an instance of SPScoreboardSkillItemVM from the subsystem API first
SPScoreboardSkillItemVM sPScoreboardSkillItemVM = ...;
var result = sPScoreboardSkillItemVM.IsValid();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPScoreboardSkillItemVM sPScoreboardSkillItemVM = ...;
sPScoreboardSkillItemVM.RefreshValues();
```

## See Also

- [Area Index](../)
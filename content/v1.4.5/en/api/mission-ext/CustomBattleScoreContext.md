---
title: "CustomBattleScoreContext"
description: "Auto-generated class reference for CustomBattleScoreContext."
---
# CustomBattleScoreContext

**Namespace:** TaleWorlds.MountAndBlade.Missions.BattleScore
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleScoreContext : BattleScoreContext`
**Base:** `BattleScoreContext`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.BattleScore/CustomBattleScoreContext.cs`

## Overview

`CustomBattleScoreContext` lives in `TaleWorlds.MountAndBlade.Missions.BattleScore` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.BattleScore` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAttackerBanner
`public override Banner GetAttackerBanner()`

**Purpose:** Reads and returns the attacker banner value held by the this instance.

```csharp
// Obtain an instance of CustomBattleScoreContext from the subsystem API first
CustomBattleScoreContext customBattleScoreContext = ...;
var result = customBattleScoreContext.GetAttackerBanner();
```

### GetDefenderBanner
`public override Banner GetDefenderBanner()`

**Purpose:** Reads and returns the defender banner value held by the this instance.

```csharp
// Obtain an instance of CustomBattleScoreContext from the subsystem API first
CustomBattleScoreContext customBattleScoreContext = ...;
var result = customBattleScoreContext.GetDefenderBanner();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleScoreContext customBattleScoreContext = ...;
customBattleScoreContext.GetAttackerBanner();
```

## See Also

- [Area Index](../)
---
title: "SandboxMissionBattleScoreContext"
description: "Auto-generated class reference for SandboxMissionBattleScoreContext."
---
# SandboxMissionBattleScoreContext

**Namespace:** SandBox.Missions.BattleScore
**Module:** SandBox.Missions
**Type:** `public class SandboxMissionBattleScoreContext : BattleScoreContext`
**Base:** `BattleScoreContext`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.BattleScore/SandboxMissionBattleScoreContext.cs`

## Overview

`SandboxMissionBattleScoreContext` lives in `SandBox.Missions.BattleScore` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.BattleScore` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAttackerBanner
`public override Banner GetAttackerBanner()`

**Purpose:** Reads and returns the attacker banner value held by the this instance.

```csharp
// Obtain an instance of SandboxMissionBattleScoreContext from the subsystem API first
SandboxMissionBattleScoreContext sandboxMissionBattleScoreContext = ...;
var result = sandboxMissionBattleScoreContext.GetAttackerBanner();
```

### GetDefenderBanner
`public override Banner GetDefenderBanner()`

**Purpose:** Reads and returns the defender banner value held by the this instance.

```csharp
// Obtain an instance of SandboxMissionBattleScoreContext from the subsystem API first
SandboxMissionBattleScoreContext sandboxMissionBattleScoreContext = ...;
var result = sandboxMissionBattleScoreContext.GetDefenderBanner();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SandboxMissionBattleScoreContext sandboxMissionBattleScoreContext = ...;
sandboxMissionBattleScoreContext.GetAttackerBanner();
```

## See Also

- [Area Index](../)
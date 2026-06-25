---
title: "SandboxSimulationBattleScoreContext"
description: "Auto-generated class reference for SandboxSimulationBattleScoreContext."
---
# SandboxSimulationBattleScoreContext

**Namespace:** SandBox.Missions.BattleScore
**Module:** SandBox.Missions
**Type:** `public class SandboxSimulationBattleScoreContext : BattleScoreContext`
**Base:** `BattleScoreContext`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.BattleScore/SandboxSimulationBattleScoreContext.cs`

## Overview

`SandboxSimulationBattleScoreContext` lives in `SandBox.Missions.BattleScore` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.BattleScore` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAttackerBanner
`public override Banner GetAttackerBanner()`

**Purpose:** Reads and returns the attacker banner value held by the this instance.

```csharp
// Obtain an instance of SandboxSimulationBattleScoreContext from the subsystem API first
SandboxSimulationBattleScoreContext sandboxSimulationBattleScoreContext = ...;
var result = sandboxSimulationBattleScoreContext.GetAttackerBanner();
```

### GetDefenderBanner
`public override Banner GetDefenderBanner()`

**Purpose:** Reads and returns the defender banner value held by the this instance.

```csharp
// Obtain an instance of SandboxSimulationBattleScoreContext from the subsystem API first
SandboxSimulationBattleScoreContext sandboxSimulationBattleScoreContext = ...;
var result = sandboxSimulationBattleScoreContext.GetDefenderBanner();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SandboxSimulationBattleScoreContext sandboxSimulationBattleScoreContext = ...;
sandboxSimulationBattleScoreContext.GetAttackerBanner();
```

## See Also

- [Area Index](../)
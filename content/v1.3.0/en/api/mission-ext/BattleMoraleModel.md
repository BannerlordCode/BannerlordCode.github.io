---
title: "BattleMoraleModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleMoraleModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel>`
**Base:** `MBGameModel<BattleMoraleModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs`

## Overview

`BattleMoraleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BattleMoraleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMaxMoraleChangeDueToAgentIncapacitated
`public abstract ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)`

**Purpose:** Handles logic related to `calculate max morale change due to agent incapacitated`.

### CalculateMaxMoraleChangeDueToAgentPanicked
`public abstract ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)`

**Purpose:** Handles logic related to `calculate max morale change due to agent panicked`.

### CalculateMoraleChangeToCharacter
`public abstract float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**Purpose:** Handles logic related to `calculate morale change to character`.

### GetEffectiveInitialMorale
`public abstract float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**Purpose:** Gets the current value of `effective initial morale`.

### CanPanicDueToMorale
`public abstract bool CanPanicDueToMorale(Agent agent)`

**Purpose:** Checks whether the current object can `panic due to morale`.

### CalculateCasualtiesFactor
`public abstract float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**Purpose:** Handles logic related to `calculate casualties factor`.

### GetAverageMorale
`public abstract float GetAverageMorale(Formation formation)`

**Purpose:** Gets the current value of `average morale`.

### CalculateMoraleChangeOnShipSunk
`public abstract float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**Purpose:** Handles logic related to `calculate morale change on ship sunk`.

### CalculateMoraleOnRamming
`public abstract float CalculateMoraleOnRamming(Agent agent)`

**Purpose:** Handles logic related to `calculate morale on ramming`.

## Usage Example

```csharp
var implementation = new CustomBattleMoraleModel();
```

## See Also

- [Complete Class Catalog](../catalog)
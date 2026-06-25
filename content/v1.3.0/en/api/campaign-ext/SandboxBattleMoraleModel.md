---
title: "SandboxBattleMoraleModel"
description: "Auto-generated class reference for SandboxBattleMoraleModel."
---
# SandboxBattleMoraleModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxBattleMoraleModel : BattleMoraleModel`
**Base:** `BattleMoraleModel`
**File:** `SandBox/GameComponents/SandboxBattleMoraleModel.cs`

## Overview

`SandboxBattleMoraleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxBattleMoraleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMaxMoraleChangeDueToAgentIncapacitated
`public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)`

**Purpose:** Calculates the current value or result of `max morale change due to agent incapacitated`.

```csharp
// Obtain an instance of SandboxBattleMoraleModel from the subsystem API first
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CalculateMaxMoraleChangeDueToAgentIncapacitated(affectedAgent, affectedAgentState, affectorAgent, killingBlow);
```

### CalculateMaxMoraleChangeDueToAgentPanicked
`public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)`

**Purpose:** Calculates the current value or result of `max morale change due to agent panicked`.

```csharp
// Obtain an instance of SandboxBattleMoraleModel from the subsystem API first
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CalculateMaxMoraleChangeDueToAgentPanicked(agent);
```

### CalculateMoraleChangeToCharacter
`public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**Purpose:** Calculates the current value or result of `morale change to character`.

```csharp
// Obtain an instance of SandboxBattleMoraleModel from the subsystem API first
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CalculateMoraleChangeToCharacter(agent, 0);
```

### GetEffectiveInitialMorale
`public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**Purpose:** Reads and returns the `effective initial morale` value held by the current object.

```csharp
// Obtain an instance of SandboxBattleMoraleModel from the subsystem API first
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.GetEffectiveInitialMorale(agent, 0);
```

### CanPanicDueToMorale
`public override bool CanPanicDueToMorale(Agent agent)`

**Purpose:** Checks whether the current object meets the preconditions for `panic due to morale`.

```csharp
// Obtain an instance of SandboxBattleMoraleModel from the subsystem API first
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CanPanicDueToMorale(agent);
```

### CalculateCasualtiesFactor
`public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**Purpose:** Calculates the current value or result of `casualties factor`.

```csharp
// Obtain an instance of SandboxBattleMoraleModel from the subsystem API first
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CalculateCasualtiesFactor(battleSide);
```

### GetAverageMorale
`public override float GetAverageMorale(Formation formation)`

**Purpose:** Reads and returns the `average morale` value held by the current object.

```csharp
// Obtain an instance of SandboxBattleMoraleModel from the subsystem API first
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.GetAverageMorale(formation);
```

### CalculateMoraleChangeOnShipSunk
`public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**Purpose:** Calculates the current value or result of `morale change on ship sunk`.

```csharp
// Obtain an instance of SandboxBattleMoraleModel from the subsystem API first
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CalculateMoraleChangeOnShipSunk(shipOrigin);
```

### CalculateMoraleOnRamming
`public override float CalculateMoraleOnRamming(Agent agent)`

**Purpose:** Calculates the current value or result of `morale on ramming`.

```csharp
// Obtain an instance of SandboxBattleMoraleModel from the subsystem API first
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CalculateMoraleOnRamming(agent);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxBattleMoraleModel>(new MySandboxBattleMoraleModel());
```

## See Also

- [Area Index](../)
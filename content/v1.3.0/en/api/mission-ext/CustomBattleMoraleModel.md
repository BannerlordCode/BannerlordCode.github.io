---
title: "CustomBattleMoraleModel"
description: "Auto-generated class reference for CustomBattleMoraleModel."
---
# CustomBattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleMoraleModel : BattleMoraleModel`
**Base:** `BattleMoraleModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleMoraleModel.cs`

## Overview

`CustomBattleMoraleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CustomBattleMoraleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMaxMoraleChangeDueToAgentIncapacitated
`public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)`

**Purpose:** **Purpose:** Calculates the current value or result of max morale change due to agent incapacitated.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMaxMoraleChangeDueToAgentIncapacitated(affectedAgent, affectedAgentState, affectorAgent, killingBlow);
```

### CalculateMaxMoraleChangeDueToAgentPanicked
`public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)`

**Purpose:** **Purpose:** Calculates the current value or result of max morale change due to agent panicked.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMaxMoraleChangeDueToAgentPanicked(agent);
```

### CalculateMoraleChangeToCharacter
`public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**Purpose:** **Purpose:** Calculates the current value or result of morale change to character.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMoraleChangeToCharacter(agent, 0);
```

### GetEffectiveInitialMorale
`public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**Purpose:** **Purpose:** Reads and returns the effective initial morale value held by the this instance.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.GetEffectiveInitialMorale(agent, 0);
```

### CanPanicDueToMorale
`public override bool CanPanicDueToMorale(Agent agent)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for panic due to morale.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CanPanicDueToMorale(agent);
```

### CalculateCasualtiesFactor
`public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**Purpose:** **Purpose:** Calculates the current value or result of casualties factor.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateCasualtiesFactor(battleSide);
```

### GetAverageMorale
`public override float GetAverageMorale(Formation formation)`

**Purpose:** **Purpose:** Reads and returns the average morale value held by the this instance.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.GetAverageMorale(formation);
```

### CalculateMoraleChangeOnShipSunk
`public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**Purpose:** **Purpose:** Calculates the current value or result of morale change on ship sunk.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMoraleChangeOnShipSunk(shipOrigin);
```

### CalculateMoraleOnRamming
`public override float CalculateMoraleOnRamming(Agent agent)`

**Purpose:** **Purpose:** Calculates the current value or result of morale on ramming.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMoraleOnRamming(agent);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleMoraleModel>(new MyCustomBattleMoraleModel());
```

## See Also

- [Area Index](../)
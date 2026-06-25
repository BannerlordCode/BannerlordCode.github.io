---
title: "BattleMoraleModel"
description: "Auto-generated class reference for BattleMoraleModel."
---
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

**Purpose:** **Purpose:** Calculates the current value or result of max morale change due to agent incapacitated.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMaxMoraleChangeDueToAgentIncapacitated(affectedAgent, affectedAgentState, affectorAgent, killingBlow);
```

### CalculateMaxMoraleChangeDueToAgentPanicked
`public abstract ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)`

**Purpose:** **Purpose:** Calculates the current value or result of max morale change due to agent panicked.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMaxMoraleChangeDueToAgentPanicked(agent);
```

### CalculateMoraleChangeToCharacter
`public abstract float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**Purpose:** **Purpose:** Calculates the current value or result of morale change to character.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMoraleChangeToCharacter(agent, 0);
```

### GetEffectiveInitialMorale
`public abstract float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**Purpose:** **Purpose:** Reads and returns the effective initial morale value held by the this instance.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.GetEffectiveInitialMorale(agent, 0);
```

### CanPanicDueToMorale
`public abstract bool CanPanicDueToMorale(Agent agent)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for panic due to morale.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CanPanicDueToMorale(agent);
```

### CalculateCasualtiesFactor
`public abstract float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**Purpose:** **Purpose:** Calculates the current value or result of casualties factor.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateCasualtiesFactor(battleSide);
```

### GetAverageMorale
`public abstract float GetAverageMorale(Formation formation)`

**Purpose:** **Purpose:** Reads and returns the average morale value held by the this instance.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.GetAverageMorale(formation);
```

### CalculateMoraleChangeOnShipSunk
`public abstract float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**Purpose:** **Purpose:** Calculates the current value or result of morale change on ship sunk.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMoraleChangeOnShipSunk(shipOrigin);
```

### CalculateMoraleOnRamming
`public abstract float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)`

**Purpose:** **Purpose:** Calculates the current value or result of morale on ramming.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMoraleOnRamming(agent, rammingShip, rammedShip);
```

### CalculateMoraleOnShipsConnected
`public abstract float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)`

**Purpose:** **Purpose:** Calculates the current value or result of morale on ships connected.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMoraleOnShipsConnected(agent, ownerShip, targetShip);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BattleMoraleModel instance = ...;
```

## See Also

- [Area Index](../)
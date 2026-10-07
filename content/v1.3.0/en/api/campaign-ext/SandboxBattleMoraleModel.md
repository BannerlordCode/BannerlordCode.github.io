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

`SandboxBattleMoraleModel` owns the moment morale is created and the moment it is spent. New morale is seeded from the agent's base value through `GetEffectiveInitialMorale` (`SandBox/GameComponents/SandboxBattleMoraleModel.cs:239`), and every shock that follows — a comrade dying, a comrade routing — is expressed as a maximum that is then divided by the victim's morale resistance before it lands (`CalculateMoraleChangeToCharacter` divides by `GetMoraleResistance`, `:235`). The magnitude is scaled by `CalculateCasualtiesFactor`, which returns `1f` plus twice the fraction of the side already removed (`:388`), so a losing side's losses compound rather than repeat at a fixed rate. Two outcomes are explicitly removed from the game: morale never changes when a ship sinks (`CalculateMoraleChangeOnShipSunk` returns `0f`, `:424`), and a high-tier hero with the LoyaltyAndHonor perk is flagged as unable to panic at all (`:373`).

## Mental Model

Treat it as a probability-and-threshold layer sitting on top of a number the AI owns, not as the morale system. `CommonAIComponent.cs:84` asks for `GetEffectiveInitialMorale` once while building the AI, `CommonAIComponent.cs:194` asks `CanPanicDueToMorale` before letting the AI break, and `AgentMoraleInteractionLogic.cs:25` asks for the maximum change whenever an agent is incapacitated. The order matters when you override: the casualty factor multiplies the maximum, and only then does `GetMoraleResistance` divide it, so an override that applies resistance inside `CalculateCasualtiesFactor` will divide twice and produce morale that barely moves. The `float.MaxValue` fallbacks are absent here but the empty-formation case is real — `GetAverageMorale` returns `0f` for a formation with no human AI units (`:418`), which is a very different meaning from "everyone is at zero morale", and downstream code reading the average must not confuse the two.

## Key Methods

### CalculateMaxMoraleChangeDueToAgentIncapacitated
`public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)`

**Purpose:** Calculates the current value or result of max morale change due to agent incapacitated.

```csharp
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CalculateMaxMoraleChangeDueToAgentIncapacitated(affectedAgent, affectedAgentState, affectorAgent, killingBlow);
```

### CalculateMaxMoraleChangeDueToAgentPanicked
`public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)`

**Purpose:** Calculates the current value or result of max morale change due to agent panicked.

```csharp
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CalculateMaxMoraleChangeDueToAgentPanicked(agent);
```

### CalculateMoraleChangeToCharacter
`public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**Purpose:** Calculates the current value or result of morale change to character.

```csharp
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CalculateMoraleChangeToCharacter(agent, 0);
```

### GetEffectiveInitialMorale
`public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**Purpose:** Reads and returns the effective initial morale value held by this instance.

```csharp
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.GetEffectiveInitialMorale(agent, 0);
```

### CanPanicDueToMorale
`public override bool CanPanicDueToMorale(Agent agent)`

**Purpose:** Checks whether this instance meets the preconditions for panic due to morale.

```csharp
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CanPanicDueToMorale(agent);
```

### CalculateCasualtiesFactor
`public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**Purpose:** Calculates the current value or result of casualties factor.

```csharp
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CalculateCasualtiesFactor(battleSide);
```

### GetAverageMorale
`public override float GetAverageMorale(Formation formation)`

**Purpose:** Reads and returns the average morale value held by this instance.

```csharp
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.GetAverageMorale(formation);
```

### CalculateMoraleChangeOnShipSunk
`public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**Purpose:** Calculates the current value or result of morale change on ship sunk.

```csharp
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CalculateMoraleChangeOnShipSunk(shipOrigin);
```

### CalculateMoraleOnRamming
`public override float CalculateMoraleOnRamming(Agent agent)`

**Purpose:** Calculates the current value or result of morale on ramming.

```csharp
SandboxBattleMoraleModel sandboxBattleMoraleModel = ...;
var result = sandboxBattleMoraleModel.CalculateMoraleOnRamming(agent);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BattleMoraleModel>(new SandboxBattleMoraleModel());
}
```

`BattleMoraleModel` is declared as `MBGameModel<BattleMoraleModel>` (`BattleMoraleModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxSubModule.cs:41`.

## See Also

- [Area Index](../)
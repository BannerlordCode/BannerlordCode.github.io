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

`CustomBattleMoraleModel` is the stock implementation of `BattleMoraleModel` — it supplies all ten abstract
members with the base game's numbers, and `EditorGame` registers it at `EditorGame.cs:51`. It is where the
entire morale economy of a battle actually lives.

The core idea is that casualties produce a **pair** of morale changes, not one. Both
`CalculateMaxMoraleChangeDueToAgentIncapacitated` and `CalculateMaxMoraleChangeDueToAgentPanicked` return
`ValueTuple<float, float>` with the tuple names `affectedSideMaxMoraleLoss, affectorSideMaxMoraleGain`
(`CustomBattleMoraleModel.cs:15`, `CustomBattleMoraleModel.cs:58`) — how much morale the victim's side can
lose, and how much the killer's side can gain.

The magnitude scales with three inputs. `GetBattleImportance()` is the base
(`CustomBattleMoraleModel.cs:18`); a weapon-class multiplier is derived by asking
`WeaponComponentData.GetRelevantSkillFromWeaponClass` whether the weapon is missile
(`CustomBattleMoraleModel.cs:23`), melee (`CustomBattleMoraleModel.cs:24`) or area
(`CustomBattleMoraleModel.cs:25`) — area weapons get the *smallest* multiplier, `0.25f`, against `0.75f` for
an ordinary hit and `0.5f` for a missile (`CustomBattleMoraleModel.cs:26`); and
`CalculateCasualtiesFactor` multiplies the gain by how badly the side is already doing
(`CustomBattleMoraleModel.cs:100`).

Banner effects are folded in through `BannerHelper.AddBannerBonusForBanner` in both directions
(`CustomBattleMoraleModel.cs:46`, `CustomBattleMoraleModel.cs:52`), which is why this model reaches into
`MissionGameModels.Current.BattleBannerBearersModel` rather than taking a banner parameter.

## Mental Model

Read it as "damage amplification with a casualty feedback loop", and mind the order of the tuple. The
boundaries:

- **The tuple order is easy to get backwards.** `CalculateMaxMoraleChangeDueToAgentIncapacitated` returns
  `(factoredNumber2.ResultNumber, factoredNumber.ResultNumber)`
  (`CustomBattleMoraleModel.cs:54`), where `factoredNumber2` was seeded at
  `battleImportance * 4f * multiplier * casualtiesFactor` (the *affected* side's loss) and `factoredNumber`
  at `battleImportance * 3f * multiplier` (the *affector's* gain). `Item1` is the loss, `Item2` is the gain —
  the opposite of the order the two locals were declared in.
- **Casualties amplify the victim's loss, not the killer's gain.** `CalculateCasualtiesFactor` returns
  `1 + removedAgentRatio * 2f` (`CustomBattleMoraleModel.cs:106`), and it multiplies `factoredNumber2`
  (`CustomBattleMoraleModel.cs:41`). The gain side carries no casualty term at all — losing men does not
  make their deaths more inspiring to the enemy.
- **Area weapons are the *weakest* morale shocks, not the strongest.** `num2` starts at `0.75f` and is
  replaced with `0.25f` for any weapon carrying `AffectsArea`, `AffectsAreaBig` or `MultiplePenetration`
  (`CustomBattleMoraleModel.cs:29`). Only a weapon with *both* `Burning` and `MultiplePenetration` gets the
  `+25%` bump (`CustomBattleMoraleModel.cs:32`).
- **`CalculateMoraleChangeToCharacter` divides, it does not clamp.** The result is
  `maxMoraleChange / MathF.Max(1f, Character.GetMoraleResistance())` (`CustomBattleMoraleModel.cs:84`), so
  resistance *below* 1 amplifies morale loss rather than resisting it. Only resistance above 1 attenuates.
- **`GetAverageMorale` averages a filtered subset.** It counts only units that are simultaneously `Agent`,
  `IsActive()`, `IsHuman` and `IsAIControlled` (`CustomBattleMoraleModel.cs:124`) — mounts, the player and
  inactive agents are excluded — and returns `0f` when that subset is empty rather than `NaN`.
- **The naval members are stubs.** `CalculateMoraleChangeOnShipSunk` returns `0f`
  (`CustomBattleMoraleModel.cs:142`) and both ramming members return the agent's current morale unchanged
  (`CustomBattleMoraleModel.cs:148`, `CustomBattleMoraleModel.cs:154`).
- `CanPanicDueToMorale` is unconditionally `true` (`CustomBattleMoraleModel.cs:96`) and
  `GetEffectiveInitialMorale` returns its input unchanged (`CustomBattleMoraleModel.cs:90`).

## How to use

**Getting one.** Already registered — read it with `MissionGameModels.Current.BattleMoraleModel`. To change
the numbers, register a subclass where `EditorGame` registers this one; subclassing *this* class rather than
the abstract one lets you keep the banner integration for free.

```csharp
using TaleWorlds.MountAndBlade.ComponentInterfaces;

// One, at game start - replaces the stock model (EditorGame.cs:51).
basicGameStarter.AddModel<BattleMoraleModel>(new MyBattleMoraleModel());

public class MyBattleMoraleModel : CustomBattleMoraleModel
{
    public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)
    {
        // Item1 = affected side's max loss, Item2 = affector side's max gain
        // (CustomBattleMoraleModel.cs:58). Inheriting keeps the banner bonus at :74.
        ValueTuple<float, float> stock = base.CalculateMaxMoraleChangeDueToAgentPanicked(agent);
        return new ValueTuple<float, float>(stock.Item1 * 0.5f, stock.Item2);
    }
}
```

**The mistake that bites.** Reading the tuple the wrong way round. `Item1` is the *victim's side's* maximum
morale **loss** and `Item2` is the *killer's side's* maximum **gain**
(`CustomBattleMoraleModel.cs:54`). Swap them and a mod that doubles the gain to reward aggressive play
instead doubles the enemy's rout threshold — the player's side breaks far faster while their enemies become
steadier, which looks like a broken morale model rather than a swapped pair.



## Key Methods

### CalculateMaxMoraleChangeDueToAgentIncapacitated
`public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)`

**Purpose:** Calculates the current value or result of max morale change due to agent incapacitated.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMaxMoraleChangeDueToAgentIncapacitated(affectedAgent, affectedAgentState, affectorAgent, killingBlow);
```

### CalculateMaxMoraleChangeDueToAgentPanicked
`public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)`

**Purpose:** Calculates the current value or result of max morale change due to agent panicked.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMaxMoraleChangeDueToAgentPanicked(agent);
```

### CalculateMoraleChangeToCharacter
`public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**Purpose:** Calculates the current value or result of morale change to character.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMoraleChangeToCharacter(agent, 0);
```

### GetEffectiveInitialMorale
`public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**Purpose:** Reads and returns the effective initial morale value held by the this instance.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.GetEffectiveInitialMorale(agent, 0);
```

### CanPanicDueToMorale
`public override bool CanPanicDueToMorale(Agent agent)`

**Purpose:** Checks whether the this instance meets the preconditions for panic due to morale.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CanPanicDueToMorale(agent);
```

### CalculateCasualtiesFactor
`public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**Purpose:** Calculates the current value or result of casualties factor.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateCasualtiesFactor(battleSide);
```

### GetAverageMorale
`public override float GetAverageMorale(Formation formation)`

**Purpose:** Reads and returns the average morale value held by the this instance.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.GetAverageMorale(formation);
```

### CalculateMoraleChangeOnShipSunk
`public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**Purpose:** Calculates the current value or result of morale change on ship sunk.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMoraleChangeOnShipSunk(shipOrigin);
```

### CalculateMoraleOnRamming
`public override float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)`

**Purpose:** Calculates the current value or result of morale on ramming.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMoraleOnRamming(agent, rammingShip, rammedShip);
```

### CalculateMoraleOnShipsConnected
`public override float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)`

**Purpose:** Calculates the current value or result of morale on ships connected.

```csharp
// Obtain an instance of CustomBattleMoraleModel from the subsystem API first
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMoraleOnShipsConnected(agent, ownerShip, targetShip);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleMoraleModel>(new MyCustomBattleMoraleModel());
```

## See Also

- [Area Index](../)
- [CustomBattleBannerBearersModel](../CustomBattleBannerBearersModel)
- [CustomBattleAgentStatCalculateModel](../CustomBattleAgentStatCalculateModel)
- [CasualtyHandler](../CasualtyHandler)
- [中文页面](../../../../zh/api/mission-ext/CustomBattleMoraleModel)
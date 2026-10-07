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

`CustomBattleMoraleModel` is the shipped implementation of `BattleMoraleModel` (`CustomBattleMoraleModel.cs:12`) — the rule set that turns a violent event into a morale shock for both sides. It is reached through `MissionGameModels.Current.BattleMoraleModel`, is a singleton for the process, and every method is an `override`, so replacing morale behaviour means writing a subclass, not an instance.

The central contract is a two-valued tuple. Both `CalculateMaxMoraleChangeDueToAgentIncapacitated` and `CalculateMaxMoraleChangeDueToAgentPanicked` return `(affectedSideMaxMoraleLoss, affectorSideMaxMoraleGain)` — the loss suffered by the victim's side *first*, the gain to the attacker's side *second*. The gain is then divided by the victim's own resistance at application time by `CalculateMoraleChangeToCharacter`.

The shock magnitude is built in four stages: the victim's `GetBattleImportance()`, a weapon-shape factor, the wounded side's casualty ratio, and finally banner effects pulled in through `MissionGameModels.Current.BattleBannerBearersModel`.

## Mental Model

Read `CalculateMaxMoraleChangeDueToAgentIncapacitated` as a funnel, because the ordering matters more than any single number.

The weapon-shape factor starts at `0.75f` and is *reduced* by what the weapon is (`CustomBattleMoraleModel.cs:30`). A weapon flagged `AffectsArea`, `AffectsAreaBig` or `MultiplePenetration` drops it to `0.25f` (`CustomBattleMoraleModel.cs:33`) — area weapons demoralise, they do not crush. If such a weapon is *both* burning and multi-penetration, the factor is raised by a further 25% of itself. Ranged-and-throwing skills (bow, crossbow, throwing) instead set it to `0.5f` (`CustomBattleMoraleModel.cs:41`). So the ordering is: area flag wins over ranged, and the burn bonus applies only inside the area branch.

`CalculateCasualtiesFactor` is the snowball term: `1 + removedAgentRatioForSide * 2` (`CustomBattleMoraleModel.cs:108`, `CustomBattleMoraleModel.cs:114`), so the first casualty changes nothing and each side's mounting losses multiply every subsequent shock.

The two raw numbers are `battleImportance * 3 * factor` and `battleImportance * 4 * factor * casualtiesFactor` (`CustomBattleMoraleModel.cs:44`, `CustomBattleMoraleModel.cs:45`), and the tuple is returned as `(second, first)` — the casualty-scaled number as the *loss*, the plain one as the *gain* (`CustomBattleMoraleModel.cs:58`). Banners then modify them in opposite directions: `DecreasedMoraleShock` reduces the victim's number, while `IncreasedMoraleShockByMeleeTroops` raises the killer's, and that second bonus applies only when the killer is `FormationClass.Infantry` and used a melee skill (`CustomBattleMoraleModel.cs:56`). Both sides are floored at zero on return.

Three members are deliberate no-ops in the shipped model, and that is the honest thing to know about naval battles. `GetEffectiveInitialMorale` returns its `baseMorale` argument untouched (`CustomBattleMoraleModel.cs:96`, `CustomBattleMoraleModel.cs:98`), `CalculateMoraleChangeOnShipSunk` returns `0f`, and `CalculateMoraleOnRamming` returns the agent's current morale unchanged (`CustomBattleMoraleModel.cs:154`, `CustomBattleMoraleModel.cs:156`). So in vanilla, morale never responds to ships at all — a modded naval battle that wants morale loss on a sinking must override these. `CanPanicDueToMorale` likewise returns `true` unconditionally (`CustomBattleMoraleModel.cs:102`), leaving the scene-specific vetoes to `CommonAIComponent`.

## How to use

**Getting it.** Replace the model on `MissionGameModels` before the mission starts:

```csharp
MissionGameModels.Current.BattleMoraleModel = new MyBattleMoraleModel();
```

**Typical use** — ask what an event would do, keeping the tuple order straight:

```csharp
BattleMoraleModel model = MissionGameModels.Current.BattleMoraleModel;
ValueTuple<float, float> shock =
    model.CalculateMaxMoraleChangeDueToAgentIncapacitated(
        victim, AgentState.Killed, killer, killingBlow);

float victimSideLoss = shock.Item1;   // affectedSideMaxMoraleLoss
float killerSideGain = shock.Item2;  // affectorSideMaxMoraleGain

// Apply to a specific agent only after dividing by its resistance:
float applied = model.CalculateMoraleChangeToCharacter(victim, victimSideLoss);
```

**Typical use** — overriding the no-op naval hooks so ship combat actually moves morale:

```csharp
public class NavalMoraleModel : CustomBattleMoraleModel
{
    public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)
    {
        // Vanilla returns 0f here; without this, sinking is morale-neutral.
        return -20f;
    }

    public override float CalculateMoraleOnRamming(Agent agent)
    {
        // Vanilla returns agent.GetMorale(), i.e. no change.
        return -10f;
    }
}
```

**Most common mistake, and what it costs.** Reading the tuple the wrong way round. The element *names* say loss-then-gain and the declaration order matches, but the return statement passes the casualty-scaled `factoredNumber2` first (`CustomBattleMoraleModel.cs:58`) — so `Item1` is not "the smaller number", it is specifically the loss. A mod that swaps them, or that assumes the attacker's gain scales with the same casualty term, silently applies the victim's shock to the killer's side and the un-scaled value to the victim. Because both values are `MathF.Max(..., 0f)` and added to a morale that is itself clamped 0–100, nothing throws and nothing logs — the battlefield simply panics less than intended and the rout you engineered never happens.

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
`public override float CalculateMoraleOnRamming(Agent agent)`

**Purpose:** Calculates the current value or result of morale on ramming.

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
- [CommonAIComponent](../CommonAIComponent)
- [BattleBannerBearersModel](../BattleBannerBearersModel)
- [MultiplayerBattleMoraleModel](../MultiplayerBattleMoraleModel)
- [CustomBattleMoraleModel (中文页面)](../../../../zh/api/mission-ext/CustomBattleMoraleModel)
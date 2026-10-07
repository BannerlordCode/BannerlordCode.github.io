---
title: "MissionShipParametersModel"
description: "Auto-generated class reference for MissionShipParametersModel."
---
# MissionShipParametersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionShipParametersModel : MBGameModel<MissionShipParametersModel>`
**Base:** `MBGameModel<MissionShipParametersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs`

## Overview

`MissionShipParametersModel` is an `abstract class ... : MBGameModel<MissionShipParametersModel>` with exactly three abstract members and no concrete ones (`MissionShipParametersModel.cs:7`). It is the rule set for how a ship's physical performance is derived, and it exists so that a naval mission can ask questions without knowing how a sail, an oar or a crew is actually modelled.

The three questions are deliberately narrow:

- `CalculateMainDeckCrewSize(IShipOrigin shipOrigin, Agent captain)` — how many bodies the main deck needs, given the ship and whoever is captaining it.
- `CalculateWindBonus(IShipOrigin shipOrigin, Agent captain, float baseSailForceMagnitude)` — a *bonus*, not a force. The base sail magnitude is supplied by the caller, so the model's job is purely the modifier.
- `CalculateOarForceMultiplier(Agent pilotAgent, float baseOarForce)` — again a multiplier, and note it takes the **pilot** agent rather than the ship origin, so oar performance is a property of the rower.

Like the other game models it is a per-process singleton reached through `MissionGameModels.Current`, and it has no default implementation here — you must supply a concrete subclass and register it.

## Mental Model

Two of the three are *modifiers on a caller-supplied base*, and that contract is the thing to get right. `CalculateWindBonus` receives `baseSailForceMagnitude` and returns a float; `CalculateOarForceMultiplier` receives `baseOarForce` and returns a float. Nothing in this class tells you whether the return value is a ratio to multiply by or an amount to add. In a model where both parameters are named "force" and both return "float", writing `return baseOarForce * 2f` where the caller expects a multiplier is a mistake that produces plausible but wrong physics rather than an error.

Note the asymmetry in the arguments: wind is a function of the *ship* plus the *captain*, while oars are a function of the *pilot* alone. A single `IShipOrigin` is not threaded through all three calls, so you cannot cache per-ship state in one place across all three — plan your lookups accordingly, and expect the same ship origin to arrive with different agent arguments for different questions.

`CalculateMainDeckCrewSize` returns `int`, not `float`. It is a headcount, so fractional crew is not representable, and any partial-crew rule you want has to round explicitly inside your implementation.

Because the class has no shipped implementation and no non-abstract members, a new naval mission is not going to have working ships until something implements it. That is worth confirming before debugging ship behaviour: a missing model looks exactly like a model that is returning zeroes.

## How to use

**Getting it.** Register a concrete implementation before the naval mission starts:

```csharp
MissionGameModels.Current.MissionShipParametersModel = new MyShipParametersModel();
```

**Typical use** — implementing it, keeping the modifier contract consistent:

```csharp
public class MyShipParametersModel : MissionShipParametersModel
{
    public override int CalculateMainDeckCrewSize(IShipOrigin shipOrigin, Agent captain)
    {
        // int, not float — round explicitly if the rule is fractional.
        return (int)System.Math.Ceiling(shipOrigin.ShipType.GetCrewCount());
    }

    public override float CalculateWindBonus(
        IShipOrigin shipOrigin, Agent captain, float baseSailForceMagnitude)
    {
        // Return a MULTIPLIER on baseSailForceMagnitude, not a new force.
        return captain.HasRangedWeapon(false) ? 1.15f : 1f;
    }

    public override float CalculateOarForceMultiplier(Agent pilotAgent, float baseOarForce)
    {
        // Takes the PILOT, not the ship. baseOarForce is the caller's value;
        // return a ratio, and do not recompute the force here.
        return pilotAgent.GetSkillValue(DefaultSkills.Athletics) > 100 ? 1.3f : 1f;
    }
}
```

**Typical use** — calling it, respecting the modifier semantics:

```csharp
var model = MissionGameModels.Current.MissionShipParametersModel;
int crew = model.CalculateMainDeckCrewSize(shipOrigin, captain);
float windBonus = model.CalculateWindBonus(shipOrigin, captain, baseSailForce);
float oarMult  = model.CalculateOarForceMultiplier(pilotAgent, baseOarForce);
// Effective values are base * multiplier at the call site.
```

**Most common mistake, and what it costs.** Returning an absolute force where the method expects a multiplier, because both the parameter and the return type are floats named after forces. Nothing in the signature distinguishes them, and there is no implementation to read as a reference in this tree. The cost is a ship that accelerates correctly at the reference speed and diverges wildly at any other — sails that push harder the faster the ship already moves, or oars whose output scales quadratically with crew count — which reads as an unbalanced handling model rather than as a units bug. If your model returns absolute values, convert at the boundary: have the override compute `absolute / base` and let the caller do the multiplication.

## Key Methods

### CalculateMainDeckCrewSize
`public abstract int CalculateMainDeckCrewSize(IShipOrigin shipOrigin, Agent captain)`

**Purpose:** Calculates the current value or result of main deck crew size.

```csharp
// Obtain an instance of MissionShipParametersModel from the subsystem API first
MissionShipParametersModel missionShipParametersModel = ...;
var result = missionShipParametersModel.CalculateMainDeckCrewSize(shipOrigin, captain);
```

### CalculateWindBonus
`public abstract float CalculateWindBonus(IShipOrigin shipOrigin, Agent captain, float baseSailForceMagnitude)`

**Purpose:** Calculates the current value or result of wind bonus.

```csharp
// Obtain an instance of MissionShipParametersModel from the subsystem API first
MissionShipParametersModel missionShipParametersModel = ...;
var result = missionShipParametersModel.CalculateWindBonus(shipOrigin, captain, 0);
```

### CalculateOarForceMultiplier
`public abstract float CalculateOarForceMultiplier(Agent pilotAgent, float baseOarForce)`

**Purpose:** Calculates the current value or result of oar force multiplier.

```csharp
// Obtain an instance of MissionShipParametersModel from the subsystem API first
MissionShipParametersModel missionShipParametersModel = ...;
var result = missionShipParametersModel.CalculateOarForceMultiplier(pilotAgent, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionShipParametersModel instance = ...;
```

## See Also

- [Area Index](../)
- [MissionGameModels](../MissionGameModels)
- [CustomBattleMoraleModel](../CustomBattleMoraleModel)
- [Agent](../../mission/Agent)
- [MissionShipParametersModel (中文页面)](../../../../zh/api/mission-ext/MissionShipParametersModel)
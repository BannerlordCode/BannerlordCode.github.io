---
title: "DefaultSiegeEngineCalculationModel"
description: "Auto-generated class reference for DefaultSiegeEngineCalculationModel."
---
# DefaultSiegeEngineCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultSiegeEngineCalculationModel : MissionSiegeEngineCalculationModel`
**Base:** `MissionSiegeEngineCalculationModel`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs`

## Overview

`DefaultSiegeEngineCalculationModel` is the core module's concrete implementation of `MissionSiegeEngineCalculationModel` (`DefaultSiegeEngineCalculationModel.cs:7`) — the only non-abstract one shipped in `TaleWorlds.MountAndBlade`. It is a `MBGameModel`, resolved once through `MissionGameModels.GetGameModel<MissionSiegeEngineCalculationModel>()` (`MissionGameModels.cs:114`) and registered by the sandbox as `new DefaultSiegeEngineCalculationModel()` (`SandBoxSubModule.cs:46`) and by the editor game the same way (`EditorGame.cs:61`). There is one instance for the process, not per mission or per weapon.

All three methods are one-liners, and each one tells you what the real rule is supposed to be:

- `CalculateReloadSpeed(Agent userAgent, float baseSpeed)` returns `baseSpeed` unchanged (`DefaultSiegeEngineCalculationModel.cs:12`) — the core model applies no reload penalty at all, and the `userAgent` argument is not consulted.
- `CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)` returns `weapon.AmmoCount` (`DefaultSiegeEngineCalculationModel.cs:18`) — the weapon's own stock, with neither the ship nor the captain affecting it.
- `CalculateDamage(Agent attackerAgent, float baseDamage)` returns `(int)baseDamage` (`DefaultSiegeEngineCalculationModel.cs:24`) — a truncating cast from `float` to `int`.

## Mental Model

The interesting member is `CalculateDamage`, and the thing to internalise is that it *loses precision by design of the signature*. The abstract declares `float CalculateDamage(Agent attackerAgent, float baseDamage)` returning `int` (`MissionSiegeEngineCalculationModel.cs:16`), and the default implementation satisfies it with a cast. A base damage of `24.7f` becomes `24`; a base damage of `24.2f` becomes `24` too. There is no rounding — `(int)` truncates toward zero — so the fractional part is silently discarded at this boundary, and the loss compounds anywhere upstream that computes damage in floats.

The other two methods are pure pass-throughs, which tells you the arguments are extension points rather than inputs. `CalculateReloadSpeed` ignores `userAgent` entirely, so per-agent reload modifiers cannot exist in the core model; a mod that wants them overrides this method and uses the agent. Same for `CalculateShipSiegeWeaponAmmoCount`: `shipOrigin` and `captain` are ignored, so the core model has no naval ammo rule — a ship-borne mangonel gets exactly the weapon's stock.

This is a *default*, not an abstract base. Because it is a plain `public class` with no state, subclassing it is unnecessary; register your own `MissionSiegeEngineCalculationModel` instead. If you do subclass, remember the registration replaces the whole model — `MissionGameModels` resolves a single instance by type (`MissionGameModels.cs:114`), so there is no "wrap the default and adjust one value" path unless you reimplement all three methods yourself.

## How to use

**Getting one.** Do not construct it for use — read the registered instance as `MissionGameModels.Current.MissionSiegeEngineCalculationModel`. To change behaviour, register your own in `OnGameInitialization`: `gameStarter.AddModel<MissionSiegeEngineCalculationModel>(new MySiegeEngineModel())`, replacing the sandbox registration at `SandBoxSubModule.cs:46`.

**Typical use:**

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MySiegeEngineModel : MissionSiegeEngineCalculationModel
{
    // The default ignores the agent; use it to make reload depend on who is firing.
    public override float CalculateReloadSpeed(Agent userAgent, float baseSpeed)
    {
        float multiplier = 1f;

        if (userAgent != null && userAgent.Character != null)
        {
            // Gunnery softens the penalty.
            int skill = userAgent.Character.GetSkillValue(DefaultSkills.Gunnery);
            multiplier = MathF.Min(1f, 0.6f + skill * 0.005f);
        }

        return baseSpeed * multiplier;
    }

    // Ship-borne weapons get half stock; the default returns weapon.AmmoCount.
    public override int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)
    {
        return shipOrigin != null ? weapon.AmmoCount / 2 : weapon.AmmoCount;
    }

    // Round instead of truncating: (int)baseDamage throws the fraction away.
    public override int CalculateDamage(Agent attackerAgent, float baseDamage)
    {
        return (int)MathF.Round(baseDamage, MidpointRounding.AwayFromZero);
    }
}
```

`DefaultSkills.Gunnery`, `BasicCharacterObject.GetSkillValue(SkillObject)` and `RangedSiegeWeapon.AmmoCount` are the real members these overrides read; the vanilla implementations ignore all of them.

**Most common mistake:** expecting the float fraction of damage to survive.

```csharp
// Looks like 25 damage. It is 24: the default truncates at the model boundary.
int damage = model.CalculateDamage(attacker, 24.9f);
```

Every partial point of damage is discarded by `(int)baseDamage` (`DefaultSiegeEngineCalculationModel.cs:24`), so tuning a weapon's damage to a fractional value in XML does less than the number suggests, and the shortfall is inconsistent — 24.4 and 24.9 both yield 24, while 25.0 yields 25. If your mod's balance depends on precision, override `CalculateDamage` and round explicitly, as above, rather than assuming the core model's arithmetic.

## Key Methods

### CalculateReloadSpeed
`public override float CalculateReloadSpeed(Agent userAgent, float baseSpeed)`

**Purpose:** Calculates the current value or result of reload speed.

```csharp
// Obtain an instance of DefaultSiegeEngineCalculationModel from the subsystem API first
DefaultSiegeEngineCalculationModel defaultSiegeEngineCalculationModel = ...;
var result = defaultSiegeEngineCalculationModel.CalculateReloadSpeed(userAgent, 0);
```

### CalculateShipSiegeWeaponAmmoCount
`public override int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)`

**Purpose:** Calculates the current value or result of ship siege weapon ammo count.

```csharp
// Obtain an instance of DefaultSiegeEngineCalculationModel from the subsystem API first
DefaultSiegeEngineCalculationModel defaultSiegeEngineCalculationModel = ...;
var result = defaultSiegeEngineCalculationModel.CalculateShipSiegeWeaponAmmoCount(shipOrigin, captain, weapon);
```

### CalculateDamage
`public override int CalculateDamage(Agent attackerAgent, float baseDamage)`

**Purpose:** Calculates the current value or result of damage.

```csharp
// Obtain an instance of DefaultSiegeEngineCalculationModel from the subsystem API first
DefaultSiegeEngineCalculationModel defaultSiegeEngineCalculationModel = ...;
var result = defaultSiegeEngineCalculationModel.CalculateDamage(attackerAgent, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSiegeEngineCalculationModel>(new MyDefaultSiegeEngineCalculationModel());
```

## See Also

- [Area Index](../)
- [MissionSiegeEngineCalculationModel — the abstract base you replace](../MissionSiegeEngineCalculationModel)
- [MissionGameModels — resolves and publishes the instance](../MissionGameModels)
- [中文页面](../../../../zh/api/mission-ext/DefaultSiegeEngineCalculationModel)
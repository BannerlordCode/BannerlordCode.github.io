---
title: "IMissionSiegeWeaponsController"
description: "Auto-generated class reference for IMissionSiegeWeaponsController."
---
# IMissionSiegeWeaponsController

**Namespace:** TaleWorlds.MountAndBlade.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IMissionSiegeWeaponsController`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Missions/IMissionSiegeWeaponsController.cs`

## Overview

`IMissionSiegeWeaponsController` is the four-member contract the siege weapon machinery is written against. It declares `int GetMaxDeployableWeaponCount(Type t)` (`IMissionSiegeWeaponsController.cs:11`), `IEnumerable<IMissionSiegeWeapon> GetSiegeWeapons()` (`IMissionSiegeWeaponsController.cs:14`), `void OnWeaponDeployed(SiegeWeapon missionWeapon)` (`IMissionSiegeWeaponsController.cs:17`) and `void OnWeaponUndeployed(SiegeWeapon missionWeapon)` (`IMissionSiegeWeaponsController.cs:20`).

The last two are notifications *into* the controller — someone deployed a weapon and is telling it — while the first two are queries out of it. That asymmetry is the shape of the whole interface: the UI asks how many of a type it may place and what exists, and reports each placement back.

The shipped implementation is `MissionSiegeWeaponsController`, declared `class MissionSiegeWeaponsController : IMissionSiegeWeaponsController` (`MissionSiegeWeaponsController.cs:10`), constructed with a side and a weapon list (`MissionSiegeWeaponsController.cs:13`). `BattleReinforcementsSpawnController` in this same assembly takes the interface-typed behaviour route instead, resolving `IMissionAgentSpawnLogic` via `GetMissionBehavior<IMissionAgentSpawnLogic>()`.

## Mental Model

`GetMaxDeployableWeaponCount` takes a `System.Type`, not a `SiegeEngineType` and not a string. The implementation maps that type through a private helper, `GetSiegeWeaponBaseType(SiegeEngineType)` (`MissionSiegeWeaponsController.cs:109`), which means the caller must hand over exactly the type the implementation recognises — a subclass you introduce is not covered unless the mapping handles it. Passing a type the mapping does not recognise yields whatever that helper returns for "not mine", typically zero, and the UI silently offers no deploy button rather than reporting an error.

The notification pair is not symmetric in cost. `OnWeaponDeployed` and `OnWeaponUndeployed` both take the concrete `SiegeWeapon`, not the `IMissionSiegeWeapon` that `GetSiegeWeapons` returns (`IMissionSiegeWeaponsController.cs:20`). So the interface gives you weapons in their abstract form and hands them back in their concrete form — anything you deployed through this interface is guaranteed to be a `SiegeWeapon`, which is why the parameter is not the interface type.

`GetSiegeWeapons` returns `IEnumerable<IMissionSiegeWeapon>` (`IMissionSiegeWeaponsController.cs:14`), so it is a projection, not a snapshot. Whether the returned sequence is safe to enumerate more than once, or reflects later changes to the mission's weapons, is up to the implementation; treat it as live and enumerate once if you need a stable list.

There is no "is this weapon deployed" query and no "which weapon is at this position" query. The interface supports enumerating and being told about changes, and nothing else. Any UI logic that needs to correlate a menu entry with a deployed weapon has to keep its own mapping.

## How to use

**Getting one.** It is a plain interface, not a mission behaviour — there is no `GetMissionBehavior<IMissionSiegeWeaponsController>`. Construct the implementation yourself with the side and the weapon list, or take the one the mission already built and keep a reference to it.

**Typical use** — enumerating deployable siege weapons and reacting to deployments:

```csharp
using System;
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions;

public class MySiegeDeployMenu
{
    private readonly IMissionSiegeWeaponsController _controller;

    public MySiegeDeployMenu(IMissionSiegeWeaponsController controller)
    {
        _controller = controller;
    }

    public List<IMissionSiegeWeapon> AvailableFor(BattleSideEnum side)
    {
        List<IMissionSiegeWeapon> available = new List<IMissionSiegeWeapon>();

        foreach (IMissionSiegeWeapon weapon in _controller.GetSiegeWeapons())
        {
            if (weapon.Team != null && weapon.Team.Side == side)
            {
                // Type, not SiegeEngineType: the mapping lives in the implementation.
                int max = _controller.GetMaxDeployableWeaponCount(weapon.GetType());
                if (max > 0)
                {
                    available.Add(weapon);
                }
            }
        }

        return available;
    }

    public void OnDeployConfirmed(SiegeWeapon weapon)
    {
        // Notifications take the concrete SiegeWeapon type.
        _controller.OnWeaponDeployed(weapon);
    }
}
```

`GetSiegeWeapons`, `GetMaxDeployableWeaponCount`, `OnWeaponDeployed` and `OnWeaponUndeployed` are the four interface members (`IMissionSiegeWeaponsController.cs:11` through `IMissionSiegeWeaponsController.cs:20`).

**Most common mistake:** looking this interface up the way every other mission service is found.

```csharp
IMissionSiegeWeaponsController c =
    Mission.Current.GetMissionBehavior<IMissionSiegeWeaponsController>();   // never finds it
```

Unlike `IMissionAgentSpawnLogic`, this interface does not extend `IMissionBehavior`, and the mission's behaviour list is not populated with it — the controller is constructed with its side and weapon list (`MissionSiegeWeaponsController.cs:13`) and handed to whoever drives deployment. There is no lookup that returns it, so keep the reference you were given at construction time instead of trying to rediscover it from the mission.

## See Also

- [Area Index](../)
- [MissionSiegeWeaponsController — the shipped implementation](../MissionSiegeWeaponsController)
- [IMissionSiegeWeapon — the type `GetSiegeWeapons` yields](../../core-extra/IMissionSiegeWeapon)
- [中文页面](../../../../zh/api/mission-ext/IMissionSiegeWeaponsController)
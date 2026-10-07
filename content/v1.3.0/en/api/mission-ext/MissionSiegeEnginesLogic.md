---
title: "MissionSiegeEnginesLogic"
description: "Auto-generated class reference for MissionSiegeEnginesLogic."
---
# MissionSiegeEnginesLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEnginesLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionSiegeEnginesLogic.cs`

## Overview

`MissionSiegeEnginesLogic` is the mission behaviour that holds the two siege-weapon lists for a siege mission and hands out per-side controllers for them. It derives from `MissionLogic` (`MissionSiegeEnginesLogic.cs:9`) and is deliberately tiny: one constructor, two accessors, and two `readonly` `MissionSiegeWeaponsController` fields (`MissionSiegeEnginesLogic.cs:40`, `MissionSiegeEnginesLogic.cs:43`).

It has **no default constructor**. The only way in is `MissionSiegeEnginesLogic(List<MissionSiegeWeapon> defenderSiegeWeapons, List<MissionSiegeWeapon> attackerSiegeWeapons)` (`MissionSiegeEnginesLogic.cs:12`), which immediately wraps each list in a `MissionSiegeWeaponsController` tagged with the matching `BattleSideEnum` (`MissionSiegeEnginesLogic.cs:14`, `MissionSiegeEnginesLogic.cs:15`). Because mission behaviours are normally created by the mission-assembly code rather than through reflection, that is fine — but it does mean `Activator.CreateInstance` on this type cannot work.

The instance lives for the siege mission. `BannerlordMissions` adds one to the siege behaviour array (`BannerlordMissions.cs:238`, `BannerlordMissions.cs:242`) and `SandBoxMissions` does the same (`SandBoxMissions.cs:875`, `SandBoxMissions.cs:879`). Consumers reach it with `Mission.Current.GetMissionBehavior<MissionSiegeEnginesLogic>()` — `SiegeDeploymentHandler` at `SiegeDeploymentHandler.cs:34` and `CampaignMissionComponent` at `CampaignMissionComponent.cs:185`, the latter unguarded.

## Mental Model

`GetSiegeWeaponsController(BattleSideEnum side)` is a two-case lookup that returns **null** for everything else (`MissionSiegeEnginesLogic.cs:29`). `BattleSideEnum` has four values — `None = -1`, `Defender`, `Attacker`, `NumSides` (`BattleSideEnum.cs:9` through `BattleSideEnum.cs:15`) — so `None` and `NumSides` both produce null. Passing `NumSides` to mean "either side" is the natural mistake and it does not work; there is no aggregate accessor.

Both controllers always exist, even when a side has no weapons. On the sally-out path the mission assembly passes a **fresh empty list** for the defender side (`BannerlordMissions.cs:238`, `SandBoxMissions.cs:875`), so `GetSiegeWeaponsController(BattleSideEnum.Defender)` returns a live controller with zero weapons rather than null. A caller that null-checks the controller to decide "does this side have siege?" gets the wrong answer on a sally-out — it must ask the controller, not the logic.

The two accessors give you different shapes of the same data. `GetMissionSiegeWeapons(out ..., out ...)` (`MissionSiegeEnginesLogic.cs:33`) hands back `IEnumerable<IMissionSiegeWeapon>` for both sides in one call, unpacking each controller (`MissionSiegeEnginesLogic.cs:35`, `MissionSiegeEnginesLogic.cs:36`), and it is what `CampaignMissionComponent` uses at the battle-results stage. `GetSiegeWeaponsController` hands back the controller itself, which is what `SiegeDeploymentHandler` needs during deployment because the controller is the mutable thing placement logic drives.

Neither method null-checks the lists it was given. Passing `null` for a side's list makes the constructor throw at mission assembly, so "no siege weapons on this side" must be expressed as an empty list, exactly as the sally-out branch does.

## How to use

**Getting it.** Look it up from the live mission. In a siege it is present; elsewhere it is not, so guard the lookup.

```csharp
MissionSiegeEnginesLogic siege = Mission.Current.GetMissionBehavior<MissionSiegeEnginesLogic>();
if (siege != null)
{
    // Controller form: what deployment logic drives.
    IMissionSiegeWeaponsController attacker = siege.GetSiegeWeaponsController(BattleSideEnum.Attacker);
    if (attacker != null)
    {
        Debug.Print("attacker siege weapons: " + attacker.GetSiegeWeapons().Count(), false);
    }

    // Enumerable form: what the results stage reads.
    IEnumerable<IMissionSiegeWeapon> defenders, attackers;
    siege.GetMissionSiegeWeapons(out defenders, out attackers);
}
```

To add siege weapons to a custom mission, construct it yourself with two lists — an empty list, never null, for a side without any:

```csharp
var mySiege = new MissionSiegeEnginesLogic(
    new List<MissionSiegeWeapon>(),        // defenders: empty, not null
    new List<MissionSiegeWeapon> { myRam });

Mission.Current.AddMissionBehavior(mySiege);
```

**The mistake that turns a sally-out into a wrong answer.** Treating a null return from `GetSiegeWeaponsController` as "this side has no siege weapons". On the sally-out path the logic is constructed with an empty defender list (`BannerlordMissions.cs:238`), so the defender controller is a real object and a null-based check passes even though there are no weapons. Conversely, reading the logic itself without a null check throws on any non-siege mission — which is exactly what `CampaignMissionComponent.cs:185` does.

## Key Methods

### GetSiegeWeaponsController
`public IMissionSiegeWeaponsController GetSiegeWeaponsController(BattleSideEnum side)`

**Purpose:** Reads and returns the siege weapons controller value held by the this instance.

```csharp
// Obtain an instance of MissionSiegeEnginesLogic from the subsystem API first
MissionSiegeEnginesLogic missionSiegeEnginesLogic = ...;
var result = missionSiegeEnginesLogic.GetSiegeWeaponsController(side);
```

### GetMissionSiegeWeapons
`public void GetMissionSiegeWeapons(out IEnumerable<IMissionSiegeWeapon> defenderSiegeWeapons, out IEnumerable<IMissionSiegeWeapon> attackerSiegeWeapons)`

**Purpose:** Reads and returns the mission siege weapons value held by the this instance.

```csharp
// Obtain an instance of MissionSiegeEnginesLogic from the subsystem API first
MissionSiegeEnginesLogic missionSiegeEnginesLogic = ...;
missionSiegeEnginesLogic.GetMissionSiegeWeapons(defenderSiegeWeapons, attackerSiegeWeapons);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionSiegeEnginesLogic>();
```

## See Also

- [MissionLogic — the abstract base, and how its list is iterated](../MissionLogic)
- [MissionReinforcementsHelper — the other siege-deployment helper in this area](../MissionReinforcementsHelper)
- [MissionCustomBattlePreloadView — preloads the same siege weapons during load](../MissionCustomBattlePreloadView)
- [Mission — behaviour lookup and the siege behaviour arrays](../../mission/Mission)
- [Area Index](../)
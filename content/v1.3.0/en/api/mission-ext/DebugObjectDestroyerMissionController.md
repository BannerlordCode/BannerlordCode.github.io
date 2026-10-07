---
title: "DebugObjectDestroyerMissionController"
description: "Auto-generated class reference for DebugObjectDestroyerMissionController."
---
# DebugObjectDestroyerMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DebugObjectDestroyerMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/DebugObjectDestroyerMissionController.cs`

## Overview

`DebugObjectDestroyerMissionController` is a developer tool that lives entirely inside one method: `OnMissionTick` (`DebugObjectDestroyerMissionController.cs:14`). It ray-casts from the final render camera along the camera's forward axis for 100 units (`DebugObjectDestroyerMissionController.cs:21`), and while the debug input has Shift held it also snaps the hit target to the nearest `DestructableComponent` within 5 units of the main agent (`DebugObjectDestroyerMissionController.cs:29`). Middle mouse then either destroys or hits the object under the crosshair; release picks the projectile, held press picks a contour highlight.

The whole method is driven by `Input.DebugInput` — `IsShiftDown()`, `IsKeyDown(InputKey.MiddleMouseButton)`, `IsKeyReleased(...)`, `IsAltDown()`, `IsControlDown()` — which is the debug-only input surface, distinct from the player's `Input`. The type's only field is the entity currently contoured, `_contouredEntity` (`DebugObjectDestroyerMissionController.cs:99`).

Which weapon gets thrown is chosen from three mod-defined item ids: Alt gives `"boulder"`, Ctrl gives `"pot"`, and the default is `"ballista_projectile"` (`DebugObjectDestroyerMissionController.cs:47`, `DebugObjectDestroyerMissionController.cs:51`, `DebugObjectDestroyerMissionController.cs:55`). Damage is hard-coded to `400` (`DebugObjectDestroyerMissionController.cs:73`).

## Mental Model

The ray-cast runs unconditionally every tick, before any input is consulted. `RayCastForClosestEntityOrTerrain` is called with the camera position and `position + forward * 100f` and the result feeds everything else (`DebugObjectDestroyerMissionController.cs:21`), so the cost is per-frame whether or not the player is using the tool.

Target resolution climbs the entity hierarchy. After the ray-cast it walks `weakGameEntity2.Parent` in a `while` loop calling `GetFirstScriptOfType<DestructableComponent>()` until it finds one or runs out of parents (`DebugObjectDestroyerMissionController.cs:60`). That is why aiming at a child entity still works — the destructable is looked for on the entity and then on each ancestor in turn.

Two distinct outcomes come out of one input, and they are easy to confuse. On *release* the code builds a `MissionWeapon` from the chosen item and calls `destructableComponent.TriggerOnHit(main, 400, impactPosition, impactDirection, missionWeapon, -1, null)` (`DebugObjectDestroyerMissionController.cs:77`) — an actual scripted hit. On *hold* it does not damage anything; it only assigns `weakGameEntity = destructableComponent.GameEntity` (`DebugObjectDestroyerMissionController.cs:82`), which feeds the contour highlight at the end of the method. So the contour tells you what you are aiming at, and only the release actually breaks it.

The contour is a persistent state machine across ticks. If the newly resolved entity differs from the stored one, the old entity has its contour cleared with `SetContourColor(null, true)` (`DebugObjectDestroyerMissionController.cs:89`) before the new one is contoured with `4294967040U` (`DebugObjectDestroyerMissionController.cs:94`). The stored field is a `GameEntity`, not a `WeakGameEntity`, and it is rebuilt every tick via `GameEntity.CreateFromWeakEntity` — which returns `null` for an invalid weak entity, and the null case is handled.

Because everything is gated on `Input.DebugInput` and `Mission.Current`, this behaviour is only meaningful in a development build. There is no guard that refuses to run outside debug input, so adding it to a mission that players can reach costs a ray-cast per frame for a tool they cannot operate.

## How to use

**Getting one.** Construct it and add it as a mission behaviour — nothing else creates it, and it is a plain `MissionLogic`.

**Typical use** — adding the tool, and destroying an object from your own code the same way:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Missions;

public static class MyDebugTools
{
    public static void Install(Mission mission)
    {
        if (mission.GetMissionBehavior<DebugObjectDestroyerMissionController>() == null)
        {
            mission.AddMissionBehavior(new DebugObjectDestroyerMissionController());
        }
    }

    // Same call the tool makes on middle-mouse release.
    public static void BreakNear(Mission mission, Agent attacker, DestructableComponent target, Vec3 from)
    {
        if (target == null || target.IsDestroyed || attacker == null)
        {
            return;
        }

        ItemObject item = Game.Current.ObjectManager.GetObject<ItemObject>("boulder");

        target.TriggerOnHit(
            attacker,
            inflictedDamage: 400,
            impactPosition: from,
            impactDirection: new Vec3(0f, 0f, -1f),
            missionWeapon: new MissionWeapon(item, null, null),
            weaponHitBoneIndex: -1,
            hitDirection: null);
    }
}
```

`Scene.RayCastForClosestEntityOrTerrain`, `TriggerOnHit`, `SetContourColor` and the `ItemObject` lookup by string id are the real members; the item ids must exist in your module or `GetObject<ItemObject>("boulder")` throws.

**Most common mistake:** using the contour highlight as if it had destroyed something.

```csharp
// Looked at: nothing happened.
WeakGameEntity target = pickedEntity;
if (target.IsValid)
{
    target.GetFirstScriptOfType<DestructableComponent>().IsDestroyed;  // still false
}
```

Holding middle mouse only selects — the assignment at `DebugObjectDestroyerMissionController.cs:82` feeds the contour and nothing else. Objects break on *release*, when `TriggerOnHit` is called with the chosen item (`DebugObjectDestroyerMissionController.cs:77`). If you drive destruction from your own input handling, call `TriggerOnHit` yourself as in the example, and check `IsDestroyed` first: the method is only reached when `!destructableComponent.IsDestroyed` (`DebugObjectDestroyerMissionController.cs:65`), so a second hit on an already-broken object is something you must guard against yourself.

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of DebugObjectDestroyerMissionController from the subsystem API first
DebugObjectDestroyerMissionController debugObjectDestroyerMissionController = ...;
debugObjectDestroyerMissionController.OnMissionTick(0);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<DebugObjectDestroyerMissionController>();
```

## See Also

- [Area Index](../)
- [DestructableComponent — the script both paths act on](../DestructableComponent)
- [EquipmentTestMissionController — the other mission tool in this namespace](../EquipmentTestMissionController)
- [中文页面](../../../../zh/api/mission-ext/DebugObjectDestroyerMissionController)
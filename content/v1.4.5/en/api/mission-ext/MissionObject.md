---
title: "MissionObject"
description: "Abstract Mission-scene entity base for object IDs, active-object registration, navigation faces, and enable/end-of-mission lifecycle."
---
# MissionObject

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionObject : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionObject.cs`

## One-line responsibility

`MissionObject` connects a scene-entity script to the current [`Mission`](../../mission/Mission): initialization assigns a [`MissionObjectId`](../MissionObjectId) and registers the object, while runtime members control navigation faces, visibility, physics, and Mission-end cleanup.

## Mental model

This is a **scene-object base class**, not a Campaign behavior or a service saved across Missions. When a scene or runtime `GameEntity` carries a derived script, the engine allocates a scene ID or runtime ID in `OnPreInit` according to `Mission.IsLoadingFinished`, then calls `Mission.AddActiveMissionObject`. `ActiveMissionObjects` is the subset still participating in queries and processing; disabling is not destruction, while entity removal reaches `OnRemoved` and Mission's removal path.

`OnInit` can attach dynamic navigation faces from `NavMeshPrefabName`. The host owns the object's `Id`, `GameEntity`, and current Mission. A constructor must not assume those values exist, and a mod should not use `new` as a replacement for scene attachment.

## Dependencies

[`Mission`](../../mission/Mission) allocates [`MissionObjectId`](../MissionObjectId), owns `MissionObjects` and `ActiveMissionObjects`, and receives removal notifications. [`SynchedMissionObject`](../SynchedMissionObject) extends this registration boundary with multiplayer state, while [`MissionBehavior`](../../mission/MissionBehavior) is the Mission-wide coordination layer.

## When to use and when not to

**Use it when:**

- Defining a derived scene object for a gate, marker, trap, or custom collision entity, with `AfterMissionStart`, `OnMissionEnded`, or `OnHit` behavior.
- Querying objects actually owned by the current Mission through `Mission.Current.ActiveMissionObjects`.
- Enabling, disabling, and disposing a scene object from the Mission behavior or authoritative side that owns its lifetime.

**Do not use it when:**

- The feature is an Agent, Team, or Mission-tick listener. Use [`MissionBehavior`](../../mission/MissionBehavior).
- The feature changes campaign save state. Return to Campaign behavior and the relevant Action; do not mutate campaign entities from `OnMissionEnded`.
- The feature needs multiplayer replication. Derive [`SynchedMissionObject`](../SynchedMissionObject) instead of broadcasting IDs yourself.

## Registration and identity

`OnPreInit` is the implicit registration boundary. Scene objects receive IDs from `GetFreeSceneMissionObjectId`; objects created after loading receive IDs from `GetFreeRuntimeMissionObjectId`. Runtime IDs have capacity and delayed-reuse rules. `OnRemoved` calls `Mission.OnMissionObjectRemoved`, and the server records the removal message.

`Id` is not an ordinary mutable business field. Read the current Mission's real objects from its active collection:

```csharp
using TaleWorlds.MountAndBlade;

Mission mission = Mission.Current;
if (mission != null)
{
    foreach (MissionObject missionObject in
             mission.ActiveMissionObjects.FindAllWithType<MissionObject>())
    {
        MissionObjectId objectId = missionObject.Id;
        bool isRuntimeObject = missionObject.CreatedAtRuntime;
        int numericId = objectId.Id;
    }
}
```

This reads objects owned by the current scene. Do not retain the `MissionObject` or `GameEntity` after removal.

## Key members

### Identity and navigation

- `Id` is the scene/runtime identity; `CreatedAtRuntime` mirrors `Id.CreatedAtRuntime`.
- `IsDisabled` reports the flag set by `SetDisabled`; it does not mean the object was destroyed.
- `HitObjectName` is a hit-display name that derived classes can override.
- `SetAbilityOfFaces(bool enabled)` toggles dynamic navigation faces allocated for this object; it is not a global-map path API.

**Purpose / timing:** Read these members after the object has entered Mission. Do not depend on `Id` during module loading or treat navigation-face ability as a party movement query.

### Lifecycle callbacks

- `AfterMissionStart()` reads scene state once the Mission is running.
- `OnDeploymentFinished()` adjusts objects after deployment points and teams are ready.
- `OnMissionEnded()` releases Agent, entity, and temporary collection references.
- `OnEndMission()` receives object-level end notification.
- `OnRemoved(int removeReason)` disables navigation and notifies Mission; overrides must call the base method.

**Purpose / timing:** The host invokes these callbacks. A mod should not call them manually to simulate a Mission phase.

### Enable, disable, and entity operations

- `SetEnabled(bool isParentObject = false)` reactivates the object and its navigation faces.
- `SetEnabledAndMakeVisible(bool isParentObject = false, bool enableFaces = false)` also restores visibility, physics, and script ticking.
- `SetDisabled(bool isParentObject = false)` removes the object from the active subset without destroying its entity.
- `SetDisabledAndMakeInvisible(bool isParentObject = false, bool disableFaces = false)` also hides the entity, disables physics, and adjusts ticking.
- `AddStuckMissile(GameEntity missileEntity)` attaches a missile entity as a child; it does not resolve hit damage.

**Purpose / timing:** Confirm that Mission, entity, and scene are valid before calling these methods. Multiplayer state changes belong to the synchronized subclass.

## Real derived example

A derived class should use its identity in callbacks instead of reading Mission in the constructor:

```csharp
using TaleWorlds.MountAndBlade;

public sealed class ModMissionMarker : MissionObject
{
    private MissionObjectId _registeredId;

    public override void AfterMissionStart()
    {
        _registeredId = Id;
    }

    public override void OnMissionEnded()
    {
        _registeredId = MissionObjectId.Invalid;
    }
}
```

The type still has to enter Mission through a scene entity or the game's Mission-object creation path. `new ModMissionMarker()` bypasses `OnPreInit`, so it has no valid entity, registration record, or scene ID.

## Risks and crash boundaries

- `Mission.Current` can be `null` before loading, after ending, or inside a delayed callback.
- Repeating `SetEnabled*` or `SetDisabled*` after removal can reach an invalid native entity.
- Rewriting `Id` breaks the identity mapping used by Mission collections and network messages.
- Keeping Agent, `GameEntity`, or object references after `OnRemoved` carries stale engine objects into a later Mission.
- Dynamic navigation and physics are authoritative server/local changes; a client visual change is not a world-state commit.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Inheritance chain: [SynchedMissionObject](../SynchedMissionObject) · [UsableMissionObject](../UsableMissionObject)
- Identity: [MissionObjectId](../MissionObjectId)
- Host: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- Documentation contract: [Doc Contract](../../../architecture/doc-contract)
- 中文/English: [MissionObject](../../../../zh/api/mission-ext/MissionObject)

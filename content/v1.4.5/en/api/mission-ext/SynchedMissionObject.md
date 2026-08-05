---
title: "SynchedMissionObject"
description: "MissionObject network-sync base that broadcasts transforms, visibility, animation, body flags, and colors from authority and interpolates on clients."
---
# SynchedMissionObject

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class SynchedMissionObject : MissionObject`  
**Base:** [`MissionObject`](../MissionObject)  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SynchedMissionObject.cs`

## One-line responsibility

`SynchedMissionObject` connects Mission-scene transforms, visibility, animation, body flags, and colors to `GameNetwork`: authority broadcasts them, while clients and replays move toward the received target state.

## Mental model

This is the **network-state layer** of `MissionObject`, not a general RPC service. When authority calls `SetFrameSynched`, `SetVisibleSynched`, or `SetDisabledSynched`, it writes a message containing the `MissionObjectId` and updates the local entity. Clients and replays store the target frame or state and interpolate in their tick path.

The object must already have been registered by `MissionObject.OnPreInit`, and every endpoint must resolve the same ID. `SynchronizeCompleted` only means that the local sync state machine caught up with its target; it does not prove that Mission or the entity is still alive.

## Dependencies

[`MissionObject`](../MissionObject) creates the Mission registration and [`MissionObjectId`](../MissionObjectId) is the address carried by synchronized messages. [`Mission`](../../mission/Mission) owns the object collections; `GameNetwork` transports snapshots and server/recorder authority decides which mutations are broadcast. [`UsableMissionObject`](../UsableMissionObject) adds Agent interaction state on top of this layer.

## When to use and when not to

**Use it when:**

- A scene object must replicate position, visibility, animation, physics flags, or team colors from multiplayer authority.
- An existing object needs its synchronization state inspected, or its target state changed through the provided methods.
- Network recording and replay must reproduce the object without a second message format.

**Do not use it when:**

- A local-only single-player entity needs no replication; [`MissionObject`](../MissionObject) is the smaller boundary.
- A client needs to submit game rules, damage, or save state; synchronized presentation is not rule authority.
- You need to hand-broadcast IDs, construct `GameNetworkMessage` objects, or send after removal.

## State and properties

### `SynchFlags`

`SynchFlags` contains `SynchNone`, `SynchTransform`, `SynchAnimation`, `SynchBodyFlags`, `SyncColors`, and `SynchAll`. It describes snapshot categories; callers should use the existing `*Synched` methods instead of modifying internal flags.

### `Color`, `Color2`, and `SynchronizeCompleted`

`Color` and `Color2` hold the current team-color state. `SynchronizeCompleted` becomes `true` when the private state reaches `SynchronizeCompleted`. During initial sync or smooth movement the object requests extra ticks, then drops that work after catching up.

## Key methods

### Transform synchronization

- `SetLocalPositionSmoothStep(ref Vec3 targetPosition)` smoothly tracks a local target position on the receiving side.
- `SetFrameSynched(ref MatrixFrame frame)` synchronizes a local transform.
- `SetGlobalFrameSynched(ref MatrixFrame frame)` synchronizes a global transform and handles parent coordinates.
- `SetFrameSynchedOverTime(ref MatrixFrame frame, float duration)` and its global counterpart interpolate for a duration.

**Purpose / timing:** Call these on authority when a registered scene object changes position. Do not turn client interpolation output into a new authority broadcast.

```csharp
using System.Linq;
using TaleWorlds.MountAndBlade;

SynchedMissionObject movingObject = Mission.Current?
    .ActiveMissionObjects
    .FindAllWithType<SynchedMissionObject>()
    .FirstOrDefault();

if (movingObject != null && GameNetwork.IsServerOrRecorder)
{
    MatrixFrame frame = movingObject.GameEntity.GetFrame();
    frame.origin.z += 0.1f;
    movingObject.SetFrameSynched(ref frame);
}
```

### Visibility, disable, and physics

- `SetVisibleSynched(bool value, bool forceChildrenVisible = false)` broadcasts visibility and can recurse into children.
- `SetDisabledSynched()` broadcasts a disable message and then uses the base hide/disable path.
- `SetPhysicsStateSynched(bool value, bool setChildren = true)` is an override point; the base implementation is empty and does not itself change physics.

Only authority/recording writes the corresponding network messages. If the object is a `UsableMissionObject`, use its `SetIsDeactivatedSynched` or `SetIsDisabledForPlayersSynched` for interaction state.

### Animation, particles, and body flags

- `SetAnimationAtChannelSynched` has string-name and integer-index overloads.
- `SetAnimationChannelParameterSynched`, `PauseSkeletonAnimationSynched`, and `ResumeSkeletonAnimationSynched` update animation parameters and pause state.
- `BurstParticlesSynched` and `ApplyImpulseSynched` propagate one-shot presentation or impulse operations.
- `AddBodyFlagsSynched` and `RemoveBodyFlagsSynched` change `BodyFlags` on the object or its children.

These calls require the relevant skeleton, physics, or particle resources. A message arriving does not make a missing native resource valid.

### Colors and network snapshots

- `SetTeamColors(uint color, uint color2)` changes local color state.
- `SetTeamColorsSynched` propagates the colors as synchronized state.
- `WriteToNetwork()` writes the base and derived snapshot.
- `OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` applies received transform, animation, colors, and disabled state; an override must preserve base processing.

## Real example: change presentation from authority

This changes an already registered object's transform only on server/recording authority, allowing clients to receive the same movement without mutating Agent or Campaign state:

```csharp
using TaleWorlds.MountAndBlade;

public static class ModMissionPresentation
{
    public static void RaiseObject(SynchedMissionObject missionObject)
    {
        if (missionObject == null || !missionObject.GameEntity.IsValid)
        {
            return;
        }

        if (GameNetwork.IsServerOrRecorder)
        {
            MatrixFrame target = missionObject.GameEntity.GetFrame();
            target.origin.z += 0.5f;
            missionObject.SetFrameSynchedOverTime(ref target, 0.25f);
        }
    }
}
```

## Risks and version boundaries

- The sync methods require a registered object and matching IDs at each endpoint; manually constructed objects or rewritten IDs make messages miss their target.
- A client call does not gain rule authority. It may only enter a local interpolation branch and cannot submit a game result.
- `OnTick` remains active until synchronization completes; many long-duration interpolations increase Mission tick cost.
- Animation, impulse, and BodyFlags calls depend on entity resources; a removed or destroyed `GameEntity` cannot be reused.
- An override that omits `base` in `WriteToNetwork` or `OnAfterReadFromNetwork` can drop base state and diverge replay/client behavior.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Base and interaction child: [MissionObject](../MissionObject) · [UsableMissionObject](../UsableMissionObject)
- Identity: [MissionObjectId](../MissionObjectId)
- Host: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- 中文/English: [SynchedMissionObject](../../../../zh/api/mission-ext/SynchedMissionObject)

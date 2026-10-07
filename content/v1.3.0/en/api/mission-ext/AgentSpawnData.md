---
title: "AgentSpawnData"
description: "Auto-generated class reference for AgentSpawnData."
---
# AgentSpawnData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AgentSpawnData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AgentSpawnData.cs`

## Overview

The `[EngineStruct("Agent_spawn_data", ...)]` payload (`AgentSpawnData.cs:8`) that carries one creature's body metrics across to the native side when an agent is spawned. It is a plain struct of nineteen public fields with no behaviour: hit points, five height measurements, four rider/camera adjustments, arm dimensions, and two movement limits. The engine fills all nineteen from a `Monster` in one place — `MonsterExtensions.FillSpawnData(this Monster, ItemObject)` (`MonsterExtensions.cs:140`).

## Mental Model

Read it as "the numbers that describe this body to the engine", not as configuration you tune per spawn. Every field is copied straight off the same-named `Monster` property (`MonsterExtensions.cs:144`-`MonsterExtensions.cs:162`), which means the authoring surface is the monster definition and this struct is the transport. Two fields break that pattern and are worth knowing before you copy a struct around. `MonsterUsageIndex` is not a usage id but an *index* resolved by `Agent.GetMonsterUsageIndex` (`MonsterExtensions.cs:145`), and `Weight` is the mount item's weight whenever a mount is supplied, falling back to the monster's own only when the argument is null (`MonsterExtensions.cs:146`).

## How to use

**Getting one.** Call `monster.FillSpawnData(mountItem)` (`MonsterExtensions.cs:140`). To diverge from the monster's authored values, mutate the returned struct's fields before it reaches agent creation — it is a value type, so your copy is independent of the monster.

**Typical use.**

```csharp
// MonsterExtensions.FillSpawnData (MonsterExtensions.cs:140) is the engine's producer.
AgentSpawnData spawn = monster.FillSpawnData(mountItem);

// The struct is yours to edit - it is a value type, so monster is untouched.
spawn.HitPoints = 250;                        // overrides Monster.HitPoints (MonsterExtensions.cs:144)
spawn.StandingEyeHeight += 0.1f;              // AgentSpawnData.cs:27

// Vec3 fields are structs too, so assign whole values rather than mutating in place.
spawn.EyeOffsetWrtHead = new Vec3(0f, 0f, 0.02f);   // AgentSpawnData.cs:42
```

**Watch out.** `MonsterUsageIndex` holds a resolved *index* (`MonsterExtensions.cs:145`), not a `MonsterUsage` value. Take an `AgentSpawnData` you built for one creature, copy it, and change only `HitPoints` — the copy still carries the first creature's usage index, and the agent spawns with the wrong usage attachment attached, which shows up as the wrong item in the creature's hands rather than as an error. And passing a non-null `mountItem` silently replaces the body's weight with the mount's (`MonsterExtensions.cs:146`), so a heavyweight creature mounted on a light horse reports the horse's mass.

## Members

| Member | Signature | What it is for |
|---|---|---|
| `HitPoints` | `public int HitPoints;` | The agent's starting hit-point pool; filled from `Monster.HitPoints` (`MonsterExtensions.cs:144`). |
| `MonsterUsageIndex` | `public int MonsterUsageIndex;` | Resolved index of the creature's `MonsterUsage`, via `Agent.GetMonsterUsageIndex` (`MonsterExtensions.cs:145`) — not the usage value itself. |
| `Weight` | `public int Weight;` | Body mass. Takes `mountItem.Weight` when a mount is supplied, else `Monster.Weight` (`MonsterExtensions.cs:146`). |
| `StandingChestHeight` | `public float StandingChestHeight;` | Chest height while upright, copied from the monster (`MonsterExtensions.cs:147`). |
| `StandingPelvisHeight` | `public float StandingPelvisHeight;` | Pelvis height while upright, copied from the monster (`MonsterExtensions.cs:148`). |
| `StandingEyeHeight` | `public float StandingEyeHeight;` | Eye height while standing on foot, copied from the monster (`MonsterExtensions.cs:149`). |
| `CrouchEyeHeight` | `public float CrouchEyeHeight;` | Eye height while crouching, copied from the monster (`MonsterExtensions.cs:150`). |
| `MountedEyeHeight` | `public float MountedEyeHeight;` | Eye height while mounted, copied from the monster (`MonsterExtensions.cs:151`). |
| `RiderEyeHeightAdder` | `public float RiderEyeHeightAdder;` | Extra eye height applied on top of the mounted value for a rider, copied from the monster (`MonsterExtensions.cs:152`). |
| `JumpAcceleration` | `public float JumpAcceleration;` | The creature's jump acceleration, copied from the monster (`MonsterExtensions.cs:153`). |
| `EyeOffsetWrtHead` | `public Vec3 EyeOffsetWrtHead;` | Eye position expressed relative to the head bone, copied from the monster (`MonsterExtensions.cs:154`). |
| `FirstPersonCameraOffsetWrtHead` | `public Vec3 FirstPersonCameraOffsetWrtHead;` | Where the first-person camera sits relative to the head, copied from the monster (`MonsterExtensions.cs:155`). |
| `RiderCameraHeightAdder` | `public float RiderCameraHeightAdder;` | Extra first-person camera height when this creature is the rider, copied from the monster (`MonsterExtensions.cs:156`). |
| `RiderBodyCapsuleHeightAdder` | `public float RiderBodyCapsuleHeightAdder;` | Height added to the body capsule for a rider, copied from the monster (`MonsterExtensions.cs:157`). |
| `RiderBodyCapsuleForwardAdder` | `public float RiderBodyCapsuleForwardAdder;` | Forward offset added to the body capsule for a rider, copied from the monster (`MonsterExtensions.cs:158`). |
| `ArmLength` | `public float ArmLength;` | Arm span used by the animation skeleton, copied from the monster (`MonsterExtensions.cs:159`). |
| `ArmWeight` | `public float ArmWeight;` | Arm mass used by ragdoll and hit reactions, copied from the monster (`MonsterExtensions.cs:160`). |
| `JumpSpeedLimit` | `public float JumpSpeedLimit;` | Cap on jump speed for this creature, copied from the monster (`MonsterExtensions.cs:161`). |
| `RelativeSpeedLimitForCharge` | `public float RelativeSpeedLimitForCharge;` | Relative-speed cap that applies when this creature charges, copied from the monster (`MonsterExtensions.cs:162`). |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AgentSpawnData entry = ...;
```

## See Also

- [Area Index](../)
- [Monster](../../core-extra/Monster)
- [Vec3](../../core-extra/Vec3)
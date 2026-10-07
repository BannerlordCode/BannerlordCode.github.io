---
title: "AnimationSystemData"
description: "Auto-generated class reference for AnimationSystemData."
---
# AnimationSystemData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AnimationSystemData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AnimationSystemData.cs`

## Overview

`AnimationSystemData` is the C# half of the native struct `Animation_system_data` — the declaration carries `[EngineStruct("Animation_system_data", false, null)]` (`AnimationSystemData.cs:9`), and the `false, null` arguments mean the engine never allocates the storage: it is marshalled by value, so the managed struct *is* the description the native skeleton system reads. It answers one question for a newly created agent: which action set drives this body, which monster usage set applies, how fast the agent is allowed to walk and crouch-walk, and which bone index corresponds to which body part.

There is exactly one instance of it per agent body, and it is never long-lived. Managed code produces a fresh value in `MonsterExtensions.FillAnimationSystemData(Monster, MBActionSet, float, bool)` (`MonsterExtensions.cs:18`) — that is what every mission spawn path calls, from `Mission.CreateAgent` down to `MissionNetworkComponent` (`MissionNetworkComponent.cs:351`). The value is handed to native and discarded. It comes back into managed code only when you deliberately push a new one onto a live agent with `Agent.SetActionSet` (`Agent.cs:2674`), which is why the type has no constructor worth calling and no lifecycle of its own.

One member produces a value without any input: `GetHardcodedAnimationSystemDataForHumanSkeleton()` (`AnimationSystemData.cs:14`) returns a fully populated human-only descriptor, action set index 0 and all.

## Mental Model

Read the `*MaxCount` constants as *buffer capacities*, never as how much data to fill. `FillAnimationSystemData` allocates fixed-size index buffers and starts every count at zero — `new sbyte[11]` for the corpse-ragdoll bones with `CountOfRagdollBonesToCheckForCorpses = 0` (`MonsterExtensions.cs:31`), `new sbyte[4]` for the fall-sound bones (`MonsterExtensions.cs:33`), `new sbyte[8]`, `new sbyte[7]`, `new sbyte[6]`, `new sbyte[8]` for the biped sets (`MonsterExtensions.cs:49`). Those sizes are exactly the `MaxCountOfRagdollBonesToCheckForCorpses = 11`, `RagdollFallSoundBoneIndexMaxCount = 4`, `RagdollStationaryCheckBoneMaxCount = 8`, `MoveAdderBoneMaxCount = 7`, `SplashDecalBoneMaxCount = 6`, `BloodBurstBoneMaxCount = 8` constants on this type (`AnimationSystemData.cs:136`). The native side fills the buffers in and writes the counts back; your job is to size them, not to populate them.

`-1` is the universal "this bone does not exist" marker, spelled `InvalidBoneIndex = -1` (`AnimationSystemData.cs:130`). The hardcoded human factory shows the convention: it writes nine real bones, then two `-1` sentinels, and sets the count to 9 (`AnimationSystemData.cs:41`), so the array is full-length but the trailing slots are deliberately invalid.

Treat `GetHardcodedAnimationSystemDataForHumanSkeleton()` as human-only and never general-purpose. Its `ActionSet` is hardcoded to `MBActionSet.GetActionSetWithIndex(0)` (`AnimationSystemData.cs:16`), its `MonsterUsageSetIndex` is `-1`, its `WalkingSpeedLimit`, `CrouchWalkingSpeedLimit` and `StepSize` are all `1f`, `HasClippingPlane` is `false`, and its `Quadruped` block is left as `default(AnimationSystemDataQuadruped)` (`AnimationSystemData.cs:125`). Handing that value to a horse leaves the quadruped bone map all zeros and the walk limits pinned at 1.

Two boundaries bite in practice. First, every API that consumes this takes it by `ref` — `CreateWithActionSet(ref AnimationSystemData)` (`IMBSkeletonExtensions.cs:21`), `SetActionSet(UIntPtr, ref AnimationSystemData)` (`IMBAgent.cs:618`) — so it has to be a local you own; a property, a readonly field or an element of a collection will not bind. Second, it is network-visible state: `Agent.SetActionSet` only acts under `if (GameNetwork.IsServerOrRecorder)` (`Agent.cs:2677`) and then broadcasts a `SetAgentActionSet` message carrying the whole struct (`Agent.cs:2680`), including `NumPaces` read back off it (`SetAgentActionSet.cs:51`). Called on a client it is a silent no-op for everyone else, so the agent keeps the old skeleton on all peers but you may have changed local state.

## How to use

**Getting one.** Do not hand-construct this struct; call the factory the game uses. `monster.FillAnimationSystemData(actionSet, stepSize, hasClippingPlane)` (`MonsterExtensions.cs:18`) is the explicit-action-set overload, and the sibling overload `FillAnimationSystemData(monster, stepSize, hasClippingPlane, isFemale)` (`MonsterExtensions.cs:10`) is the one that picks `monsterMissionData.FemaleActionSet` when the monster has one. It is consumed on the spawn path by `Mission.CreateAgent` / `CreateAgentInternal` (`Mission.cs:381`) and, for a body that already exists, by `Agent.SetActionSet` (`Agent.cs:2674`).

**Typical use** — swapping the action set of an agent that is already in the mission:

```csharp
public static class MyActionSetSwap
{
    // Call from a MissionBehavior / OnMissionEvent hook, server-side.
    public static void ApplyNewActionSet(Agent agent, string actionSetCode, float stepSize)
    {
        if (agent == null || agent.Monster == null)
        {
            return;
        }

        // FillAnimationSystemData allocates the bone-index buffers the engine writes into.
        AnimationSystemData data = agent.Monster.FillAnimationSystemData(
            MBGlobals.GetActionSet(actionSetCode),
            stepSize,
            false);

        // The action set is the one thing the factory does not derive for you here;
        // fix the movement limits the hardcoded values would otherwise leave at 1.
        data.WalkingSpeedLimit = stepSize;
        data.CrouchWalkingSpeedLimit = stepSize;
        data.StepSize = stepSize;

        // ref is mandatory, and this call only has an effect on the server/recorder.
        agent.SetActionSet(ref data);
    }
}
```

`MBGlobals.GetActionSet(string)` (`MBGlobals.cs:29`) returns the `MBActionSet` the `ActionSet` field expects.

**Most common mistake:** filling only the part that looks interesting and passing the struct on:

```csharp
var data = new AnimationSystemData { ActionSet = MBGlobals.GetActionSet("human_fullbody") };
agent.SetActionSet(ref data);   // Bones/Biped/Quadruped are still default()
```

The bone arrays live in the nested `Bones` and `Biped` structs, so an object-initializer that skips them leaves every `sbyte[]` field `null` and every count `0`. The consequence is a hard failure or a corrupt skeleton at the native boundary, because the engine writes into buffers that do not exist; the managed factory exists precisely to allocate them (`MonsterExtensions.cs:31`). Route every construction through `FillAnimationSystemData`.

## Key Methods

### GetHardcodedAnimationSystemDataForHumanSkeleton
`public static AnimationSystemData GetHardcodedAnimationSystemDataForHumanSkeleton()`

**Purpose:** Reads and returns the hardcoded animation system data for human skeleton value held by the this instance.

```csharp
// Static call; no instance required
AnimationSystemData.GetHardcodedAnimationSystemDataForHumanSkeleton();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AnimationSystemData entry = ...;
```

## See Also

- [Area Index](../)
- [MonsterExtensions — the factory that actually builds this](../MonsterExtensions)
- [AnimationSystemBoneData — the biped bone-index block](../AnimationSystemBoneData)
- [Agent — the consumer, `SetActionSet`](../../mission/Agent)
- [中文页面](../../../../zh/api/mission-ext/AnimationSystemData)
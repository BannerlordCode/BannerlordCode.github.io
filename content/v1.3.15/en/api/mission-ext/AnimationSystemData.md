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

`AnimationSystemData` is the `struct` that tells the native animation system how to build and drive an
agent's skeleton. It is an `[EngineStruct("Animation_system_data", …)]` and `[Serializable]`
(`AnimationSystemData.cs:9`) whose *entire* purpose is to cross the managed/native boundary — it is always
passed by `ref`, e.g. `GameEntityExtensions.CreateSkeletonWithActionSet(ref animationSystemData)`
(`GameEntityExtensions.cs:49`) and `Agent.SetActionSet(ref animationSystemData)`
(`Agent.cs:2701`). Nothing outside this boundary should hold on to it.

Its top-level members are deliberately few: `ActionSet` (carrying its own
`[CustomEngineStructMemberData("action_set_no")]` tag, `AnimationSystemData.cs:157`), `NumPaces`,
`MonsterUsageSetIndex`, three locomotion scalars (`WalkingSpeedLimit`, `CrouchWalkingSpeedLimit`,
`StepSize`), a `[MarshalAs(UnmanagedType.U1)]` `HasClippingPlane`
(`AnimationSystemData.cs:176`), and three nested blocks — `Bones`, `Biped` and `Quadruped`.

The bulk of the content is inside those blocks, and it is almost entirely **bone indices resolved by name**.
The static factory `GetHardcodedAnimationSystemDataForHumanSkeleton` builds a full human configuration by
calling `Skeleton.GetBoneIndexFromName(actionSet.GetSkeletonName(), "<bone>")` for every slot
(`AnimationSystemData.cs:29` … `AnimationSystemData.cs:60`), then fills `Biped` with the IK and decal sets
(`AnimationSystemData.cs:62` … `AnimationSystemData.cs:123`).

## Mental Model

Read it as a native-layout description, not as a data bag you own. The boundaries:

- **It is passed by `ref` everywhere, and it is meant to be consumed, not retained.** `CreateAgentSkeleton`
  hands the struct straight to `MBAPI.IMBSkeletonExtensions.CreateAgentSkeleton`
  (`GameEntityExtensions.cs:38`), and `Agent.SetActionSet` also broadcasts it over the network
  (`Agent.cs:2707`). A copy you keep afterwards is a snapshot the engine has already consumed.
- **Arrays are length-paired with explicit counts, and the counts are hard-coded in the factory.**
  `IndicesOfRagdollBonesToCheckForCorpses` is an 11-element array with `CountOfRagdollBonesToCheckForCorpses = 9`
  (`AnimationSystemData.cs:41`), and the last two entries are literal `-1`
  (`AnimationSystemData.cs:38`). The count is the authority; the trailing `-1` padding exists to fill the
  fixed-size native array. `RagdollFallSoundBoneIndices` does the same with a count of `3`
  (`AnimationSystemData.cs:49`).
- **Those `-1`s are the documented "absent" value.** `InvalidBoneIndex = -1`
  (`AnimationSystemData.cs:130`) is the sentinel, and `MonsterUsageSetIndex` is set to `-1` for the human
  skeleton (`AnimationSystemData.cs:20`) precisely because a human has no monster usage set.
- **`Quadruped` is left at `default` for humans** (`AnimationSystemData.cs:125`) — a valid, zero-filled
  struct, not a null. Consumers must check indices against `InvalidBoneIndex` rather than assume the block
  is populated.
- **The count constants are the maximum array sizes**, declared together: `NumBonesForIkMaxCount = 8`,
  `MaxCountOfRagdollBonesToCheckForCorpses = 11`, `RagdollFallSoundBoneIndexMaxCount = 4`,
  `RagdollStationaryCheckBoneMaxCount = 8`, `MoveAdderBoneMaxCount = 7`, `SplashDecalBoneMaxCount = 6`,
  `BloodBurstBoneMaxCount = 8`, `BoneIndicesToModifyOnSlopingGroundMaxCount = 7`
  (`AnimationSystemData.cs:133` … `AnimationSystemData.cs:154`). Adding a bone means checking every one of
  these, not just the array you edited.
- **`GetHardcodedAnimationSystemDataForHumanSkeleton` has no caller in this tree.** A search finds only its
  own declaration (`AnimationSystemData.cs:14`). The path the game actually uses for agents is
  `Monster.FillAnimationSystemData(actionSet, 1f, false)` (`GameEntityExtensions.cs:37`) — the hardcoded
  human builder is a utility for mods and tools, not the live code path.
- `ActionSet` is the only member with a custom engine-struct tag; `Biped` and `Quadruped` are tagged
  `true`, `Bones` is not tagged at all (`AnimationSystemData.cs:183`, `AnimationSystemData.cs:187`).

## How to use

**Getting one.** In gameplay, obtain one from `Monster.FillAnimationSystemData` the way the engine does, or
use the hardcoded human factory when you only need a human skeleton. Then pass it by `ref` into
`CreateSkeletonWithActionSet` — do not try to build one field by field.

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

// Option A: the hardcoded human skeleton (AnimationSystemData.cs:14).
AnimationSystemData data = AnimationSystemData.GetHardcodedAnimationSystemDataForHumanSkeleton();

// Option B: what the engine actually does for an agent (GameEntityExtensions.cs:37).
// AnimationSystemData data = monster.FillAnimationSystemData(actionSet, 1f, false);

// Passed by ref into the native skeleton builder; the engine consumes it immediately
// (GameEntityExtensions.cs:51).
gameEntity.CreateSkeletonWithActionSet(ref data);

// Bone slots that were not filled are the documented InvalidBoneIndex (AnimationSystemData.cs:130).
Debug.Print("head bone = " + data.Bones.HeadLookDirectionBoneIndex);
```

**The mistake that bites.** Building a custom `AnimationSystemData` by hand and skipping the array-count
discipline. Every bone array is paired with a separate `…Count` field, and the native side reads the count
(`AnimationSystemData.cs:41`), not the array length — so adding a tenth entry to
`IndicesOfRagdollBonesToCheckForCorpses` without bumping `CountOfRagdollBonesToCheckForCorpses` leaves it
ignored, while bumping the count past the declared maximum (`MaxCountOfRagdollBonesToCheckForCorpses = 11`,
`AnimationSystemData.cs:136`) overruns the fixed native array and corrupts whatever follows it in the
struct. Change the array and the count together, and never exceed the maximum.



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
- [AnimationSystemBoneData](../AnimationSystemBoneData)
- [AnimationSystemDataQuadruped](../AnimationSystemDataQuadruped)
- [AgentStatCalculateModel](../AgentStatCalculateModel)
- [中文页面](../../../../zh/api/mission-ext/AnimationSystemData)
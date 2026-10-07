---
title: "BoneBodyTypeData"
description: "Auto-generated class reference for BoneBodyTypeData."
---
# BoneBodyTypeData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BoneBodyTypeData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BoneBodyTypeData.cs`

## Overview

`BoneBodyTypeData` is the engine's answer to "what is this bone, and how should hitboxes treat it?". It is a value type, declared `public struct BoneBodyTypeData` (`BoneBodyTypeData.cs:8`) and stamped `[EngineStruct("Bone_body_type_data", false, null)]` (`BoneBodyTypeData.cs:7`) so the managed and native layers share one layout. The whole type is three `readonly` public fields and nothing else — no properties, no methods, no constructors.

Those three fields are `BoneBodyPartType BodyPartType`, `sbyte Priority` and `SkeletonModelBoundsRecFlags DataFlags` (`BoneBodyTypeData.cs:12`, `BoneBodyTypeData.cs:16`, `BoneBodyTypeData.cs:20`), each carrying `[CustomEngineStructMemberData(true)]`. There is nothing to subclass, nothing to configure and nothing to cache: it is a record the native skeleton system fills in.

The type is produced for you and nowhere else. `MBAgentVisuals.GetBoneTypeData(sbyte boneIndex)` declares a local `default(BoneBodyTypeData)`, hands it to `MBAPI.IMBAgentVisuals.GetBoneTypeData` by `ref`, and returns whatever the native side wrote into it (`MBAgentVisuals.cs:158`). The matching interface declaration takes the same `ref BoneBodyTypeData` out-parameter (`IMBAgentVisuals.cs:286`). You read one; you never build one.

## Mental Model

Read it as an out-parameter contract, because that is literally the shape of the API. Every field is `readonly`, so the only way a value reaches you is for native code to overwrite the struct in place through the `ref` the interface call hands over. There is no managed code path in the tree that assigns any of the three fields.

Three consequences follow, and all of them bite.

First, `default(BoneBodyTypeData)` is a legitimate-looking value with `BodyPartType` at `0`, `Priority` at `0` and `DataFlags` empty — and nothing tells it apart from a real answer. If you cache results yourself, an uninitialised struct is indistinguishable from "the engine said BodyPartType 0".

Second, because the fields are `readonly`, you cannot post-process in place. To change one field you copy the struct to a local, modify the copy, and pass that — the original the engine owns is untouched.

Third, `sbyte` is the index type everywhere in this API. `GetBoneTypeData` takes an `sbyte boneIndex` (`MBAgentVisuals.cs:158`), not an `int`. An `int` bone index does not convert implicitly in a way you should rely on; passing one silently takes the low byte, so bone 200 and bone 456 are indistinguishable. Cast deliberately. Note that `DataFlags` is itself an `sbyte`-backed native enum (`SkeletonModelBoundsRecFlags.cs:8`) whose members skip the value 3 — `None`, `UseSmallerRadiusMultWhileHoldingShield`, `Sweep`, then `DoNotScaleAccordingToAgentScale = 4` (`SkeletonModelBoundsRecFlags.cs:11`) — so test it with a bitwise `&` rather than assuming contiguous bits.

## How to use

**Getting one.** Call `MBAgentVisuals.GetBoneTypeData`, which is the only managed factory. Reach the `MBAgentVisuals` instance from an `IAgentVisual`, and the bone index from the agent's skeleton — the index space is the skeleton's bone order, not the `BoneBodyPartType` enum values, so do not feed one into the other.

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

// `agentVisual` is the IAgentVisual for the agent you are inspecting.
MBAgentVisuals visuals = agentVisual.GetVisuals();
Skeleton skeleton = visuals.GetSkeleton();

// Both the count and the index are sbyte throughout this API.
for (sbyte boneIndex = 0; boneIndex < skeleton.GetBoneCount(); boneIndex++)
{
    BoneBodyTypeData boneInfo = visuals.GetBoneTypeData(boneIndex);

    // The engine tells you the hitbox category, not which bone this is —
    // `boneIndex` is the only identity, so keep it yourself.
    if ((boneInfo.DataFlags & SkeletonModelBoundsRecFlags.Sweep) != 0)
    {
        BoneBodyPartType part = boneInfo.BodyPartType;
        sbyte priority = boneInfo.Priority;
        Debug.Print($"bone {skeleton.GetBoneName(boneIndex)}: part={part} priority={priority}");
    }
}
```

There is no setter to write through — the fields are `readonly` — so keep any per-bone rule in your own data, keyed by bone index:

```csharp
public struct MyBoneRule
{
    public BoneBodyPartType BodyPart;
    public float ExtraDamageMultiplier;
}

var myRules = new System.Collections.Generic.Dictionary<sbyte, MyBoneRule>();
```

**The most common mistake** is assuming `BoneBodyTypeData` identifies a bone. It does not — the type carries no bone index and no bone name, only `BodyPartType`, `Priority` and `DataFlags` (`BoneBodyTypeData.cs:12`). Two bones the engine maps into the same hitbox category come back byte-for-byte identical, so keying a lookup table on the struct collapses them into one entry and your per-bone rule fires on the wrong bone. Carry `boneIndex` alongside the struct yourself and key on that. The second trap is the `sbyte`: `GetBoneTypeData` takes `sbyte boneIndex` (`MBAgentVisuals.cs:158`) and `Skeleton.GetBoneCount()` also returns `sbyte`, so any `int` bone id you hold must be cast explicitly — an index above 127 truncates rather than throwing, and the engine happily answers about a different bone.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BoneBodyTypeData entry = ...;
```

## See Also

- [Area Index](../)
- [BoneBodyPartType](../BoneBodyPartType) — the enum carried in the `BodyPartType` field
- [SkeletonModelBoundsRecFlags](../SkeletonModelBoundsRecFlags) — the `sbyte`-backed flag set carried in `DataFlags`
- [MBAgentVisuals](../MBAgentVisuals) — the only managed producer, via `GetBoneTypeData`
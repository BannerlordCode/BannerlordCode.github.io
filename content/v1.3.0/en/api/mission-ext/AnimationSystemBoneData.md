---
title: "AnimationSystemBoneData"
description: "Auto-generated class reference for AnimationSystemBoneData."
---
# AnimationSystemBoneData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AnimationSystemBoneData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AnimationSystemBoneData.cs`

## Overview

The bone-index table the native animation system needs in order to reason about one agent's skeleton. It is an `[EngineStruct("animation_system_bone_data", ...)]` struct (`AnimationSystemBoneData.cs:8`) of thirteen fields: two fixed-length `sbyte` arrays plus nine scalar bone indices. It has no methods. Every field is an index into a skeleton, and the two arrays carry an explicit count field because their marshalled length and their meaningful length are different numbers.

## Mental Model

The two arrays are the trap, and the engine's own initialiser shows why. `IndicesOfRagdollBonesToCheckForCorpses` is marshalled `ByValArray` with `SizeConst = 11` (`AnimationSystemBoneData.cs:13`), so it is always exactly eleven bytes wide. `AnimationSystemData`'s constructor fills nine real bone indices and then pads with two literal `-1` entries (`AnimationSystemData.cs:38`-`AnimationSystemData.cs:39`), and sets `CountOfRagdollBonesToCheckForCorpses = 9` (`AnimationSystemData.cs:41`) — the count is the number of *meaningful* entries, not the array length. `RagdollFallSoundBoneIndices` follows the same pattern with `SizeConst = 4` (`AnimationSystemBoneData.cs:20`), three real indices plus one `-1` (`AnimationSystemData.cs:47`), and a count of 3 (`AnimationSystemData.cs:49`). The nine scalars are resolved from bone names by `Skeleton.GetBoneIndexFromName` (`AnimationSystemData.cs:50`-`AnimationSystemData.cs:60`), which means every value here is skeleton-relative.

## How to use

**Getting one.** Two producers exist. `AnimationSystemData` fills a full table in its constructor (`AnimationSystemData.cs:25`), and `MonsterExtensions` fills a deliberately empty one — `new sbyte[11]` with a count of 0 (`MonsterExtensions.cs:31`-`MonsterExtensions.cs:34`) — then copies the scalar indices off the monster (`MonsterExtensions.cs:35`). To build your own, mirror the constructor: allocate the arrays at their exact `SizeConst` lengths, pad the tail with `-1`, and set the count to the number of real entries.

**Typical use.**

```csharp
// Mirror AnimationSystemData's own construction (AnimationSystemData.cs:25-49).
AnimationSystemBoneData bones = new AnimationSystemBoneData
{
    IndicesOfRagdollBonesToCheckForCorpses = new sbyte[]
    {
        Skeleton.GetBoneIndexFromName(skeletonName, "head"),
        Skeleton.GetBoneIndexFromName(skeletonName, "neck"),
        Skeleton.GetBoneIndexFromName(skeletonName, "spine"),
        -1, -1, -1, -1, -1, -1, -1, -1   // pad to the marshalled length of 11
    },
    CountOfRagdollBonesToCheckForCorpses = 3,   // the REAL count, not 11
    RagdollFallSoundBoneIndices = new sbyte[]
    {
        Skeleton.GetBoneIndexFromName(skeletonName, "spine2"),
        -1, -1, -1                            // pad to the marshalled length of 4
    },
    RagdollFallSoundBoneIndexCount = 1,
    HeadLookDirectionBoneIndex = Skeleton.GetBoneIndexFromName(skeletonName, "head")
};
animationSystemData.Bones = bones;   // field at AnimationSystemData.cs:180
```

**Watch out.** The array length and the count field are independent, and the engine trusts the count. `AnimationSystemData` pads with `-1` (`AnimationSystemData.cs:38`) and counts only the real entries (`AnimationSystemData.cs:41`), so if you fill all eleven slots with valid indices but leave the count at the default, two bones are silently never checked for corpses; and if you raise the count to match eleven without padding, the native side treats `-1` as a bone index. The mirror-image mistake is assuming the count clamps you: it does not. Separately, every value is resolved from a *named* bone on a *specific* skeleton (`AnimationSystemData.cs:50`), so a table copied from a biped skeleton and applied to a quadruped points at whatever bone happens to occupy that index there.

## Members

| Member | Signature | What it is for |
|---|---|---|
| `IndicesOfRagdollBonesToCheckForCorpses` | `[MarshalAs(UnmanagedType.ByValArray, SizeConst = 11)] public sbyte[] IndicesOfRagdollBonesToCheckForCorpses;` | Fixed-width array of bone indices the ragdoll consults when deciding whether a corpse is left behind. Always eleven bytes across; `AnimationSystemData` pads the tail with `-1` (`AnimationSystemData.cs:38`). |
| `CountOfRagdollBonesToCheckForCorpses` | `public sbyte CountOfRagdollBonesToCheckForCorpses;` | How many of those eleven entries are real — nine in `AnimationSystemData` (`AnimationSystemData.cs:41`), zero in the `MonsterExtensions` producer (`MonsterExtensions.cs:32`). |
| `RagdollFallSoundBoneIndices` | `[MarshalAs(UnmanagedType.ByValArray, SizeConst = 4)] public sbyte[] RagdollFallSoundBoneIndices;` | Bone indices ragdoll listens on when choosing a fall sound. Four bytes wide, padded with `-1` (`AnimationSystemData.cs:47`). |
| `RagdollFallSoundBoneIndexCount` | `public sbyte RagdollFallSoundBoneIndexCount;` | Number of real entries in the array above: three in `AnimationSystemData` (`AnimationSystemData.cs:49`), zero in `MonsterExtensions` (`MonsterExtensions.cs:34`). |
| `HeadLookDirectionBoneIndex` | `public sbyte HeadLookDirectionBoneIndex;` | Bone whose orientation is read as the agent's head-look direction; resolved from `"head"` (`AnimationSystemData.cs:50`) and read back by mission behaviour such as `AlarmedBehaviorGroup.cs:61`. |
| `SpineLowerBoneIndex` | `public sbyte SpineLowerBoneIndex;` | Lower spine bone, resolved from `"spine"` (`AnimationSystemData.cs:51`). |
| `SpineUpperBoneIndex` | `public sbyte SpineUpperBoneIndex;` | Upper spine bone, resolved from `"spine1"` (`AnimationSystemData.cs:52`). |
| `ThoraxLookDirectionBoneIndex` | `public sbyte ThoraxLookDirectionBoneIndex;` | Thorax bone whose orientation is read as the thorax-look direction, resolved from `"spine2"` (`AnimationSystemData.cs:53`). |
| `NeckRootBoneIndex` | `public sbyte NeckRootBoneIndex;` | Neck root bone, resolved from `"neck"` (`AnimationSystemData.cs:54`). |
| `PelvisBoneIndex` | `public sbyte PelvisBoneIndex;` | Pelvis bone, resolved from `"pelvis"` (`AnimationSystemData.cs:55`). |
| `RightUpperArmBoneIndex` | `public sbyte RightUpperArmBoneIndex;` | Right upper-arm bone, resolved from `"r_upperarm_twist"` (`AnimationSystemData.cs:56`). |
| `LeftUpperArmBoneIndex` | `public sbyte LeftUpperArmBoneIndex;` | Left upper-arm bone, resolved from `"l_upperarm_twist"` (`AnimationSystemData.cs:57`). |
| `FallBlowDamageBoneIndex` | `public sbyte FallBlowDamageBoneIndex;` | Bone used when a falling blow applies damage, resolved from `"l_calf"` (`AnimationSystemData.cs:58`). |
| `TerrainDecalBone0Index` | `[CustomEngineStructMemberData("terrain_decal_bone_0_index")] public sbyte TerrainDecalBone0Index;` | First terrain-decal bone, marshalled under the native name `terrain_decal_bone_0_index` (`AnimationSystemBoneData.cs:54`); resolved from `"r_foot"` (`AnimationSystemData.cs:59`). |
| `TerrainDecalBone1Index` | `[CustomEngineStructMemberData("terrain_decal_bone_1_index")] public sbyte TerrainDecalBone1Index;` | Second terrain-decal bone, marshalled under `terrain_decal_bone_1_index` (`AnimationSystemBoneData.cs:58`); resolved from `"l_foot"` (`AnimationSystemData.cs:60`). |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AnimationSystemBoneData entry = ...;
```

## See Also

- [Area Index](../)
- [AnimationSystemData](../AnimationSystemData)
- [Skeleton](../../engine/Skeleton)
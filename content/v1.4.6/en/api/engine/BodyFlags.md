---
title: "BodyFlags"
description: "BodyFlags: a public enum in TaleWorlds.Engine, inheriting uint; 44 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/BodyFlags.cs."
---
# BodyFlags

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public enum BodyFlags : uint`
**File:** `TaleWorlds.Engine/BodyFlags.cs`

## Overview

BodyFlags lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/BodyFlags.cs. It is a public enum, implementing/inheriting uint; the inheritance chain is BodyFlags → uint. It exposes 44 public/protected members: 44 enum values.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BodyFlags is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain BodyFlags → uint. The surface is method-led (methods 0/44, properties 0/44), so it mostly exposes operations. uint on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/BodyFlags.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `0U` | `None == 0U` | enum value |
| `1U` | `Disabled == 1U` | enum value |
| `2U` | `NotDestructible == 2U` | enum value |
| `4U` | `TwoSided == 4U` | enum value |
| `8U` | `Dynamic == 8U` | enum value |
| `16U` | `Moveable == 16U` | enum value |
| `32U` | `DynamicConvexHull == 32U` | enum value |
| `64U` | `Ladder == 64U` | enum value |
| `128U` | `OnlyCollideWithRaycast == 128U` | enum value |
| `256U` | `AILimiter == 256U` | enum value |
| `512U` | `Barrier == 512U` | enum value |
| `1024U` | `Barrier3D == 1024U` | enum value |
| `2048U` | `HasSteps == 2048U` | enum value |
| `4096U` | `Ragdoll == 4096U` | enum value |
| `8192U` | `RagdollLimiter == 8192U` | enum value |
| `16384U` | `DestructibleDoor == 16384U` | enum value |
| `32768U` | `DroppedItem == 32768U` | enum value |
| `65536U` | `DoNotCollideWithRaycast == 65536U` | enum value |
| `131072U` | `DontTransferToPhysicsEngine == 131072U` | enum value |
| `262144U` | `DontCollideWithCamera == 262144U` | enum value |
| `524288U` | `ExcludePathSnap == 524288U` | enum value |
| `1048576U` | `WaterBody == 1048576U` | enum value |
| `0U` | `AfterAddFlags == 0U` | enum value |
| `2097152U` | `AgentOnly == 2097152U` | enum value |
| `4194304U` | `MissileOnly == 4194304U` | enum value |
| `8388608U` | `HasMaterial == 8388608U` | enum value |
| `268435456U` | `IgnoreSoundOcclusion == 268435456U` | enum value |
| `536870912U` | `StealthBox == 536870912U` | enum value |
| `1073741824U` | `Sinking == 1073741824U` | enum value |
| `2147483648U` | `FloatingDebris == 2147483648U` | enum value |
| `4043309055U` | `BodyFlagFilter == 4043309055U` | enum value |
| `0U` | `BodyOwnerNone == 0U` | enum value |
| `16777216U` | `BodyOwnerEntity == 16777216U` | enum value |
| `33554432U` | `BodyOwnerTerrain == 33554432U` | enum value |
| `67108864U` | `BodyOwnerFlora == 67108864U` | enum value |
| `251658240U` | `BodyOwnerFilter == 251658240U` | enum value |
| `544321929U` | `CommonCollisionExcludeFlags == 544321929U` | enum value |
| `544323529U` | `CameraCollisionRayCastExludeFlags == 544323529U` | enum value |
| `542224777U` | `CommonCollisionExcludeFlagsForAgent == 542224777U` | enum value |
| `540129161U` | `CommonCollisionExcludeFlagsForMissile == 540129161U` | enum value |
| `540127625U` | `CommonCollisionExcludeFlagsForCombat == 540127625U` | enum value |
| `540127625U` | `CommonCollisionExcludeFlagsForEditor == 540127625U` | enum value |
| `4043259711U` | `CommonFlagsThatDoNotBlockRay == 4043259711U` | enum value |
| `79617U` | `CommonFocusRayCastExcludeFlags == 79617U` | enum value |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)

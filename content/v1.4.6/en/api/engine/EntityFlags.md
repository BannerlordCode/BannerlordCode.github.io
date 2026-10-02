---
title: "EntityFlags"
description: "EntityFlags: a public enum in TaleWorlds.Engine, inheriting uint; 25 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/EntityFlags.cs."
---
# EntityFlags

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public enum EntityFlags : uint`
**File:** `TaleWorlds.Engine/EntityFlags.cs`

## Overview

EntityFlags lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/EntityFlags.cs. It is a public enum, implementing/inheriting uint; the inheritance chain is EntityFlags → uint. It exposes 25 public/protected members: 25 enum values.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EntityFlags is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain EntityFlags → uint. The surface is method-led (methods 0/25, properties 0/25), so it mostly exposes operations. uint on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/EntityFlags.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `240U` | `ForceLodMask == 240U` | enum value |
| `4U` | `ForceLodBits == 4U` | enum value |
| `512U` | `NoOcclusionCulling == 512U` | enum value |
| `1024U` | `IsHelper == 1024U` | enum value |
| `2048U` | `ComputePerComponentLod == 2048U` | enum value |
| `4096U` | `DoesNotAffectParentsLocalBb == 4096U` | enum value |
| `8192U` | `ForceAsStatic == 8192U` | enum value |
| `16384U` | `HideInPrefabEditors == 16384U` | enum value |
| `32768U` | `PhysicsDisabled == 32768U` | enum value |
| `65536U` | `AlignToTerrain == 65536U` | enum value |
| `131072U` | `DontSaveToScene == 131072U` | enum value |
| `262144U` | `RecordToSceneReplay == 262144U` | enum value |
| `524288U` | `AffectedByEnvironmentDecals == 524288U` | enum value |
| `1048576U` | `SmoothLodTransitions == 1048576U` | enum value |
| `2097152U` | `DontCheckHandness == 2097152U` | enum value |
| `4194304U` | `NotAffectedBySeason == 4194304U` | enum value |
| `8388608U` | `DontTickChildren == 8388608U` | enum value |
| `16777216U` | `WaitUntilReady == 16777216U` | enum value |
| `33554432U` | `NonModifiableFromEditor == 33554432U` | enum value |
| `67108864U` | `PrefabCannotBeBroken == 67108864U` | enum value |
| `134217728U` | `PerComponentVisibility == 134217728U` | enum value |
| `268435456U` | `Ignore == 268435456U` | enum value |
| `536870912U` | `DoNotTick == 536870912U` | enum value |
| `1073741824U` | `DoNotRenderToEnvmap == 1073741824U` | enum value |
| `2147483648U` | `AlignRotationToTerrain == 2147483648U` | enum value |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)

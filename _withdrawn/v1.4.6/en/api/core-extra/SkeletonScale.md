---
title: "SkeletonScale"
description: "SkeletonScale: a public class in TaleWorlds.Core, inheriting MBObjectBase; 9 exposed members (2 methods, 6 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/SkeletonScale.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SkeletonScale

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class SkeletonScale : MBObjectBase`
**File:** `TaleWorlds.Core/SkeletonScale.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

SkeletonScale lives in the TaleWorlds.Core module, source file TaleWorlds.Core/SkeletonScale.cs. It is a public class (sealed), implementing/inheriting MBObjectBase; the inheritance chain is SkeletonScale → MBObjectBase. It exposes 9 public/protected members: 2 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SkeletonScale lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain SkeletonScale → MBObjectBase. The surface is property-led (properties 6/9, methods 2/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/SkeletonScale.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SkeletonModel` | `public string SkeletonModel` | property |
| `MountSitBoneScale` | `public Vec3 MountSitBoneScale` | property |
| `MountRadiusAdder` | `public float MountRadiusAdder` | property |
| `Vec3[]Scales` | `public Vec3[]Scales` | property |
| `List` | `public List<string>BoneNames` | property |
| `sbyte[]BoneIndices` | `public sbyte[]BoneIndices` | property |
| `SkeletonScale` | `public SkeletonScale()` | constructor |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |
| `SetBoneIndices` | `public void SetBoneIndices(sbyte[]boneIndices)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)

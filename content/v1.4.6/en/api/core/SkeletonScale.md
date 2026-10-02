---
title: "SkeletonScale"
description: "SkeletonScale: a public class in TaleWorlds.Core, inheriting MBObjectBase; 9 exposed members (2 methods, 6 properties, 0 fields). Source: TaleWorlds.Core/SkeletonScale.cs."
---
# SkeletonScale

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class SkeletonScale : MBObjectBase`
**File:** `TaleWorlds.Core/SkeletonScale.cs`

## Overview

SkeletonScale lives in the TaleWorlds.Core module, source file TaleWorlds.Core/SkeletonScale.cs. It is a public class (sealed), implementing/inheriting MBObjectBase; the inheritance chain is SkeletonScale → MBObjectBase. It exposes 9 public/protected members: 2 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SkeletonScale is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain SkeletonScale → MBObjectBase. The surface is property-led (properties 6/9, methods 2/9), so it mostly exposes state for reading. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/SkeletonScale.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)

---
title: "AnimResult"
description: "AnimResult: a public struct in TaleWorlds.Engine; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/AnimResult.cs."
---
# AnimResult

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct AnimResult`
**File:** `TaleWorlds.Engine/AnimResult.cs`

## Overview

AnimResult lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/AnimResult.cs. It is a public struct; the inheritance chain is AnimResult. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AnimResult is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain AnimResult. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/AnimResult.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEntitialOutTransform` | `public Transformation GetEntitialOutTransform(sbyte boneIndex, Skeleton skeleton)` | method |
| `SetOutBoneDisplacement` | `public void SetOutBoneDisplacement(sbyte boneIndex, Vec3 position, Skeleton skeleton)` | method |
| `SetOutQuat` | `public void SetOutQuat(sbyte boneIndex, Mat3 rotation, Skeleton skeleton)` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
- [same namespace BodyFlags](../BodyFlags)

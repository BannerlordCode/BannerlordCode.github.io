---
title: "GenericMissionEventBox"
description: "GenericMissionEventBox: a public class in SandBox, inheriting VolumeBox; 2 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox/Objects/GenericMissionEventBox.cs."
---
# GenericMissionEventBox

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class GenericMissionEventBox : VolumeBox`
**File:** `SandBox/Objects/GenericMissionEventBox.cs`

## Overview

GenericMissionEventBox lives in the SandBox module, source file SandBox/Objects/GenericMissionEventBox.cs. It is a public class, implementing/inheriting VolumeBox; the inheritance chain is GenericMissionEventBox → VolumeBox. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GenericMissionEventBox is a top-level type in SandBox, namespace differing from (SandBox.Objects) the module directory; inheritance chain GenericMissionEventBox → VolumeBox. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. VolumeBox on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/GenericMissionEventBox.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheckpointArea](../CheckpointArea)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData)
- [same namespace DynamicPatrolAreaParent](../DynamicPatrolAreaParent)
- [same namespace GroupSpawnPoint](../GroupSpawnPoint)

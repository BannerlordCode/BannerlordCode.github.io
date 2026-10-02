---
title: "DynamicPatrolAreaParent"
description: "DynamicPatrolAreaParent: a public class in SandBox, inheriting MissionObject; 3 exposed members (1 methods, 0 properties, 2 fields). Source: SandBox/Objects/DynamicPatrolAreaParent.cs."
---
# DynamicPatrolAreaParent

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class DynamicPatrolAreaParent : MissionObject`
**File:** `SandBox/Objects/DynamicPatrolAreaParent.cs`

## Overview

DynamicPatrolAreaParent lives in the SandBox module, source file SandBox/Objects/DynamicPatrolAreaParent.cs. It is a public class, implementing/inheriting MissionObject; the inheritance chain is DynamicPatrolAreaParent → MissionObject. It exposes 3 public/protected members: 1 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DynamicPatrolAreaParent is a top-level type in SandBox, namespace differing from (SandBox.Objects) the module directory; inheritance chain DynamicPatrolAreaParent → MissionObject. The surface is method-led (methods 1/3, properties 0/3), so it mostly exposes operations. MissionObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/DynamicPatrolAreaParent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `DrawPath` | `public bool DrawPath` | field |
| `UniqueId` | `public int UniqueId` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheckpointArea](../CheckpointArea)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox)
- [same namespace GroupSpawnPoint](../GroupSpawnPoint)

---
title: "GroupSpawnPoint"
description: "GroupSpawnPoint: a public class in SandBox, inheriting UsablePlace; 3 exposed members (0 methods, 1 properties, 2 fields). Source: SandBox/Objects/GroupSpawnPoint.cs."
---
# GroupSpawnPoint

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class GroupSpawnPoint : UsablePlace`
**File:** `SandBox/Objects/GroupSpawnPoint.cs`

## Overview

GroupSpawnPoint lives in the SandBox module, source file SandBox/Objects/GroupSpawnPoint.cs. It is a public class, implementing/inheriting UsablePlace; the inheritance chain is GroupSpawnPoint → UsablePlace → UsableMachine. It exposes 3 public/protected members: 1 properties, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GroupSpawnPoint is a top-level type in SandBox, namespace differing from (SandBox.Objects) the module directory; inheritance chain GroupSpawnPoint → UsablePlace → UsableMachine. The surface is property-led (properties 1/3, methods 0/3), so it mostly exposes state for reading. UsableMachine on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/GroupSpawnPoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInstant` | `public bool IsInstant` | property |
| `Delay` | `public float Delay` | field |
| `SpawnCount` | `public int SpawnCount` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UsablePlace](../UsablePlace)
- [same namespace CheckpointArea](../CheckpointArea)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData)
- [same namespace DynamicPatrolAreaParent](../DynamicPatrolAreaParent)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox)

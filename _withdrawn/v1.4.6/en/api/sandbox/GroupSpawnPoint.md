---
title: "GroupSpawnPoint"
description: "GroupSpawnPoint: a public class in SandBox.Objects, inheriting UsablePlace; 3 exposed members (0 methods, 1 properties, 2 fields). Canonical bucket sandbox. Source: SandBox/Objects/GroupSpawnPoint.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GroupSpawnPoint

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class GroupSpawnPoint : UsablePlace`
**File:** `SandBox/Objects/GroupSpawnPoint.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GroupSpawnPoint lives in the SandBox module, source file SandBox/Objects/GroupSpawnPoint.cs. It is a public class, implementing/inheriting UsablePlace; the inheritance chain is GroupSpawnPoint → UsablePlace → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 3 public/protected members: 1 properties, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GroupSpawnPoint lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects`, inheritance chain GroupSpawnPoint → UsablePlace → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is property-led (properties 1/3, methods 0/3), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/GroupSpawnPoint.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsInstant` | `public bool IsInstant` | property |
| `Delay` | `public float Delay` | field |
| `SpawnCount` | `public int SpawnCount` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsablePlace](../UsablePlace/)
- [same namespace CheckpointArea](../CheckpointArea/)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData/)
- [same namespace DynamicPatrolAreaParent](../DynamicPatrolAreaParent/)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox/)

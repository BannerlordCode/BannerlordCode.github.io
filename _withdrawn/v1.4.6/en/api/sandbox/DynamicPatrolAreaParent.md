---
title: "DynamicPatrolAreaParent"
description: "DynamicPatrolAreaParent: a public class in SandBox.Objects, inheriting MissionObject; 3 exposed members (1 methods, 0 properties, 2 fields). Canonical bucket sandbox. Source: SandBox/Objects/DynamicPatrolAreaParent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DynamicPatrolAreaParent

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class DynamicPatrolAreaParent : MissionObject`
**File:** `SandBox/Objects/DynamicPatrolAreaParent.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

DynamicPatrolAreaParent lives in the SandBox module, source file SandBox/Objects/DynamicPatrolAreaParent.cs. It is a public class, implementing/inheriting MissionObject; the inheritance chain is DynamicPatrolAreaParent → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 3 public/protected members: 1 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DynamicPatrolAreaParent lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects`, inheritance chain DynamicPatrolAreaParent → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 1/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/DynamicPatrolAreaParent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `DrawPath` | `public bool DrawPath` | field |
| `UniqueId` | `public int UniqueId` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionObject](../../mission-ext/MissionObject/)
- [same namespace CheckpointArea](../CheckpointArea/)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData/)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox/)
- [same namespace GroupSpawnPoint](../GroupSpawnPoint/)

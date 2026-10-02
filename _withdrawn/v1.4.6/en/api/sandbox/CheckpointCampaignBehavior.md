---
title: "CheckpointCampaignBehavior"
description: "CheckpointCampaignBehavior: a public class in SandBox.CampaignBehaviors, inheriting CampaignBehaviorBase; 4 exposed members (2 methods, 0 properties, 2 fields). Canonical bucket sandbox. Source: SandBox/CampaignBehaviors/CheckpointCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CheckpointCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class CheckpointCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/CheckpointCampaignBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CheckpointCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/CheckpointCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is CheckpointCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 4 public/protected members: 2 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CheckpointCampaignBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.CampaignBehaviors`, inheritance chain CheckpointCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 2/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/CheckpointCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `LastUsedMissionCheckpointId` | `public int LastUsedMissionCheckpointId` | field |
| `List` | `public List<AgentSaveData>CorpseList` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior/)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior/)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior/)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior/)

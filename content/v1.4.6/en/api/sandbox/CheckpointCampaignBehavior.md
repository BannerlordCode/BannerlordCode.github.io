---
title: "CheckpointCampaignBehavior"
description: "CheckpointCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 4 exposed members (2 methods, 0 properties, 2 fields). Source: SandBox/CampaignBehaviors/CheckpointCampaignBehavior.cs."
---
# CheckpointCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class CheckpointCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/CheckpointCampaignBehavior.cs`

## Overview

CheckpointCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/CheckpointCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is CheckpointCampaignBehavior → CampaignBehaviorBase. It exposes 4 public/protected members: 2 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CheckpointCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain CheckpointCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 2/4, properties 0/4), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/CheckpointCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `LastUsedMissionCheckpointId` | `public int LastUsedMissionCheckpointId` | field |
| `List` | `public List<AgentSaveData>CorpseList` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)

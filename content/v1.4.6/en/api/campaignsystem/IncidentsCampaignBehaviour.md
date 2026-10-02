---
title: "IncidentsCampaignBehaviour"
description: "IncidentsCampaignBehaviour: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase, INonReadyObjectHandler; 6 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/IncidentsCampaignBehaviour.cs."
---
# IncidentsCampaignBehaviour

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class IncidentsCampaignBehaviour : CampaignBehaviorBase, INonReadyObjectHandler`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IncidentsCampaignBehaviour.cs`

## Overview

IncidentsCampaignBehaviour lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/IncidentsCampaignBehaviour.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, INonReadyObjectHandler; the inheritance chain is IncidentsCampaignBehaviour → CampaignBehaviorBase → ICampaignBehavior. It exposes 6 public/protected members: 2 methods, 2 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IncidentsCampaignBehaviour is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain IncidentsCampaignBehaviour → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 2/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/IncidentsCampaignBehaviour.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IncidentTrigger` | `public enum IncidentTrigger` | property |
| `IncidentType` | `public enum IncidentType` | property |
| `IncidentTrigger` | `public enum IncidentTrigger` | nested type |
| `IncidentType` | `public enum IncidentType` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface INonReadyObjectHandler](../INonReadyObjectHandler)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)

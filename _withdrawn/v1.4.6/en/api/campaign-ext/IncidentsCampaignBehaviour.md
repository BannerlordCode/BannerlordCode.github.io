---
title: "IncidentsCampaignBehaviour"
description: "IncidentsCampaignBehaviour: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting CampaignBehaviorBase, INonReadyObjectHandler; 6 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/IncidentsCampaignBehaviour.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IncidentsCampaignBehaviour

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class IncidentsCampaignBehaviour : CampaignBehaviorBase, INonReadyObjectHandler`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IncidentsCampaignBehaviour.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

IncidentsCampaignBehaviour lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/IncidentsCampaignBehaviour.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, INonReadyObjectHandler; the inheritance chain is IncidentsCampaignBehaviour → CampaignBehaviorBase → ICampaignBehavior. It exposes 6 public/protected members: 2 methods, 2 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IncidentsCampaignBehaviour lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain IncidentsCampaignBehaviour → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 2/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/IncidentsCampaignBehaviour.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IncidentTrigger` | `public enum IncidentTrigger` | property |
| `IncidentType` | `public enum IncidentType` | property |
| `IncidentTrigger` | `public enum IncidentTrigger` | nested type |
| `IncidentType` | `public enum IncidentType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface INonReadyObjectHandler](../INonReadyObjectHandler/)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)

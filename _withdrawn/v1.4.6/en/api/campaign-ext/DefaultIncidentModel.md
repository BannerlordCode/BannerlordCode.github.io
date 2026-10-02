---
title: "DefaultIncidentModel"
description: "DefaultIncidentModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting IncidentModel; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultIncidentModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultIncidentModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultIncidentModel : IncidentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultIncidentModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultIncidentModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultIncidentModel.cs. It is a public class, implementing/inheriting IncidentModel; the inheritance chain is DefaultIncidentModel → IncidentModel → MBGameModel → GameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultIncidentModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultIncidentModel → IncidentModel → MBGameModel → GameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultIncidentModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetMinGlobalCooldownTime` | `public override CampaignTime GetMinGlobalCooldownTime()` | method |
| `GetMaxGlobalCooldownTime` | `public override CampaignTime GetMaxGlobalCooldownTime()` | method |
| `GetIncidentTriggerGlobalProbability` | `public override float GetIncidentTriggerGlobalProbability()` | method |
| `GetIncidentTriggerProbabilityDuringSiege` | `public override float GetIncidentTriggerProbabilityDuringSiege()` | method |
| `GetIncidentTriggerProbabilityDuringWait` | `public override float GetIncidentTriggerProbabilityDuringWait()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IncidentModel](../IncidentModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)

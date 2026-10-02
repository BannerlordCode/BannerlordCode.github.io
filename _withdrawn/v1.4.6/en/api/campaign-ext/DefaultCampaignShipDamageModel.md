---
title: "DefaultCampaignShipDamageModel"
description: "DefaultCampaignShipDamageModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting CampaignShipDamageModel; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipDamageModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultCampaignShipDamageModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCampaignShipDamageModel : CampaignShipDamageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipDamageModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultCampaignShipDamageModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipDamageModel.cs. It is a public class, implementing/inheriting CampaignShipDamageModel; the inheritance chain is DefaultCampaignShipDamageModel → CampaignShipDamageModel → MBGameModel → GameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultCampaignShipDamageModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultCampaignShipDamageModel → CampaignShipDamageModel → MBGameModel → GameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipDamageModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetHourlyShipDamage` | `public override int GetHourlyShipDamage(MobileParty owner, Ship ship)` | method |
| `GetEstimatedSafeSailDuration` | `public override float GetEstimatedSafeSailDuration(MobileParty mobileParty)` | method |
| `GetShipDamage` | `public override float GetShipDamage(Ship ship, Ship rammingShip, float rawDamage)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CampaignShipDamageModel](../CampaignShipDamageModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)

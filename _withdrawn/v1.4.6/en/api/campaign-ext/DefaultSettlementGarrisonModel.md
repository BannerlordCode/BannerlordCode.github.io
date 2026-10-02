---
title: "DefaultSettlementGarrisonModel"
description: "DefaultSettlementGarrisonModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting SettlementGarrisonModel; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSettlementGarrisonModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultSettlementGarrisonModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs. It is a public class, implementing/inheriting SettlementGarrisonModel; the inheritance chain is DefaultSettlementGarrisonModel → SettlementGarrisonModel → MBGameModel → GameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementGarrisonModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultSettlementGarrisonModel → SettlementGarrisonModel → MBGameModel → GameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetMaximumDailyAutoRecruitmentCount` | `public override int GetMaximumDailyAutoRecruitmentCount(Town town)` | method |
| `CalculateBaseGarrisonChange` | `public override ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)` | method |
| `FindNumberOfTroopsToTakeFromGarrison` | `public override int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float defaultIdealGarrisonStrengthPerWalledCenter = 0f)` | method |
| `FindNumberOfTroopsToLeaveToGarrison` | `public override int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)` | method |
| `GetMaximumDailyRepairAmount` | `public override float GetMaximumDailyRepairAmount(Settlement settlement)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementGarrisonModel](../SettlementGarrisonModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)

---
title: "DefaultSettlementGarrisonModel"
description: "DefaultSettlementGarrisonModel: a public class in TaleWorlds.CampaignSystem, inheriting SettlementGarrisonModel; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs."
---
# DefaultSettlementGarrisonModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs`

## Overview

DefaultSettlementGarrisonModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs. It is a public class, implementing/inheriting SettlementGarrisonModel; the inheritance chain is DefaultSettlementGarrisonModel → SettlementGarrisonModel → MBGameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementGarrisonModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultSettlementGarrisonModel → SettlementGarrisonModel → MBGameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMaximumDailyAutoRecruitmentCount` | `public override int GetMaximumDailyAutoRecruitmentCount(Town town)` | method |
| `CalculateBaseGarrisonChange` | `public override ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)` | method |
| `FindNumberOfTroopsToTakeFromGarrison` | `public override int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float defaultIdealGarrisonStrengthPerWalledCenter = 0f)` | method |
| `FindNumberOfTroopsToLeaveToGarrison` | `public override int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)` | method |
| `GetMaximumDailyRepairAmount` | `public override float GetMaximumDailyRepairAmount(Settlement settlement)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SettlementGarrisonModel](../SettlementGarrisonModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)

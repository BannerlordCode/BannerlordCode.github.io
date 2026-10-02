---
title: "SettlementGarrisonModel"
description: "SettlementGarrisonModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<SettlementGarrisonModel>; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementGarrisonModel.cs."
---
# SettlementGarrisonModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementGarrisonModel : MBGameModel<SettlementGarrisonModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementGarrisonModel.cs`

## Overview

SettlementGarrisonModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementGarrisonModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementGarrisonModel>; the inheritance chain is SettlementGarrisonModel → MBGameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementGarrisonModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain SettlementGarrisonModel → MBGameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementGarrisonModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMaximumDailyAutoRecruitmentCount` | `public abstract int GetMaximumDailyAutoRecruitmentCount(Town town);` | method |
| `CalculateBaseGarrisonChange` | `public abstract ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false);` | method |
| `FindNumberOfTroopsToTakeFromGarrison` | `public abstract int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float idealGarrisonStrengthPerWalledCenter = 0f);` | method |
| `FindNumberOfTroopsToLeaveToGarrison` | `public abstract int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement);` | method |
| `GetMaximumDailyRepairAmount` | `public abstract float GetMaximumDailyRepairAmount(Settlement settlement);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)

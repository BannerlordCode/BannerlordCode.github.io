---
title: "DefaultDailyTroopXpBonusModel"
description: "DefaultDailyTroopXpBonusModel: a public class in TaleWorlds.CampaignSystem, inheriting DailyTroopXpBonusModel; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs."
---
# DefaultDailyTroopXpBonusModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultDailyTroopXpBonusModel : DailyTroopXpBonusModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs`

## Overview

DefaultDailyTroopXpBonusModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs. It is a public class, implementing/inheriting DailyTroopXpBonusModel; the inheritance chain is DefaultDailyTroopXpBonusModel → DailyTroopXpBonusModel → MBGameModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultDailyTroopXpBonusModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultDailyTroopXpBonusModel → DailyTroopXpBonusModel → MBGameModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateDailyTroopXpBonus` | `public override int CalculateDailyTroopXpBonus(Town town)` | method |
| `CalculateGarrisonXpBonusMultiplier` | `public override float CalculateGarrisonXpBonusMultiplier(Town town)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface DailyTroopXpBonusModel](../DailyTroopXpBonusModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)

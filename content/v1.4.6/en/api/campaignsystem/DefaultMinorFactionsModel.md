---
title: "DefaultMinorFactionsModel"
description: "DefaultMinorFactionsModel: a public class in TaleWorlds.CampaignSystem, inheriting MinorFactionsModel; 3 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMinorFactionsModel.cs."
---
# DefaultMinorFactionsModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMinorFactionsModel : MinorFactionsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMinorFactionsModel.cs`

## Overview

DefaultMinorFactionsModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMinorFactionsModel.cs. It is a public class, implementing/inheriting MinorFactionsModel; the inheritance chain is DefaultMinorFactionsModel → MinorFactionsModel → MBGameModel. It exposes 3 public/protected members: 1 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMinorFactionsModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultMinorFactionsModel → MinorFactionsModel → MBGameModel. The surface is property-led (properties 2/3, methods 1/3), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMinorFactionsModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DailyMinorFactionHeroSpawnChance` | `public override float DailyMinorFactionHeroSpawnChance` | property |
| `MinorFactionHeroLimit` | `public override int MinorFactionHeroLimit` | property |
| `GetMercenaryAwardFactorToJoinKingdom` | `public override int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MinorFactionsModel](../MinorFactionsModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)

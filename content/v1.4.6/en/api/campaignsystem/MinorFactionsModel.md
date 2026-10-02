---
title: "MinorFactionsModel"
description: "MinorFactionsModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<MinorFactionsModel>; 3 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs."
---
# MinorFactionsModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MinorFactionsModel : MBGameModel<MinorFactionsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs`

## Overview

MinorFactionsModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MinorFactionsModel>; the inheritance chain is MinorFactionsModel → MBGameModel. It exposes 3 public/protected members: 1 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MinorFactionsModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain MinorFactionsModel → MBGameModel. The surface is property-led (properties 2/3, methods 1/3), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DailyMinorFactionHeroSpawnChance` | `public abstract float DailyMinorFactionHeroSpawnChance` | property |
| `MinorFactionHeroLimit` | `public abstract int MinorFactionHeroLimit` | property |
| `GetMercenaryAwardFactorToJoinKingdom` | `public abstract int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)

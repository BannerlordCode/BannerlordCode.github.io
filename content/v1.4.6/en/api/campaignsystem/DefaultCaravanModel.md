---
title: "DefaultCaravanModel"
description: "DefaultCaravanModel: a public class in TaleWorlds.CampaignSystem, inheriting CaravanModel; 7 exposed members (6 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs."
---
# DefaultCaravanModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCaravanModel : CaravanModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs`

## Overview

DefaultCaravanModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs. It is a public class, implementing/inheriting CaravanModel; the inheritance chain is DefaultCaravanModel → CaravanModel → MBGameModel. It exposes 7 public/protected members: 6 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultCaravanModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultCaravanModel → CaravanModel → MBGameModel. The surface is method-led (methods 6/7, properties 1/7), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public override int MaxNumberOfItemsToBuyFromSingleCategory` | property |
| `GetEliteCaravanSpawnChance` | `public override float GetEliteCaravanSpawnChance(Hero hero)` | method |
| `GetPowerChangeAfterCaravanCreation` | `public override int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)` | method |
| `CanHeroCreateCaravan` | `public override bool CanHeroCreateCaravan(Hero hero)` | method |
| `GetCaravanFormingCost` | `public override int GetCaravanFormingCost(bool largerCaravan, bool navalCaravan)` | method |
| `GetInitialTradeGold` | `public override int GetInitialTradeGold(Hero owner, bool navalCaravan, bool largeCaravan)` | method |
| `GetMaxGoldToSpendOnOneItemCategory` | `public override int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CaravanModel](../CaravanModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)

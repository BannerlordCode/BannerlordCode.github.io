---
title: "CaravanModel"
description: "CaravanModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<CaravanModel>; 7 exposed members (6 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs."
---
# CaravanModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CaravanModel : MBGameModel<CaravanModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs`

## Overview

CaravanModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<CaravanModel>; the inheritance chain is CaravanModel → MBGameModel. It exposes 7 public/protected members: 6 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CaravanModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain CaravanModel → MBGameModel. The surface is method-led (methods 6/7, properties 1/7), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public abstract int MaxNumberOfItemsToBuyFromSingleCategory` | property |
| `GetMaxGoldToSpendOnOneItemCategory` | `public abstract int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory);` | method |
| `GetInitialTradeGold` | `public abstract int GetInitialTradeGold(Hero owner, bool isNavalCaravan, bool eliteCaravan);` | method |
| `GetCaravanFormingCost` | `public abstract int GetCaravanFormingCost(bool eliteCaravan, bool navalCaravan);` | method |
| `GetPowerChangeAfterCaravanCreation` | `public abstract int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty);` | method |
| `CanHeroCreateCaravan` | `public abstract bool CanHeroCreateCaravan(Hero hero);` | method |
| `GetEliteCaravanSpawnChance` | `public abstract float GetEliteCaravanSpawnChance(Hero hero);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)

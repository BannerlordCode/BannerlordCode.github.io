---
title: "CaravanModel"
description: "CaravanModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<CaravanModel>; 7 exposed members (6 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CaravanModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CaravanModel : MBGameModel<CaravanModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

CaravanModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<CaravanModel>; the inheritance chain is CaravanModel → MBGameModel → GameModel. It exposes 7 public/protected members: 6 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CaravanModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain CaravanModel → MBGameModel → GameModel. The surface is method-led (methods 6/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public abstract int MaxNumberOfItemsToBuyFromSingleCategory` | property |
| `GetMaxGoldToSpendOnOneItemCategory` | `public abstract int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory);` | method |
| `GetInitialTradeGold` | `public abstract int GetInitialTradeGold(Hero owner, bool isNavalCaravan, bool eliteCaravan);` | method |
| `GetCaravanFormingCost` | `public abstract int GetCaravanFormingCost(bool eliteCaravan, bool navalCaravan);` | method |
| `GetPowerChangeAfterCaravanCreation` | `public abstract int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty);` | method |
| `CanHeroCreateCaravan` | `public abstract bool CanHeroCreateCaravan(Hero hero);` | method |
| `GetEliteCaravanSpawnChance` | `public abstract float GetEliteCaravanSpawnChance(Hero hero);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)

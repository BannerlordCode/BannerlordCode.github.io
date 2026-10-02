---
title: "DefaultCaravanModel"
description: "DefaultCaravanModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting CaravanModel; 7 exposed members (6 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultCaravanModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCaravanModel : CaravanModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultCaravanModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs. It is a public class, implementing/inheriting CaravanModel; the inheritance chain is DefaultCaravanModel → CaravanModel → MBGameModel → GameModel. It exposes 7 public/protected members: 6 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultCaravanModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultCaravanModel → CaravanModel → MBGameModel → GameModel. The surface is method-led (methods 6/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public override int MaxNumberOfItemsToBuyFromSingleCategory` | property |
| `GetEliteCaravanSpawnChance` | `public override float GetEliteCaravanSpawnChance(Hero hero)` | method |
| `GetPowerChangeAfterCaravanCreation` | `public override int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)` | method |
| `CanHeroCreateCaravan` | `public override bool CanHeroCreateCaravan(Hero hero)` | method |
| `GetCaravanFormingCost` | `public override int GetCaravanFormingCost(bool largerCaravan, bool navalCaravan)` | method |
| `GetInitialTradeGold` | `public override int GetInitialTradeGold(Hero owner, bool navalCaravan, bool largeCaravan)` | method |
| `GetMaxGoldToSpendOnOneItemCategory` | `public override int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CaravanModel](../CaravanModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)

---
title: "DefaultSmithingModel"
description: "DefaultSmithingModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting SmithingModel; 17 exposed members (17 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSmithingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSmithingModel : SmithingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultSmithingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs. It is a public class, implementing/inheriting SmithingModel; the inheritance chain is DefaultSmithingModel → SmithingModel → MBGameModel → GameModel. It exposes 17 public/protected members: 17 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSmithingModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultSmithingModel → SmithingModel → MBGameModel → GameModel. The surface is method-led (methods 17/17, properties 0/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetCraftingPartDifficulty` | `public override int GetCraftingPartDifficulty(CraftingPiece craftingPiece)` | method |
| `CalculateWeaponDesignDifficulty` | `public override int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)` | method |
| `GetCraftedWeaponModifier` | `public override ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero hero)` | method |
| `IEnumerable` | `public override IEnumerable<Crafting.RefiningFormula>GetRefiningFormulas(Hero weaponsmith)` | method |
| `GetSkillXpForRefining` | `public override int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)` | method |
| `GetSkillXpForSmelting` | `public override int GetSkillXpForSmelting(ItemObject item)` | method |
| `GetSkillXpForSmithingInFreeBuildMode` | `public override int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)` | method |
| `GetSkillXpForSmithingInCraftingOrderMode` | `public override int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)` | method |
| `GetEnergyCostForRefining` | `public override int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)` | method |
| `GetEnergyCostForSmithing` | `public override int GetEnergyCostForSmithing(ItemObject item, Hero hero)` | method |
| `GetEnergyCostForSmelting` | `public override int GetEnergyCostForSmelting(ItemObject item, Hero hero)` | method |
| `GetCraftingMaterialItem` | `public override ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)` | method |
| `int[]GetSmeltingOutputForItem` | `public override int[]GetSmeltingOutputForItem(ItemObject item)` | method |
| `int[]GetSmithingCostsForWeaponDesign` | `public override int[]GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)` | method |
| `ResearchPointsNeedForNewPart` | `public override float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)` | method |
| `GetPartResearchGainForSmeltingItem` | `public override int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)` | method |
| `GetPartResearchGainForSmithingItem` | `public override int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuild)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SmithingModel](../SmithingModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)

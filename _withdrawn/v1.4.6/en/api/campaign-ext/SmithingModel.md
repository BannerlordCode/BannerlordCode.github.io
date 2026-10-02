---
title: "SmithingModel"
description: "SmithingModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<SmithingModel>; 17 exposed members (17 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SmithingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SmithingModel : MBGameModel<SmithingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

SmithingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SmithingModel>; the inheritance chain is SmithingModel → MBGameModel → GameModel. It exposes 17 public/protected members: 17 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SmithingModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain SmithingModel → MBGameModel → GameModel. The surface is method-led (methods 17/17, properties 0/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetCraftingPartDifficulty` | `public abstract int GetCraftingPartDifficulty(CraftingPiece craftingPiece);` | method |
| `CalculateWeaponDesignDifficulty` | `public abstract int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign);` | method |
| `GetCraftedWeaponModifier` | `public abstract ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero weaponsmith);` | method |
| `IEnumerable` | `public abstract IEnumerable<Crafting.RefiningFormula>GetRefiningFormulas(Hero weaponsmith);` | method |
| `GetCraftingMaterialItem` | `public abstract ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial);` | method |
| `int[]GetSmeltingOutputForItem` | `public abstract int[]GetSmeltingOutputForItem(ItemObject item);` | method |
| `GetSkillXpForRefining` | `public abstract int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula);` | method |
| `GetSkillXpForSmelting` | `public abstract int GetSkillXpForSmelting(ItemObject item);` | method |
| `GetSkillXpForSmithingInFreeBuildMode` | `public abstract int GetSkillXpForSmithingInFreeBuildMode(ItemObject item);` | method |
| `GetSkillXpForSmithingInCraftingOrderMode` | `public abstract int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item);` | method |
| `int[]GetSmithingCostsForWeaponDesign` | `public abstract int[]GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign);` | method |
| `GetEnergyCostForRefining` | `public abstract int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero);` | method |
| `GetEnergyCostForSmithing` | `public abstract int GetEnergyCostForSmithing(ItemObject item, Hero hero);` | method |
| `GetEnergyCostForSmelting` | `public abstract int GetEnergyCostForSmelting(ItemObject item, Hero hero);` | method |
| `ResearchPointsNeedForNewPart` | `public abstract float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount);` | method |
| `GetPartResearchGainForSmeltingItem` | `public abstract int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero);` | method |
| `GetPartResearchGainForSmithingItem` | `public abstract int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuildMode);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)

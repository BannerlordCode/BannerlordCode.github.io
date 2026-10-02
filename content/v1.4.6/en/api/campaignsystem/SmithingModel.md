---
title: "SmithingModel"
description: "SmithingModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<SmithingModel>; 17 exposed members (17 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs."
---
# SmithingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SmithingModel : MBGameModel<SmithingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs`

## Overview

SmithingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SmithingModel>; the inheritance chain is SmithingModel → MBGameModel. It exposes 17 public/protected members: 17 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SmithingModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain SmithingModel → MBGameModel. The surface is method-led (methods 17/17, properties 0/17), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)

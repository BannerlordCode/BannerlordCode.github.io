---
title: "ICraftingCampaignBehavior"
description: "ICraftingCampaignBehavior: a public interface in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting ICampaignBehavior; 20 exposed members (18 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/ICraftingCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICraftingCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ICraftingCampaignBehavior : ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/ICraftingCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

ICraftingCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/ICraftingCampaignBehavior.cs. It is a public interface, implementing/inheriting ICampaignBehavior; the inheritance chain is ICraftingCampaignBehavior → ICampaignBehavior. It exposes 20 public/protected members: 18 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICraftingCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain ICraftingCampaignBehavior → ICampaignBehavior. The surface is method-led (methods 18/20, properties 2/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/ICraftingCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CraftingCampaignBehavior.CraftingOrderSlots>CraftingOrders` | `IReadOnlyDictionary<Town, CraftingCampaignBehavior.CraftingOrderSlots>CraftingOrders` | property |
| `IReadOnlyCollection` | `IReadOnlyCollection<WeaponDesign>CraftingHistory` | property |
| `CompleteOrder` | `void CompleteOrder(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero);` | method |
| `GetCurrentItemModifier` | `ItemModifier GetCurrentItemModifier();` | method |
| `SetCurrentItemModifier` | `void SetCurrentItemModifier(ItemModifier modifier);` | method |
| `SetCraftedWeaponName` | `void SetCraftedWeaponName(ItemObject craftedWeaponItem, TextObject name);` | method |
| `GetOrderResult` | `void GetOrderResult(CraftingOrder craftingOrder, ItemObject craftedItem, out bool isSucceed, out TextObject orderRemark, out TextObject orderResult, out int finalPrice);` | method |
| `GetCraftingDifficulty` | `int GetCraftingDifficulty(WeaponDesign weaponDesign);` | method |
| `GetHeroCraftingStamina` | `int GetHeroCraftingStamina(Hero hero);` | method |
| `SetHeroCraftingStamina` | `void SetHeroCraftingStamina(Hero hero, int value);` | method |
| `GetMaxHeroCraftingStamina` | `int GetMaxHeroCraftingStamina(Hero hero);` | method |
| `DoRefinement` | `void DoRefinement(Hero hero, Crafting.RefiningFormula refineFormula);` | method |
| `DoSmelting` | `void DoSmelting(Hero currentCraftingHero, EquipmentElement equipmentElement);` | method |
| `CreateCraftedWeaponInFreeBuildMode` | `ItemObject CreateCraftedWeaponInFreeBuildMode(Hero hero, WeaponDesign weaponDesign, ItemModifier weaponModifier = null);` | method |
| `CreateCraftedWeaponInCraftingOrderMode` | `ItemObject CreateCraftedWeaponInCraftingOrderMode(Hero crafterHero, CraftingOrder craftingOrder, WeaponDesign weaponDesign);` | method |
| `IsOpened` | `bool IsOpened(CraftingPiece craftingPiece, CraftingTemplate craftingTemplate);` | method |
| `CreateCustomOrderForHero` | `CraftingOrder CreateCustomOrderForHero(Hero orderOwner, float orderDifficulty = -1f, WeaponDesign weaponDesign = null, CraftingTemplate craftingTemplate = null);` | method |
| `CancelCustomOrder` | `void CancelCustomOrder(Town town, CraftingOrder craftingOrder);` | method |
| `GetActiveCraftingHero` | `Hero GetActiveCraftingHero();` | method |
| `SetActiveCraftingHero` | `void SetActiveCraftingHero(Hero hero);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ICampaignBehavior](../../campaign/ICampaignBehavior/)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)

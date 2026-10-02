---
title: "CraftingCampaignBehavior"
description: "CraftingCampaignBehavior: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting CampaignBehaviorBase, ICraftingCampaignBehavior; 28 exposed members (22 methods, 4 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CraftingCampaignBehavior : CampaignBehaviorBase, ICraftingCampaignBehavior, ICampaignBehavior, INonReadyObjectHandler`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

CraftingCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, ICraftingCampaignBehavior, ICampaignBehavior, INonReadyObjectHandler; the inheritance chain is CraftingCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 28 public/protected members: 22 methods, 4 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain CraftingCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 22/28, properties 4/28), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CraftingCampaignBehavior.CraftingOrderSlots>CraftingOrders` | `public IReadOnlyDictionary<Town, CraftingCampaignBehavior.CraftingOrderSlots>CraftingOrders` | property |
| `IReadOnlyCollection` | `public IReadOnlyCollection<WeaponDesign>CraftingHistory` | property |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `IsOpened` | `public bool IsOpened(CraftingPiece craftingPiece, CraftingTemplate craftingTemplate)` | method |
| `GetCraftingDifficulty` | `public int GetCraftingDifficulty(WeaponDesign weaponDesign)` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `GetHeroCraftingStamina` | `public int GetHeroCraftingStamina(Hero hero)` | method |
| `SetHeroCraftingStamina` | `public void SetHeroCraftingStamina(Hero hero, int value)` | method |
| `SetCraftedWeaponName` | `public void SetCraftedWeaponName(ItemObject craftedWeaponItem, TextObject name)` | method |
| `GetMaxHeroCraftingStamina` | `public int GetMaxHeroCraftingStamina(Hero hero)` | method |
| `DoRefinement` | `public void DoRefinement(Hero hero, Crafting.RefiningFormula refineFormula)` | method |
| `DoSmelting` | `public void DoSmelting(Hero currentCraftingHero, EquipmentElement equipmentElement)` | method |
| `CreateCraftedWeaponInFreeBuildMode` | `public ItemObject CreateCraftedWeaponInFreeBuildMode(Hero hero, WeaponDesign weaponDesign, ItemModifier weaponModifier = null)` | method |
| `CreateCraftedWeaponInCraftingOrderMode` | `public ItemObject CreateCraftedWeaponInCraftingOrderMode(Hero crafterHero, CraftingOrder craftingOrder, WeaponDesign weaponDesign)` | method |
| `GetActiveCraftingHero` | `public Hero GetActiveCraftingHero()` | method |
| `SetActiveCraftingHero` | `public void SetActiveCraftingHero(Hero hero)` | method |
| `CreateTownOrder` | `public void CreateTownOrder(Hero orderOwner, int orderSlot)` | method |
| `CreateCustomOrderForHero` | `public CraftingOrder CreateCustomOrderForHero(Hero orderOwner, float orderDifficulty = -1f, WeaponDesign weaponDesign = null, CraftingTemplate craftingTemplate = null)` | method |
| `GetOrderResult` | `public void GetOrderResult(CraftingOrder craftingOrder, ItemObject craftedItem, out bool isSucceed, out TextObject orderRemark, out TextObject orderResult, out int finalReward)` | method |
| `CompleteOrder` | `public void CompleteOrder(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)` | method |
| `GetCurrentItemModifier` | `public ItemModifier GetCurrentItemModifier()` | method |
| `SetCurrentItemModifier` | `public void SetCurrentItemModifier(ItemModifier modifier)` | method |
| `CancelCustomOrder` | `public void CancelCustomOrder(Town town, CraftingOrder craftingOrder)` | method |
| `SaveableTypeDefiner` | `public class CraftingCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `CraftingOrderSlots` | `public class CraftingOrderSlots` | property |
| `SaveableTypeDefiner` | `public class CraftingCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |
| `CraftingOrderSlots` | `public class CraftingOrderSlots` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ICraftingCampaignBehavior](../ICraftingCampaignBehavior/)
- [base / interface ICampaignBehavior](../../campaign/ICampaignBehavior/)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)

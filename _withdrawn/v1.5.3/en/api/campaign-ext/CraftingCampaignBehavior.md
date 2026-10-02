---
title: "CraftingCampaignBehavior"
description: "Auto-generated class reference for CraftingCampaignBehavior."
---
# CraftingCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingCampaignBehavior : CampaignBehaviorBase,ICraftingCampaignBehavior,ICampaignBehavior,INonReadyObjectHandler `
**Base:** CampaignBehaviorBase, ICraftingCampaignBehavior, ICampaignBehavior, INonReadyObjectHandler
**Source:** TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs

## Overview

Auto-generated stub for `CraftingCampaignBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SyncData
`public override void SyncData(IDataStore dataStore)`

### RegisterEvents
`public override void RegisterEvents()`

### IsOpened
`public bool IsOpened(CraftingPiece craftingPiece,CraftingTemplate craftingTemplate)`

### GetCraftingDifficulty
`public int GetCraftingDifficulty(WeaponDesign weaponDesign)`

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

### GetHeroCraftingStamina
`public int GetHeroCraftingStamina(Hero hero)`

### SetHeroCraftingStamina
`public void SetHeroCraftingStamina(Hero hero,int value)`

### SetCraftedWeaponName
`public void SetCraftedWeaponName(ItemObject craftedWeaponItem,TextObject name)`

### GetMaxHeroCraftingStamina
`public int GetMaxHeroCraftingStamina(Hero hero)`

### DoRefinement
`public void DoRefinement(Hero hero,Crafting.RefiningFormula refineFormula)`

### DoSmelting
`public void DoSmelting(Hero currentCraftingHero,EquipmentElement equipmentElement)`

### CreateCraftedWeaponInFreeBuildMode
`public ItemObject CreateCraftedWeaponInFreeBuildMode(Hero hero,WeaponDesign weaponDesign,ItemModifier weaponModifier = null)`

### CreateCraftedWeaponInCraftingOrderMode
`public ItemObject CreateCraftedWeaponInCraftingOrderMode(Hero crafterHero,CraftingOrder craftingOrder,WeaponDesign weaponDesign)`

### GetActiveCraftingHero
`public Hero GetActiveCraftingHero()`

### SetActiveCraftingHero
`public void SetActiveCraftingHero(Hero hero)`

### CreateTownOrder
`public void CreateTownOrder(Hero orderOwner,int orderSlot)`

### CreateCustomOrderForHero
`public CraftingOrder CreateCustomOrderForHero(Hero orderOwner,float orderDifficulty = -1f,WeaponDesign weaponDesign = null,CraftingTemplate craftingTemplate = null)`

### GetOrderResult
`public void GetOrderResult(CraftingOrder craftingOrder,ItemObject craftedItem,out bool isSucceed,out TextObject orderRemark,out TextObject orderResult,out int finalReward)`

### CompleteOrder
`public void CompleteOrder(Town town,CraftingOrder craftingOrder,ItemObject craftedItem,Hero completerHero)`

### GetCurrentItemModifier
`public ItemModifier GetCurrentItemModifier()`

### SetCurrentItemModifier
`public void SetCurrentItemModifier(ItemModifier modifier)`

### CancelCustomOrder
`public void CancelCustomOrder(Town town,CraftingOrder craftingOrder)`

## See Also

- [Section index](../)

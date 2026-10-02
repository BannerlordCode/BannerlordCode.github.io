---
title: "CraftingCampaignBehavior"
description: "CraftingCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase、ICraftingCampaignBehavior；公开成员 28 个（方法 22、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs。"
---
# CraftingCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CraftingCampaignBehavior : CampaignBehaviorBase, ICraftingCampaignBehavior, ICampaignBehavior, INonReadyObjectHandler`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs`

## 概述

CraftingCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、ICraftingCampaignBehavior、ICampaignBehavior、INonReadyObjectHandler，继承链为 CraftingCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 28 个：22 方法、4 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CraftingCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 CraftingCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 22/28，属性 4/28），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingCampaignBehavior.CraftingOrderSlots>CraftingOrders` | `public IReadOnlyDictionary<Town, CraftingCampaignBehavior.CraftingOrderSlots>CraftingOrders` | 属性 |
| `IReadOnlyCollection` | `public IReadOnlyCollection<WeaponDesign>CraftingHistory` | 属性 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `IsOpened` | `public bool IsOpened(CraftingPiece craftingPiece, CraftingTemplate craftingTemplate)` | 方法 |
| `GetCraftingDifficulty` | `public int GetCraftingDifficulty(WeaponDesign weaponDesign)` | 方法 |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | 方法 |
| `GetHeroCraftingStamina` | `public int GetHeroCraftingStamina(Hero hero)` | 方法 |
| `SetHeroCraftingStamina` | `public void SetHeroCraftingStamina(Hero hero, int value)` | 方法 |
| `SetCraftedWeaponName` | `public void SetCraftedWeaponName(ItemObject craftedWeaponItem, TextObject name)` | 方法 |
| `GetMaxHeroCraftingStamina` | `public int GetMaxHeroCraftingStamina(Hero hero)` | 方法 |
| `DoRefinement` | `public void DoRefinement(Hero hero, Crafting.RefiningFormula refineFormula)` | 方法 |
| `DoSmelting` | `public void DoSmelting(Hero currentCraftingHero, EquipmentElement equipmentElement)` | 方法 |
| `CreateCraftedWeaponInFreeBuildMode` | `public ItemObject CreateCraftedWeaponInFreeBuildMode(Hero hero, WeaponDesign weaponDesign, ItemModifier weaponModifier = null)` | 方法 |
| `CreateCraftedWeaponInCraftingOrderMode` | `public ItemObject CreateCraftedWeaponInCraftingOrderMode(Hero crafterHero, CraftingOrder craftingOrder, WeaponDesign weaponDesign)` | 方法 |
| `GetActiveCraftingHero` | `public Hero GetActiveCraftingHero()` | 方法 |
| `SetActiveCraftingHero` | `public void SetActiveCraftingHero(Hero hero)` | 方法 |
| `CreateTownOrder` | `public void CreateTownOrder(Hero orderOwner, int orderSlot)` | 方法 |
| `CreateCustomOrderForHero` | `public CraftingOrder CreateCustomOrderForHero(Hero orderOwner, float orderDifficulty = -1f, WeaponDesign weaponDesign = null, CraftingTemplate craftingTemplate = null)` | 方法 |
| `GetOrderResult` | `public void GetOrderResult(CraftingOrder craftingOrder, ItemObject craftedItem, out bool isSucceed, out TextObject orderRemark, out TextObject orderResult, out int finalReward)` | 方法 |
| `CompleteOrder` | `public void CompleteOrder(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)` | 方法 |
| `GetCurrentItemModifier` | `public ItemModifier GetCurrentItemModifier()` | 方法 |
| `SetCurrentItemModifier` | `public void SetCurrentItemModifier(ItemModifier modifier)` | 方法 |
| `CancelCustomOrder` | `public void CancelCustomOrder(Town town, CraftingOrder craftingOrder)` | 方法 |
| `SaveableTypeDefiner` | `public class CraftingCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 属性 |
| `CraftingOrderSlots` | `public class CraftingOrderSlots` | 属性 |
| `SaveableTypeDefiner` | `public class CraftingCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |
| `CraftingOrderSlots` | `public class CraftingOrderSlots` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ICraftingCampaignBehavior](../ICraftingCampaignBehavior)
- [基类/接口 ICampaignBehavior](../ICampaignBehavior)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)

---
title: "CraftingCampaignBehaviorTypeDefiner"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingCampaignBehaviorTypeDefiner`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingCampaignBehaviorTypeDefiner

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class CraftingCampaignBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**领域:** campaign-ext

## 概述

`CraftingCampaignBehaviorTypeDefiner` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CraftingOrders` | `public IReadOnlyDictionary<Town, CraftingCampaignBehavior.CraftingOrderSlots> CraftingOrders { get; }` |
| `CraftingHistory` | `public IReadOnlyCollection<WeaponDesign> CraftingHistory { get; }` |
| `CustomOrders` | `public MBReadOnlyList<CraftingOrder> CustomOrders { get; }` |

## 主要方法

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### IsOpened
`public bool IsOpened(CraftingPiece craftingPiece, CraftingTemplate craftingTemplate)`

**用途 / Purpose:** 处理 `is opened` 相关逻辑。

### GetCraftingDifficulty
`public int GetCraftingDifficulty(WeaponDesign weaponDesign)`

**用途 / Purpose:** 获取 `crafting difficulty` 的当前值。

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `session launched` 事件触发时调用此方法。

### GetHeroCraftingStamina
`public int GetHeroCraftingStamina(Hero hero)`

**用途 / Purpose:** 获取 `hero crafting stamina` 的当前值。

### SetHeroCraftingStamina
`public void SetHeroCraftingStamina(Hero hero, int value)`

**用途 / Purpose:** 设置 `hero crafting stamina` 的值或状态。

### SetCraftedWeaponName
`public void SetCraftedWeaponName(ItemObject craftedWeaponItem, TextObject name)`

**用途 / Purpose:** 设置 `crafted weapon name` 的值或状态。

### GetMaxHeroCraftingStamina
`public int GetMaxHeroCraftingStamina(Hero hero)`

**用途 / Purpose:** 获取 `max hero crafting stamina` 的当前值。

### DoRefinement
`public void DoRefinement(Hero hero, Crafting.RefiningFormula refineFormula)`

**用途 / Purpose:** 处理 `do refinement` 相关逻辑。

### DoSmelting
`public void DoSmelting(Hero currentCraftingHero, EquipmentElement equipmentElement)`

**用途 / Purpose:** 处理 `do smelting` 相关逻辑。

### CreateCraftedWeaponInFreeBuildMode
`public ItemObject CreateCraftedWeaponInFreeBuildMode(Hero hero, WeaponDesign weaponDesign, ItemModifier weaponModifier = null)`

**用途 / Purpose:** 创建一个 `crafted weapon in free build mode` 实例或对象。

### CreateCraftedWeaponInCraftingOrderMode
`public ItemObject CreateCraftedWeaponInCraftingOrderMode(Hero crafterHero, CraftingOrder craftingOrder, WeaponDesign weaponDesign)`

**用途 / Purpose:** 创建一个 `crafted weapon in crafting order mode` 实例或对象。

### GetActiveCraftingHero
`public Hero GetActiveCraftingHero()`

**用途 / Purpose:** 获取 `active crafting hero` 的当前值。

### SetActiveCraftingHero
`public void SetActiveCraftingHero(Hero hero)`

**用途 / Purpose:** 设置 `active crafting hero` 的值或状态。

### CreateTownOrder
`public void CreateTownOrder(Hero orderOwner, int orderSlot)`

**用途 / Purpose:** 创建一个 `town order` 实例或对象。

### CreateCustomOrderForHero
`public CraftingOrder CreateCustomOrderForHero(Hero orderOwner, float orderDifficulty = -1f, WeaponDesign weaponDesign = null, CraftingTemplate craftingTemplate = null)`

**用途 / Purpose:** 创建一个 `custom order for hero` 实例或对象。

### GetOrderResult
`public void GetOrderResult(CraftingOrder craftingOrder, ItemObject craftedItem, out bool isSucceed, out TextObject orderRemark, out TextObject orderResult, out int finalReward)`

**用途 / Purpose:** 获取 `order result` 的当前值。

### CompleteOrder
`public void CompleteOrder(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)`

**用途 / Purpose:** 处理 `complete order` 相关逻辑。

### GetCurrentItemModifier
`public ItemModifier GetCurrentItemModifier()`

**用途 / Purpose:** 获取 `current item modifier` 的当前值。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 CraftingCampaignBehaviorTypeDefiner 实例，再调用它的公开方法
var value = new CraftingCampaignBehaviorTypeDefiner();
value.SyncData(dataStore);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)

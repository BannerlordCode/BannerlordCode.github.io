---
title: "CraftingCampaignBehavior"
description: "CraftingCampaignBehavior 的自动生成类参考。"
---
# CraftingCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingCampaignBehavior : CampaignBehaviorBase, ICraftingCampaignBehavior, ICampaignBehavior, INonReadyObjectHandler`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs`

## 概述

`CraftingCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.RegisterEvents();
```

### IsOpened
`public bool IsOpened(CraftingPiece craftingPiece, CraftingTemplate craftingTemplate)`

**用途 / Purpose:** 判断当前对象是否处于 「opened」 状态或条件。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.IsOpened(craftingPiece, craftingTemplate);
```

### GetCraftingDifficulty
`public int GetCraftingDifficulty(WeaponDesign weaponDesign)`

**用途 / Purpose:** 读取并返回当前对象中 「crafting difficulty」 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.GetCraftingDifficulty(weaponDesign);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 在 「session launched」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### CanHeroUsePart
`public bool CanHeroUsePart(Hero hero, CraftingPiece craftingPiece)`

**用途 / Purpose:** 检查当前对象是否满足 「hero use part」 的前置条件。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.CanHeroUsePart(hero, craftingPiece);
```

### GetHeroCraftingStamina
`public int GetHeroCraftingStamina(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「hero crafting stamina」 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.GetHeroCraftingStamina(hero);
```

### SetHeroCraftingStamina
`public void SetHeroCraftingStamina(Hero hero, int value)`

**用途 / Purpose:** 为 「hero crafting stamina」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.SetHeroCraftingStamina(hero, 0);
```

### SetCraftedWeaponName
`public void SetCraftedWeaponName(ItemObject craftedWeaponItem, TextObject name)`

**用途 / Purpose:** 为 「crafted weapon name」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.SetCraftedWeaponName(craftedWeaponItem, name);
```

### GetMaxHeroCraftingStamina
`public int GetMaxHeroCraftingStamina(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「max hero crafting stamina」 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.GetMaxHeroCraftingStamina(hero);
```

### DoRefinement
`public void DoRefinement(Hero hero, Crafting.RefiningFormula refineFormula)`

**用途 / Purpose:** 处理与 「do refinement」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.DoRefinement(hero, refineFormula);
```

### DoSmelting
`public void DoSmelting(Hero hero, EquipmentElement equipmentElement)`

**用途 / Purpose:** 处理与 「do smelting」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.DoSmelting(hero, equipmentElement);
```

### CreateCraftedWeaponInFreeBuildMode
`public ItemObject CreateCraftedWeaponInFreeBuildMode(Hero hero, WeaponDesign weaponDesign, ItemModifier weaponModifier = null)`

**用途 / Purpose:** 构建一个新的 「crafted weapon in free build mode」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.CreateCraftedWeaponInFreeBuildMode(hero, weaponDesign, null);
```

### CreateCraftedWeaponInCraftingOrderMode
`public ItemObject CreateCraftedWeaponInCraftingOrderMode(Hero crafterHero, CraftingOrder craftingOrder, WeaponDesign weaponDesign)`

**用途 / Purpose:** 构建一个新的 「crafted weapon in crafting order mode」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.CreateCraftedWeaponInCraftingOrderMode(crafterHero, craftingOrder, weaponDesign);
```

### GetActiveCraftingHero
`public Hero GetActiveCraftingHero()`

**用途 / Purpose:** 读取并返回当前对象中 「active crafting hero」 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.GetActiveCraftingHero();
```

### SetActiveCraftingHero
`public void SetActiveCraftingHero(Hero hero)`

**用途 / Purpose:** 为 「active crafting hero」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.SetActiveCraftingHero(hero);
```

### CreateTownOrder
`public void CreateTownOrder(Hero orderOwner, int orderSlot)`

**用途 / Purpose:** 构建一个新的 「town order」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.CreateTownOrder(orderOwner, 0);
```

### CreateCustomOrderForHero
`public CraftingOrder CreateCustomOrderForHero(Hero orderOwner, float orderDifficulty = -1f, WeaponDesign weaponDesign = null, CraftingTemplate craftingTemplate = null)`

**用途 / Purpose:** 构建一个新的 「custom order for hero」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.CreateCustomOrderForHero(orderOwner, 0, null, null);
```

### GetOrderResult
`public void GetOrderResult(CraftingOrder craftingOrder, ItemObject craftedItem, out bool isSucceed, out TextObject orderRemark, out TextObject orderResult, out int finalReward)`

**用途 / Purpose:** 读取并返回当前对象中 「order result」 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.GetOrderResult(craftingOrder, craftedItem, isSucceed, orderRemark, orderResult, finalReward);
```

### CompleteOrder
`public void CompleteOrder(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)`

**用途 / Purpose:** 处理与 「complete order」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.CompleteOrder(town, craftingOrder, craftedItem, completerHero);
```

### GetCurrentItemModifier
`public ItemModifier GetCurrentItemModifier()`

**用途 / Purpose:** 读取并返回当前对象中 「current item modifier」 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.GetCurrentItemModifier();
```

### SetCurrentItemModifier
`public void SetCurrentItemModifier(ItemModifier modifier)`

**用途 / Purpose:** 为 「current item modifier」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.SetCurrentItemModifier(modifier);
```

### CancelCustomOrder
`public void CancelCustomOrder(Town town, CraftingOrder craftingOrder)`

**用途 / Purpose:** 检查当前对象是否满足 「cel custom order」 的前置条件。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.CancelCustomOrder(town, craftingOrder);
```

### IsThereAvailableSlot
`public bool IsThereAvailableSlot()`

**用途 / Purpose:** 判断当前对象是否处于 「there available slot」 状态或条件。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.IsThereAvailableSlot();
```

### GetAvailableSlot
`public int GetAvailableSlot()`

**用途 / Purpose:** 读取并返回当前对象中 「available slot」 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingCampaignBehavior 实例
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.GetAvailableSlot();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.SyncData(dataStore);
```

## 参见

- [本区域目录](../)
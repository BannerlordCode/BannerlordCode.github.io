---
title: "ICraftingCampaignBehavior"
description: "ICraftingCampaignBehavior：TaleWorlds.CampaignSystem.CampaignBehaviors 的 public 接口，继承 ICampaignBehavior；公开成员 20 个（方法 18、属性 2、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/ICraftingCampaignBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICraftingCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ICraftingCampaignBehavior : ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/ICraftingCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## 概述

ICraftingCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/ICraftingCampaignBehavior.cs。它是一个 public 接口，实现/继承 ICampaignBehavior，继承链为 ICraftingCampaignBehavior → ICampaignBehavior。public/protected 成员共 20 个：18 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ICraftingCampaignBehavior 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`），命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors`，继承链 ICraftingCampaignBehavior → ICampaignBehavior。成员构成以方法为主（方法 18/20，属性 2/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/ICraftingCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingCampaignBehavior.CraftingOrderSlots>CraftingOrders` | `IReadOnlyDictionary<Town, CraftingCampaignBehavior.CraftingOrderSlots>CraftingOrders` | 属性 |
| `IReadOnlyCollection` | `IReadOnlyCollection<WeaponDesign>CraftingHistory` | 属性 |
| `CompleteOrder` | `void CompleteOrder(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero);` | 方法 |
| `GetCurrentItemModifier` | `ItemModifier GetCurrentItemModifier();` | 方法 |
| `SetCurrentItemModifier` | `void SetCurrentItemModifier(ItemModifier modifier);` | 方法 |
| `SetCraftedWeaponName` | `void SetCraftedWeaponName(ItemObject craftedWeaponItem, TextObject name);` | 方法 |
| `GetOrderResult` | `void GetOrderResult(CraftingOrder craftingOrder, ItemObject craftedItem, out bool isSucceed, out TextObject orderRemark, out TextObject orderResult, out int finalPrice);` | 方法 |
| `GetCraftingDifficulty` | `int GetCraftingDifficulty(WeaponDesign weaponDesign);` | 方法 |
| `GetHeroCraftingStamina` | `int GetHeroCraftingStamina(Hero hero);` | 方法 |
| `SetHeroCraftingStamina` | `void SetHeroCraftingStamina(Hero hero, int value);` | 方法 |
| `GetMaxHeroCraftingStamina` | `int GetMaxHeroCraftingStamina(Hero hero);` | 方法 |
| `DoRefinement` | `void DoRefinement(Hero hero, Crafting.RefiningFormula refineFormula);` | 方法 |
| `DoSmelting` | `void DoSmelting(Hero currentCraftingHero, EquipmentElement equipmentElement);` | 方法 |
| `CreateCraftedWeaponInFreeBuildMode` | `ItemObject CreateCraftedWeaponInFreeBuildMode(Hero hero, WeaponDesign weaponDesign, ItemModifier weaponModifier = null);` | 方法 |
| `CreateCraftedWeaponInCraftingOrderMode` | `ItemObject CreateCraftedWeaponInCraftingOrderMode(Hero crafterHero, CraftingOrder craftingOrder, WeaponDesign weaponDesign);` | 方法 |
| `IsOpened` | `bool IsOpened(CraftingPiece craftingPiece, CraftingTemplate craftingTemplate);` | 方法 |
| `CreateCustomOrderForHero` | `CraftingOrder CreateCustomOrderForHero(Hero orderOwner, float orderDifficulty = -1f, WeaponDesign weaponDesign = null, CraftingTemplate craftingTemplate = null);` | 方法 |
| `CancelCustomOrder` | `void CancelCustomOrder(Town town, CraftingOrder craftingOrder);` | 方法 |
| `GetActiveCraftingHero` | `Hero GetActiveCraftingHero();` | 方法 |
| `SetActiveCraftingHero` | `void SetActiveCraftingHero(Hero hero);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ICampaignBehavior](../../campaign/ICampaignBehavior/)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior/)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)

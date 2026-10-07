---
title: "ItemHelper"
description: "物品比较与武器伤害文本的静态工具集：判断两件装备能否并列比较，并生成挥砍/穿刺/投掷伤害的本地化文本。"
---

# ItemHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ItemHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/ItemHelper.cs`

## 概述

本类服务两个场景：一是装备面板上「把新捡的武器和身上穿的放在一起比」时的可比性判定，二是把 `WeaponComponentData` 的伤害数值渲染成带伤害类型的本地化文本。可比性判定以 `WeaponDescriptionId` 为主键，并内置了一条硬编码特例（`OneHandedBastardSword` 与 `OneHandedSword` 互相视为可比）；伤害文本则统一走 `{=vvCwVo7i}` 模板加 `str_damage_types` 本地化。

## 心智模型

把 ItemHelper 想成装备对比功能的「裁判 + 播报员」。裁判部分回答「这两件东西能不能比」——先比主武器的使用类型，比不了再退回物品类型；播报员部分回答「伤害是多少、什么类型」——把 `WeaponComponentData` 的数值和 `DamageTypes` 枚举翻译成玩家看得见的句子。本类不持有状态，所有输入来自 `ItemObject` 和 `WeaponComponentData`，输出是布尔或 `TextObject`。

## 怎么用

### 怎么拿到它

静态类，直接 `ItemHelper.方法名(...)` 调用。

### 典型用法

- 装备面板要显示「可比较」标记时，用 `CheckComparability` 判断两件物品能不能并列。
- 需要知道「新武器的哪个使用槽位能和旧武器比」时，用带 `out int comparableUsageIndex` 的重载。
- 要渲染伤害文本时，按伤害类型选 `GetSwingDamageText` / `GetThrustDamageText` / `GetMissileDamageText`。
- 要显示「×N 物品名」的复数化文本时，用 `NumberOfItems`。

### 最容易踩的坑

- `IsWeaponComparableWithUsage` 的 `out` 重载在未命中时把 `comparableUsageIndex` 写成 `-1`，直接拿去索引 `item.Weapons` 会越界。
- 带 `usageIndex` 的 `CheckComparability` 重载**不检查 `comparedItem.PrimaryWeapon` 是否为 `null`**，传一件没有主武器的物品进来会 NRE。
- `GetMissileDamageText` 对 `WeaponClass.ThrowingAxe` 有特殊处理：飞斧的伤害类型取 `SwingDamageType` 而非 `ThrustDamageType`，这是本类唯一的特例。
- `NumberOfItems` 的模板里 `NUMBER_OF_ITEM > 1` 才走复数形式，传 1 时文本形态不同。

## 关键成员

- `public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId)` —— 判断物品是否包含指定使用类型的武器，含 `OneHandedBastardSword` 与 `OneHandedSword` 互认的硬编码特例。`ItemHelper.cs:11`
- `public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId, out int comparableUsageIndex)` —— 同上但把命中下标写进 `comparableUsageIndex`，未命中时为 `-1`。`ItemHelper.cs:24`
- `public static bool CheckComparability(ItemObject item, ItemObject comparedItem)` —— 判断两件物品能否并列比较：主武器同大类时比使用类型，否则退回物品类型。`ItemHelper.cs:39`
- `public static bool CheckComparability(ItemObject item, ItemObject comparedItem, int usageIndex)` —— 同上但指定用 `item.Weapons[usageIndex]` 做比较，不检查对方主武器是否为 `null`。`ItemHelper.cs:54`
- `private static TextObject GetDamageDescription(int damage, DamageTypes damageType)` —— 私有，不对外。用 `{=vvCwVo7i}` 模板把伤害数值与类型拼成本地化文本。`ItemHelper.cs:69`
- `public static TextObject GetSwingDamageText(WeaponComponentData weapon, ItemModifier itemModifier)` —— 生成挥砍伤害文本，类型取 `weapon.SwingDamageType`。`ItemHelper.cs:78`
- `public static TextObject GetMissileDamageText(WeaponComponentData weapon, ItemModifier itemModifier)` —— 生成投掷伤害文本，飞斧的伤害类型特殊取 `SwingDamageType`。`ItemHelper.cs:86`
- `public static TextObject GetThrustDamageText(WeaponComponentData weapon, ItemModifier itemModifier)` —— 生成穿刺伤害文本，类型取 `weapon.ThrustDamageType`。`ItemHelper.cs:94`
- `public static TextObject NumberOfItems(int number, ItemObject item)` —— 生成「×N 物品名」的复数化文本，数量大于 1 时走复数形态。`ItemHelper.cs:102`

## 真实示例

```csharp
ItemObject sword = Hero.MainHero.BattleEquipment[EquipmentIndex.WeaponItemBeginSlot].Item;
ItemObject other = Hero.MainHero.BattleEquipment[EquipmentIndex.Weapon1].Item;
if (ItemHelper.CheckComparability(sword, other))
{
    int usageIndex;
    if (ItemHelper.IsWeaponComparableWithUsage(sword, "OneHandedSword", out usageIndex))
        Debug.Print(ItemHelper.GetSwingDamageText(sword.Weapons[usageIndex], null).ToString());
}
```

## 参见

- ↔ [TextObject](../../localization/TextObject) —— 本类几个 `Get*DamageText` 的返回值类型与它的本地化语义
- ↔ [LocalizedTextManager](../../localization/LocalizedTextManager) —— `{=vvCwVo7i}` 这类文本 id 是怎么被翻成当前语言的

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶

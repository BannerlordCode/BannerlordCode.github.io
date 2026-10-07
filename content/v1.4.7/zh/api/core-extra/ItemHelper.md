---
title: "ItemHelper"
description: "判断两件武器能否比较，并生成给玩家看的伤害与数量文本，不做数值计算。"
---

# ItemHelper

**命名空间：** `Helpers`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class ItemHelper`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/ItemHelper.cs`（声明见第 8 行）

## 概述

`ItemHelper` 分两族：**判断两件武器能不能比**（4 个成员，靠 `WeaponDescriptionId` + 一条 BastardSword↔Sword 特例，最后兜底比 `ItemObject.Type`）与**生成给玩家看的文本**（5 个成员，全是造 `TextObject`）。它**不做数值计算**，`GetModified*Damage` 的修正值来自 `ItemModifier`。

## 心智模型

把 `ItemHelper` 想成**武器比较器 + 文本生成器**，两个角色共用同一套「武器使用类型」概念。

**比较族**的核心问题是：两件武器能不能放在一起比较？判据是 `WeaponDescriptionId` 是否匹配，外加一条硬编码特例：`OneHandedBastardSword` 与 `OneHandedSword` 互相视为可比。如果两边都有主武器且属同一大类（近战 / 远程可消耗 / 非远程可消耗 / 盾），就用 `WeaponDescriptionId` 去匹配；否则退回比 `ItemObject.Type`。

**文本族**的核心问题是：给玩家看什么？4 个 `Get*DamageText` 方法分别造挥砍 / 投掷 / 突刺伤害文本，`NumberOfItems` 造复数化数量文本。它们都用 `GameTexts` 取本地化模板，把数值填进去。

**关键洞察：本类不做数值计算。** `GetModified*Damage` 的修正值来自 `ItemModifier`，本类只负责「取修正值 + 造文本」。想改伤害数值，改 `ItemModifier` 或武器数据，不是改这个类。

## 何时使用 / 何时不要使用

**何时使用：**
- 你要判断两件武器能不能放在一起比较（比如 UI 里显示「可比」标记）。
- 你要生成给玩家看的伤害文本（比如装备面板上的伤害数字）。
- 你要生成复数化数量文本（比如「3 把剑」）。

**何时不要使用：**
- 你要做数值计算——本类只取修正值，不算伤害。
- 你要改本地化文本——改 `GameTexts` 里的模板，不是改这个类。
- 你要处理武器的创建、销毁、归属——那些在别处。

## 成员说明

| 成员 | 用途、副作用与时机 |
|---|---|
| `IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId)` | 遍历 `item.Weapons`，命中条件 `WeaponDescriptionId == comparedUsageId`，外加 BastardSword↔Sword 特例。`ItemHelper.cs:11` |
| `IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId, out int comparableUsageIndex)` | 同上，但把命中下标写进 `comparableUsageIndex`；未命中时是 `-1`，直接拿去索引会越界。`ItemHelper.cs:24` |
| `CheckComparability(ItemObject item, ItemObject comparedItem)` | 判断两件物品能不能放在一起比较；任一 `null` 返回 `false`，两边都有主武器且属同一大类时用 `WeaponDescriptionId` 匹配，否则退回比 `ItemObject.Type`。`ItemHelper.cs:39` |
| `CheckComparability(ItemObject item, ItemObject comparedItem, int usageIndex)` | 同上但指定用 `item.Weapons[usageIndex]` 的 `WeaponDescriptionId`；**不检查 `comparedItem.PrimaryWeapon` 是否为 `null`**，传一件没有主武器的物品进来会 NRE。`ItemHelper.cs:54` |
| `GetDamageDescription(int damage, DamageTypes damageType)` | **私有，不对外**。用模板造伤害类型文本，`DAMAGE_TYPE` 走 `GameTexts.FindText("str_damage_types", damageType.ToString())`。`ItemHelper.cs:69` |
| `GetSwingDamageText(WeaponComponentData weapon, ItemModifier itemModifier)` | 造挥砍伤害文本，`weapon.GetModifiedSwingDamage(itemModifier)` + `weapon.SwingDamageType`。`ItemHelper.cs:78` |
| `GetMissileDamageText(WeaponComponentData weapon, ItemModifier itemModifier)` | 造投掷伤害文本；**飞斧的伤害类型与其它投掷武器不同**（用 `SwingDamageType` 而非 `ThrustDamageType`），这是本类唯一的一处特例。`ItemHelper.cs:86` |
| `GetThrustDamageText(WeaponComponentData weapon, ItemModifier itemModifier)` | 造突刺伤害文本，`weapon.GetModifiedThrustDamage(itemModifier)` + `weapon.ThrustDamageType`。`ItemHelper.cs:94` |
| `NumberOfItems(int number, ItemObject item)` | 造复数化数量文本，把 `item.Name` 写进 `ITEM`、`number` 写进 `NUMBER_OF_ITEM`。`ItemHelper.cs:102` |

## 示例

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

## 风险与边界

1. **`IsWeaponComparableWithUsage` 的 `out` 参数未命中时是 `-1`**——直接拿去索引 `item.Weapons` 会越界。
2. **`CheckComparability(item, comparedItem, usageIndex)` 不检查 `comparedItem.PrimaryWeapon` 是否为 `null`**——传一件没有主武器的物品进来会 NRE。
3. **飞斧的伤害类型与其它投掷武器不同**——`GetMissileDamageText` 里 `WeaponClass.ThrowingAxe` 用 `SwingDamageType`，其他用 `ThrustDamageType`。
4. **BastardSword↔Sword 特例是硬编码的**——如果上游改了武器使用类型 ID，这个特例会静默失效。
5. **`NumberOfItems` 的复数化依赖 `GameTexts` 模板**——如果模板不支持某种语言，复数化会出错。

## 依赖关系

- 上游 / 提供者：
  - [Game](../../core-extra/Game) —— `GameTexts` 的文本解析经 `Game.Current.GameTextManager`，本类造的 `TextObject` 走这条路取值。
  - [ViewModel](../../core-extra/ViewModel) —— 本类返回的伤害 / 数量文本最终显示在 Gauntlet 界面上，消费方是 ViewModel。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[SkillHelper](../SkillHelper)

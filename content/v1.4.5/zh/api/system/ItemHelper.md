---
title: "ItemHelper"
description: "检查武器 usage 兼容性，并生成本地化伤害与物品数量文本。"
---
# ItemHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class ItemHelper`  
**基类：** `System.Object`  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/ItemHelper.cs`

## 一句话职责

`ItemHelper` 为 inventory 和 tooltip 提供武器 usage 兼容性检查，以及带修饰器伤害和物品数量的本地化文本。

它只返回比较结果、usage 索引或 `TextObject`，不会改变 item、`ItemRoster`、装备槽或最终 UI 数字。调用方仍负责筛选 usage、执行装备或 roster mutation，并决定如何展示这些结果。

## 心智模型

这个 helper 有两组独立契约：

- **比较：** `IsWeaponComparableWithUsage` 检查 [ItemObject](../../core-extra/ItemObject) 是否拥有匹配请求 `WeaponDescriptionId` 的 usage；`CheckComparability` 判断两个物品能否放在同一比较类别。
- **展示：** 伤害方法对 [WeaponComponentData](../../core-extra/WeaponComponentData) 应用 [ItemModifier](../../core-extra/ItemModifier) 并生成文本，`NumberOfItems` 使用物品名称填充本地化数量模板。

它不会装备物品、修改 [ItemRoster](../../campaign/ItemRoster)，也不会比较最终 UI 数字。Inventory view model 使用返回的布尔值/索引，再执行自己的比较与展示流程。

## 什么时候使用，什么时候不要使用

- **适合：** inventory 或 tooltip 已经取得真实 item/weapon component，需要游戏原本的兼容性规则或伤害文字时使用。
- **适合：** 先使用带 out 参数的重载取得 `usageIndex`，再把它传给 `GetWeaponWithUsageIndex`。
- **不要：** 把它当作装备或 roster mutation API；公开方法都是只读的，唯一写入的是输出变量或返回 `TextObject` 的文本变量。
- **不要在有武器数据时只比较 `ItemObject.Type`：** `CheckComparability` 会先应用武器类别规则。
- **不要传入任意 usage index：** 进入武器分支后，带索引重载会直接访问 `item.Weapons[usageIndex]`。

## 公开入口

### 武器 usage 检查

```csharp
public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId)
public static bool IsWeaponComparableWithUsage(
    ItemObject item,
    string comparedUsageId,
    out int comparableUsageIndex)
```

两个重载都会扫描 `item.Weapons`，匹配 `WeaponDescriptionId`。`OneHandedBastardSword` 与 `OneHandedSword` 被视为互相兼容的别名。带索引重载会先把输出设为 `-1`，返回第一个匹配索引；没有匹配时返回 `false`。

### 物品比较检查

```csharp
public static bool CheckComparability(ItemObject item, ItemObject comparedItem)
public static bool CheckComparability(
    ItemObject item,
    ItemObject comparedItem,
    int usageIndex)
```

任一输入为 null 时返回 `false`。当 primary weapon 类别兼容时，方法检查 `comparedItem` 是否有匹配 usage。兼容类别包括 melee 对 melee、可消耗 ranged 对可消耗 ranged、可消耗 non-ranged 对可消耗 non-ranged，以及 shield 对 shield。否则回退到 `item.Type == comparedItem.Type`。

不带索引的重载使用 `item.PrimaryWeapon.WeaponDescriptionId`。带索引的重载使用 `item.Weapons[usageIndex].WeaponDescriptionId`；调用方必须提供对 `item.Weapons` 有效的索引，并确保 compared item 具有兼容的 weapon 数据。

### 伤害文本

```csharp
public static TextObject GetSwingDamageText(
    WeaponComponentData weapon,
    ItemModifier itemModifier)
public static TextObject GetMissileDamageText(
    WeaponComponentData weapon,
    ItemModifier itemModifier)
public static TextObject GetThrustDamageText(
    WeaponComponentData weapon,
    ItemModifier itemModifier)
```

三个方法分别使用对应的 `GetModified...Damage`，返回形如 `{DAMAGE} {DAMAGE_TYPE}` 的 `TextObject`。swing 使用 `SwingDamageType`，thrust 使用 `ThrustDamageType`；missile 对 `ThrowingAxe` 使用 `SwingDamageType`，其他 weapon class 使用 `ThrustDamageType`。

### `NumberOfItems`

```csharp
public static TextObject NumberOfItems(int number, ItemObject item)
```

把 `item.Name` 写入 `ITEM`，把 `number` 写入 `NUMBER_OF_ITEM`。本地化模板只在数量大于 1 时显示数字和复数物品名；helper 不验证或钳制数量。

## 真实 inventory 与 tooltip 流程

原版 inventory view 从真实装备槽取得 element，寻找匹配 usage，再为 tooltip 生成带修饰器的伤害文本：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;

if (Hero.MainHero != null)
{
    EquipmentElement weaponElement = Hero.MainHero.BattleEquipment[EquipmentIndex.Weapon0];
    ItemObject item = weaponElement.Item;
    if (item?.PrimaryWeapon != null && ItemHelper.IsWeaponComparableWithUsage(
        item,
        "OneHandedSword",
        out int usageIndex))
    {
        WeaponComponentData weapon = item.GetWeaponWithUsageIndex(usageIndex);
        TextObject damageText = ItemHelper.GetSwingDamageText(
            weapon,
            weaponElement.ItemModifier);
    }
}
```

`ItemMenuVM` 和 `TooltipRefresherCollection` 遵循同样的分离：先选择 usage 和 modifier，再向 `ItemHelper` 请求文本。helper 不比较 `damageText` 字符串，也不修改装备 element。

## 依赖与所有权

- [ItemObject](../../core-extra/ItemObject) 持有物品类型、primary weapon 和 weapon usage 列表。
- [WeaponComponentData](../../core-extra/WeaponComponentData) 持有 weapon description ID、类别、伤害类型和 modified damage 计算。
- [ItemModifier](../../core-extra/ItemModifier) 提供伤害计算使用的修饰器。
- [TextObject](../../localization/TextObject) 承载本地化伤害/数量变量和物品名称。
- Inventory view model 负责 usage 选择、比较展示和 roster/equipment mutation；`ItemHelper` 只返回布尔值、索引或本地化文本。

## 风险与版本边界

- sword alias 规则是精确的：只有 `OneHandedSword` 和 `OneHandedBastardSword` 获得特殊的互相匹配。
- `CheckComparability` 只有在 primary weapon 条件成立时才执行武器类别规则；否则使用更宽的 `ItemObject.Type` 相等回退。
- 带索引重载可能因无效 `usageIndex` 失败。它只先检查 `item.PrimaryWeapon`，随后会读取 `comparedItem.PrimaryWeapon`；非 null 的 compared item 如果没有 primary weapon，可能在类型回退前触发空引用。应使用本 helper 为同一 item 返回的索引，并在调用前确认两个 weapon component 都存在。
- 伤害文本来自 modified damage，但不会单独返回数值；需要比较数字时，调用方仍须通过 weapon API 计算。
- `NumberOfItems` 只在新建的 `TextObject` 上写变量，不会改变物品名称或 roster 数量。
- helper 没有字段或存档契约；返回的文本和比较结果都是临时 UI/计算值。

## 版本注记

本页按 v1.4.5 `ItemHelper.cs` 编写。八个公开签名都是兼容性或展示辅助方法；inventory 所有权和装备 mutation 不属于本类。

## 导航

- [↑ API 系统索引](../)
- [相关：ItemObject](../../core-extra/ItemObject)
- [相关：WeaponComponentData](../../core-extra/WeaponComponentData)
- [相关：ItemModifier](../../core-extra/ItemModifier)
- [相关：TextObject](../../localization/TextObject)
- [相关：ItemRoster](../../campaign/ItemRoster)

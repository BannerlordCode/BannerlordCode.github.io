---
title: "ItemObject"
description: "游戏中的物品定义：武器、护甲、马匹、食物、贸易品、锻造组件。"
---
# ItemObject

**Namespace:** TaleWorlds.Core  
**Module:** TaleWorlds.Core  
**Type:** `public class ItemObject : MBObjectBase`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.Core/ItemObject.cs`

## 概述

`ItemObject` 是 Bannerlord 中**所有物品的定义对象**。每个武器、护甲、盾牌、弹药、坐骑、食物、贸易商品、锻造组件在 XML 中都有一个条目，加载后成为 `ItemObject` 实例。注意它描述的是**物品类型**，不是某个背包里具体有多少个——背包里的数量由 `ItemRosterElement` 或 `EquipmentElement` 表示。

主要作用：

- 定义物品基础属性：名称、价值、重量、类型、文化。
- 绑定 3D 资源：网格、骨架、挂点。
- 通过 `ItemComponent` 区分武器、护甲、坐骑、贸易品等具体行为。
- 提供 `ItemFlags`、`ItemCategory`、`Value`、`Weight` 等属性供经济系统和装备系统使用。

## 心智模型

把 `ItemObject` 当作**“物品蓝图/模板”**：

- 它对应 XML 里的 `<Item ... />`，不是背包里那把剑。
- 背包、商店、战利品显示的是 `ItemRosterElement(item, count)`。
- 人物穿在身上的装备是 `EquipmentElement(item, itemModifier)`。
- 大多数系统通过 `MobileParty.ItemRoster.AddToCounts(item, count)` 来转移物品。

## 如何获取 ItemObject

```csharp
// 按 game object ID 读取
ItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");

// 按武器 kind 读取
ItemObject weapon = ItemObject.GetItemFromWeaponKind(weaponKind);
```

## 核心属性

| 属性 | 说明 |
|------|------|
| `Name` | 物品名称。 |
| `Value` | 基础价值。 |
| `Weight` | 重量。 |
| `Difficulty` | 使用需求。 |
| `ItemCategory` | 分类（如 Weapon、Armor、TradeGood、Animal 等）。 |
| `ItemFlags` | 标记（是否可掉落、是否独一无二等）。 |
| `Culture` | 所属文化。 |
| `IsFood` | 是否是食物。 |
| `IsUniqueItem` | 是否唯一物品。 |
| `NotMerchandise` | 不会出现在商店。 |
| `ItemComponent` | 具体组件（武器、护甲、坐骑、贸易品）。 |
| `WeaponComponent` | 武器组件（若是武器）。 |
| `ArmorComponent` | 护甲组件（若是护甲）。 |
| `HorseComponent` | 坐骑组件（若是坐骑）。 |
| `MultiMeshName` / `HolsterMeshName` / `BodyName` | 相关模型资源名。 |

## 主要方法

### `public static ItemObject InitializeTradeGood(...)`
初始化一个贸易商品。

```csharp
// Example: add an existing item to the player party inventory.
ItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");
MobileParty.MainParty.ItemRoster.AddToCounts(grain, 50);
```

### `public static ItemObject GetItemFromWeaponKind(int weaponKind)`
通过武器 kind id 查找物品。

```csharp
ItemObject ammo = ItemObject.GetItemFromWeaponKind(weaponKind);
```

### `public void DetermineItemCategoryForItem()`
根据组件自动判断物品分类。

```csharp
item.DetermineItemCategoryForItem();
```

### `public static void InitAsPlayerCraftedItem(ref ItemObject itemObject)`
将一件物品标记为玩家锻造。

```csharp
ItemObject.InitAsPlayerCraftedItem(ref craftedWeapon);
```

### `public static ItemObject GetCraftedItemObjectFromHashedCode(string hashedCode)`
按锻造哈希码获取已锻造的物品。

```csharp
ItemObject crafted = ItemObject.GetCraftedItemObjectFromHashedCode(hash);
```

## 典型用法示例

### 示例 1：给玩家背包添加物品

```csharp
ItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");
MobileParty.MainParty.ItemRoster.AddToCounts(grain, 50);
```

### 示例 2：判断一件武器是否需要弹药

```csharp
var ammoType = ItemObject.GetAmmoTypeForItemType(item.ItemType);
bool needsAmmo = ammoType != ItemObject.ItemTypeEnum.Invalid;
```

### 示例 3：遍历所有食物并打印名称

```csharp
foreach (ItemObject item in MBObjectManager.Instance.GetObjectTypeList<ItemObject>())
{
    if (item.IsFood)
    {
        Console.WriteLine(item.Name);
    }
}
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5 的物品系统 API 基本一致。
- v1.4.5 对锻造系统（`WeaponDesign` / `CraftingTemplate`）扩展更多，但 `ItemObject` 本身稳定。

## 参见

- [MobileParty](../../campaign/MobileParty/) — 部队物品包袱
- [SDK 总览](../../../architecture/sdk-overview/) — 物品在整个 mod 模型中的位置

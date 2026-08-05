---
title: "InventoryItemType"
description: "v1.4.5 中由库存 UI 使用、用于分类装备、护甲、商品和马匹类别的物品标志枚举。"
---
# InventoryItemType

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum InventoryItemType`  
**Owner:** [InventoryScreenHelper](../InventoryScreenHelper)  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/InventoryScreenHelper.cs`

## 职责

`InventoryItemType` 是 [InventoryScreenHelper](../InventoryScreenHelper) 返回的 `[Flags]` 分类结果。它让库存 view model 判断 [ItemObject](../../core-extra/ItemObject) 是武器、护甲、马匹还是商品，且不会改变物品或其 roster。

## 心智模型

辅助类先把源码的 `ItemObject.ItemTypeEnum` 映射到基本 bit，再用组合值服务 UI 筛选：

```
ItemObject 类型 -> GetInventoryItemTypeOfItem -> InventoryItemType 掩码 -> UI 筛选
```

这是位掩码而不是排序值。分类测试应使用 `&`；只有调用方的契约明确要求完全相等时，才比较整个结果。

## 枚举值

| 值 | 源码值或含义 |
| --- | --- |
| `None` | `0`；null 或未映射物品类型。 |
| `Weapon` | `1`；辅助类映射的武器和远程武器类型。 |
| `Shield` | `2`。 |
| `HeadArmor`、`BodyArmor`、`LegArmor`、`HandArmor` | `4`、`8`、`0x10`、`0x20`。 |
| `Horse`、`HorseHarness` | `0x40`、`0x80`。 |
| `Goods`、`Book`、`Animal`、`Cape`、`Banner` | `0x100`、`0x200`、`0x400`、`0x800`、`0x1000`。 |
| `HorseCategory` | `0xC0`，horse 与 harness 的组合。 |
| `Armors` | `0x83C`，源码的护甲组合。 |
| `Equipable` | `0x18FF`，源码的可装备掩码。 |
| `All` | `0xFFF`，源码的全物品掩码。 |

## 真实使用

`SPItemVM` 会针对真实装备元素判断是否可装备：

```csharp
ItemObject item = newItem.EquipmentElement.Item;
IsEquipableItem =
    (InventoryScreenHelper.GetInventoryItemTypeOfItem(item)
     & InventoryScreenHelper.InventoryItemType.Equipable) != 0;
```

结果只是 UI 分类，不会装备 `newItem`，也不会把物品加入 [ItemRoster](../../campaign/ItemRoster) 或验证装备槽位。

## 依赖关系

- [InventoryScreenHelper](../InventoryScreenHelper) 拥有映射函数和嵌套枚举声明。
- [ItemObject](../../core-extra/ItemObject) 提供源物品类型。
- [ItemRoster](../../campaign/ItemRoster) 是外部所有权容器，不由此枚举管理。
- [InventoryState](../../campaign/InventoryState) 及其 UI 消费者使用该分类进行展示筛选。

## 风险与版本边界

组合值是 v1.4.5 的精确掩码。`HorseCategory`、`Armors`、`Equipable` 和 `All` 必须按位掩码测试，不能当作普通连续枚举值。null 物品返回 `None`，未来新增且未被辅助类映射的物品类型也会暂时回退到 `None`。

## 导航

- [↑ API system 索引](../)
- [所有者：InventoryScreenHelper](../InventoryScreenHelper)
- [相关：ItemObject](../../core-extra/ItemObject)
- [相关：ItemRoster](../../campaign/ItemRoster)
- [English page](../../../../en/api/system/InventoryItemType)

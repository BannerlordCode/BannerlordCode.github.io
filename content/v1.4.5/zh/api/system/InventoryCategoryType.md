---
title: "InventoryCategoryType"
description: "v1.4.5 中传入库存交易初始化、用于选择商人筛选类别的枚举。"
---
# InventoryCategoryType

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum InventoryCategoryType`  
**Owner:** [InventoryScreenHelper](../InventoryScreenHelper)  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/InventoryScreenHelper.cs`

## 职责

`InventoryCategoryType` 选择 [InventoryScreenHelper](../InventoryScreenHelper) 初始化交易库存时使用的类别筛选。它与 [InventoryItemType](../InventoryItemType) 不同：前者描述 merchant filter，后者分类单个物品。

## 心智模型

该类别作为初始化参数传递，而不是作为 roster 变化：

```
交易入口 -> InventoryCategoryType -> InventoryLogic.Initialize -> merchant 筛选
```

大多数辅助入口默认使用 `None`。调用方只有在拥有真实 settlement 交易上下文时，才应通过 `OpenScreenAsTrade` 选择类别；状态创建和交易监听器仍由辅助类负责。

## 枚举值

| 值 | 源码含义 |
| --- | --- |
| `None` | `-1`；不使用类别筛选。 |
| `All` | 所有支持的 merchant 类别。 |
| `Armors` | 护甲类别。 |
| `Weapon` | 武器类别。 |
| `Shield` | 盾牌类别。 |
| `HorseCategory` | 马匹和马具类别。 |
| `Goods` | 商品类别。 |
| `CategoryTypeAmount` | 表示数量边界的 sentinel，不是 merchant 筛选项。 |

## 真实使用

源码交易入口会把筛选和真实 settlement roster、组件一起传入：

```csharp
ItemRoster items = Settlement.CurrentSettlement.ItemRoster;
InventoryScreenHelper.OpenScreenAsTrade(
    items,
    Settlement.CurrentSettlement.SettlementComponent,
    InventoryScreenHelper.InventoryCategoryType.Goods);
```

`Settlement.CurrentSettlement` 来自战役 town-visit 流程。枚举本身不会打开状态、计算价格或修改 settlement 金币。

## 依赖关系

- [InventoryScreenHelper](../InventoryScreenHelper) 接收该值并挂接 merchant listener。
- [InventoryLogic](../../campaign/InventoryLogic) 在初始化时接收类别。
- [ItemObject](../../core-extra/ItemObject) 提供库存逻辑显示的物品类别。
- [InventoryState](../../campaign/InventoryState) 承载完成初始化的逻辑。

## 风险与版本边界

`None` 是 `-1`，`CategoryTypeAmount` 是枚举末尾的 sentinel；二者都不应当当成可见物品类别。传入类别不会建立 settlement 上下文，调用方仍必须提供有效 roster 和 `SettlementComponent`。

## 导航

- [↑ API system 索引](../)
- [所有者：InventoryScreenHelper](../InventoryScreenHelper)
- [同组：InventoryItemType](../InventoryItemType)
- [相关：InventoryLogic](../../campaign/InventoryLogic)
- [English page](../../../../en/api/system/InventoryCategoryType)

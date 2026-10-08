---
title: "SellItemsAction"
description: "在买卖双方之间转移物品并结算金币的静态 Action：按城镇单价逐件计价、更新双方物品清单，并处理聚落税务。"
---

# SellItemsAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class SellItemsAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/SellItemsAction.cs`

## 概述

这个静态类涉及在两个参与者之间转移物品并结算金币时发生的多类状态变更。从源码看，它的内部实现先确定本次交易发生的聚落：若调用方没有显式传入，则依次尝试卖方队伍所在的聚落、买方队伍所在的聚落，两者都无法确定时抛出参数异常。随后它找到交易定价所用的城镇——若聚落本身没有城镇（例如村庄），则沿村庄的贸易绑定关系找到绑定的城镇。定价按件逐次进行：以城镇对该物品的单价累加总额，同时把卖方物品清单中该物品的计数减一、买方物品清单中加一。金币的转移按买卖双方的类型分派：买方是聚落时走聚落对角色或聚落对队伍的赠送入口；卖方是聚落时先按城镇或村庄税率扣税，再走角色对聚落或队伍对聚落的入口；双方都是队伍时走队伍对队伍或角色对角色的入口。它的边界止于物品计数与金币的这一次转移——不负责打开交易界面，也不负责物品所有权的长期管理。

## 心智模型

这个类是静态的，只有一个公开入口 `Apply` 和一个 private 内部实现 `ApplyInternal`。从源码看，`Apply` 的函数体只有一行：用接收到的全部参数直接调用 `ApplyInternal`，自身不做任何额外判断——它是内部实现的唯一公开通道。两个方法的签名几乎一致，差别有两点：一是参数命名不同（公开入口叫 `receiverParty` / `payerParty` / `subject`，内部实现叫 `sellerParty` / `buyerParty` / `itemRosterElement`）；二是公开入口的最后一个参数 `currentSettlement` 带默认值 `null`，而内部实现里对应参数没有默认值——也就是说调用方可以省略聚落上下文、由内部实现去推断，而内部实现被调用时总是收到一个显式传下来的值。内部实现的推断顺序是：先看卖方队伍的聚落，再看买方队伍的聚落，都没有则抛出参数异常。定价与扣税都发生在内部实现里：它逐件查询城镇单价、更新双方物品清单计数，再按买卖双方是聚落还是队伍分派金币转移；卖方是聚落时还会按税率扣税并累计城镇贸易税。锚表里没有其他成员——这一页的形态就是「一个公开入口 + 一个内部实现」。

## 怎么用

### 怎么拿到它

静态类，直接 `SellItemsAction.Apply(…)` 调用；不需要实例。最后一个参数带默认值，可以省略。

### 典型用法

1. 玩家队伍向聚落出售战利品时，调用 `Apply` 并省略聚落上下文，由内部实现从队伍所在聚落推断。
2. 需要显式指定交易聚落时（例如跨聚落结算），把 `currentSettlement` 作为最后一个参数传入。
3. 批量出售多件物品时，把件数放进 `number` 参数，内部实现会逐件计价并累加总额。
4. 买卖双方都是队伍（例如商队之间交易）时，同样走这一个入口，金币转移按队伍对队伍的路径分派。

### 最容易踩的坑

1. 只有一个公开入口，且它只是转发——定价与扣税逻辑都在 `ApplyInternal` 里，`Apply` 上找不到。
2. 省略 `currentSettlement` 时，若买卖双方队伍都不在聚落中，内部实现会抛出参数异常。
3. `number` 是逐件循环的：件数越大，单价查询与清单更新的次数越多。
4. 卖方是聚落时，内部实现会按税率扣税并累计城镇贸易税——绕过这个入口直接改物品清单，税不会被扣除。

## 关键成员

- **`SellItemsAction`**（`SellItemsAction.cs:9`）— 静态类，公开入口与内部实现都是静态方法，直接以类名调用。
- **`ApplyInternal`**（`SellItemsAction.cs:12`）— private 内部实现，接收卖方、买方、物品、件数与聚落上下文；完成聚落推断、城镇定价、清单计数更新与金币转移分派。
- **`Apply`**（`SellItemsAction.cs:114`）— 唯一的公开入口，把接收到的参数原样转发给 `ApplyInternal`；最后一个参数带默认值 `null`，可省略。

## 真实示例

```csharp
// 场景一：向主英雄出售一件物品，聚落上下文省略（由内部实现推断）
public static void SellOneToMainHero(PartyBase receiver, PartyBase payer, ItemRosterElement subject)
{
    SellItemsAction.Apply(receiver, payer, subject, 1);
}

// 场景二：显式指定聚落上下文，批量出售
public static void SellItemsAtSettlement(PartyBase receiver, PartyBase payer, ItemRosterElement subject, int number, Settlement currentSettlement)
{
    SellItemsAction.Apply(receiver, payer, subject, number, currentSettlement);
}
```

## 参见

- [Campaign](../Campaign) —— 战役层静态 Action 的入口页
- [ItemHelper](../../core-extra/ItemHelper) — 物品侧的辅助查询
- [BarterHelper](../../core-extra/BarterHelper) —— 交易侧的辅助查询
- [PartyBaseHelper](../../core-extra/PartyBaseHelper) —— 参与者侧的辅助查询

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶

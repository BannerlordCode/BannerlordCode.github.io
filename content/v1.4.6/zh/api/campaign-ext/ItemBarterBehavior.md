---
title: "ItemBarterBehavior"
description: "物品交易 Behavior：处理以物品（装备/物资）为标的的交易，是 BarterBehaviors 子命名空间里较复杂的一个（167 行）。"
---
# ItemBarterBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ItemBarterBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BarterBehaviors/ItemBarterBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ItemBarterBehavior` 管**以物品为标的的交易**：用装备、物资换停战、换通行、换服务。它是 `BarterBehaviors` 子命名空间里较复杂的一个（167 行），因为物品种类多、价值差异大，条款组合比金币/领地复杂得多。

## 心智模型

**它是「物品交易的条款提供者」。**

- 它通过 `CheckForBarters(BarterData args)` 声明「我提供哪些物品交易选项」。
- 它**不决定**交易怎么执行 —— 那是 BarterData 与交易系统的事。
- 它**不处理**金币交易 —— 那是 `GoldBarterBehavior`。

**注意**：文件里有一个 `private sealed class SettlementDistanceCache`（`:96`）—— 这是**嵌套私有类**，不是顶层类型，不需要独立页。它只是本 Behavior 的内部缓存。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<ItemBarterBehavior>();
```

### 典型用法

```csharp
// 订阅会话启动事件（与本 Behavior 的 RegisterEvents 同一模式，:16）
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义物品交易条款
});
```

### 坑

- **它不管金币交易**。要加金币交易，去 `GoldBarterBehavior`。
- **它不管领地交易**。要加领地交易，去 `FiefBarterBehavior`。
- **条款是声明式的**。你声明「什么条件下提供什么选项」，不是「什么时候执行什么逻辑」。

## 关键成员

- `RegisterEvents()`（`ItemBarterBehavior.cs:16`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`ItemBarterBehavior.cs:22`）—— 存读私有状态。
- `CheckForBarters(BarterData args)`（`ItemBarterBehavior.cs:27`）—— 声明本 Behavior 提供的交易选项。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors;

// 拿到 Behavior 实例
var itemBehavior = Campaign.Current.GetCampaignBehavior<ItemBarterBehavior>();

// 订阅会话启动
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义物品交易条款
});
```

## 参见

- [`../DiplomaticBartersBehavior`](../DiplomaticBartersBehavior) —— 同命名空间的外交交易。
- [`../FiefBarterBehavior`](../FiefBarterBehavior) —— 同命名空间的领地交易。
- [`../GoldBarterBehavior`](../GoldBarterBehavior) —— 同命名空间的金币交易。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../DiplomaticBartersBehavior`](../DiplomaticBartersBehavior) · [`../FiefBarterBehavior`](../FiefBarterBehavior) · [`../GoldBarterBehavior`](../GoldBarterBehavior) · [`../LiftSiegeBarterBehavior`](../LiftSiegeBarterBehavior)
- 父索引：[`../_index`](../_index)

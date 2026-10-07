---
title: "GoldBarterBehavior"
description: "金币交易 Behavior：处理以金币为标的的交易，是 BarterBehaviors 子命名空间里最轻量的之一（35 行）。"
---
# GoldBarterBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GoldBarterBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BarterBehaviors/GoldBarterBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`GoldBarterBehavior` 管**以金币为标的的交易**：用金币买停战、买通行、买服务。它是 `BarterBehaviors` 子命名空间里最轻量的之一（35 行），因为金币交易的条款最简单 —— 给钱，拿东西，没有中间态。

## 心智模型

**它是「金币交易的条款提供者」。**

- 它通过 `CheckForBarters(BarterData args)` 声明「我提供哪些金币交易选项」。
- 它**不决定**交易怎么执行 —— 那是 BarterData 与交易系统的事。
- 它**不处理**物品交易 —— 那是 `ItemBarterBehavior`。

**为什么单独一个 Behavior**：金币是战役里最通用的货币，把它的交易逻辑独立出来，比混在普通交易里更容易维护和扩展。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<GoldBarterBehavior>();
```

### 典型用法

```csharp
// 订阅会话启动事件（与本 Behavior 的 RegisterEvents 同一模式，:11）
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义金币交易条款
});
```

### 坑

- **它不管物品交易**。要加物品交易，去 `ItemBarterBehavior`。
- **它不管领地交易**。要加领地交易，去 `FiefBarterBehavior`。
- **条款是声明式的**。你声明「什么条件下提供什么选项」，不是「什么时候执行什么逻辑」。

## 关键成员

- `RegisterEvents()`（`GoldBarterBehavior.cs:11`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`GoldBarterBehavior.cs:17`）—— 存读私有状态。
- `CheckForBarters(BarterData args)`（`GoldBarterBehavior.cs:22`）—— 声明本 Behavior 提供的交易选项。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors;

// 拿到 Behavior 实例
var goldBehavior = Campaign.Current.GetCampaignBehavior<GoldBarterBehavior>();

// 订阅会话启动
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义金币交易条款
});
```

## 参见

- [`../DiplomaticBartersBehavior`](../DiplomaticBartersBehavior) —— 同命名空间的外交交易。
- [`../FiefBarterBehavior`](../FiefBarterBehavior) —— 同命名空间的领地交易。
- [`../ItemBarterBehavior`](../ItemBarterBehavior) —— 同命名空间的物品交易。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../DiplomaticBartersBehavior`](../DiplomaticBartersBehavior) · [`../FiefBarterBehavior`](../FiefBarterBehavior) · [`../ItemBarterBehavior`](../ItemBarterBehavior) · [`../LiftSiegeBarterBehavior`](../LiftSiegeBarterBehavior)
- 父索引：[`../_index`](../_index)

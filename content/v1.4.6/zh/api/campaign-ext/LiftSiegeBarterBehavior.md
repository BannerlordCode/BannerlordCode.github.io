---
title: "LiftSiegeBarterBehavior"
description: "解除围城交易 Behavior：处理以金币或物品换围军撤退的交易，是 BarterBehaviors 子命名空间里最小的一个（18 行）。"
---
# LiftSiegeBarterBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class LiftSiegeBarterBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BarterBehaviors/LiftSiegeBarterBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`LiftSiegeBarterBehavior` 管**用资源换围军撤退**的交易：被围城时，可以花钱或给物品让围军解围。它是 `BarterBehaviors` 子命名空间里最小的一个（18 行），因为条款极其简单 —— 给东西，围军走。

## 心智模型

**它是「解围交易的条款提供者」。**

- 它通过 `RegisterEvents()` 挂事件，在合适的时机声明「我提供解围交易选项」。
- 它**不决定**交易怎么执行 —— 那是 BarterData 与交易系统的事。
- 它**不处理**战斗本身 —— 那是 `BattleCampaignBehavior` 的事。

**为什么只有 18 行**：解围交易的逻辑几乎全在交易系统里，这个 Behavior 只需要在正确的时机挂上事件，声明「有这个选项」就够了。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<LiftSiegeBarterBehavior>();
```

### 典型用法

```csharp
// 订阅会话启动事件（与本 Behavior 的 RegisterEvents 同一模式，:9）
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里观察或影响解围交易
});
```

### 坑

- **它不管战斗**。要改战斗结果，去 `BattleCampaignBehavior`。
- **它不管围城机制**。围城本身是攻城系统的事，这个 Behavior 只管「用资源换撤退」这一条。
- **条款极简**。不要期望在这里找到复杂的谈判逻辑 —— 它没有。

## 关键成员

- `RegisterEvents()`（`LiftSiegeBarterBehavior.cs:9`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`LiftSiegeBarterBehavior.cs:14`）—— 存读私有状态。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors;

// 拿到 Behavior 实例
var liftSiegeBehavior = Campaign.Current.GetCampaignBehavior<LiftSiegeBarterBehavior>();

// 订阅会话启动
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里观察解围交易的触发时机
});
```

## 参见

- [`../BattleCampaignBehavior`](../BattleCampaignBehavior) —— 战斗系统，解围交易的对象。
- [`../GoldBarterBehavior`](../GoldBarterBehavior) —— 同命名空间的金币交易，解围常涉及金币。
- [`../ItemBarterBehavior`](../ItemBarterBehavior) —— 同命名空间的物品交易。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../DiplomaticBartersBehavior`](../DiplomaticBartersBehavior) · [`../FiefBarterBehavior`](../FiefBarterBehavior) · [`../GoldBarterBehavior`](../GoldBarterBehavior) · [`../ItemBarterBehavior`](../ItemBarterBehavior)
- 父索引：[`../_index`](../_index)

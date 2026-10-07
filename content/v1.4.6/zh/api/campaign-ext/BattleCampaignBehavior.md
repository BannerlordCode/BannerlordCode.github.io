---
title: "BattleCampaignBehavior"
description: "战役战斗 Behavior：把地图上的遭遇战接进战役状态，处理战前判定与战后结算的落点。"
---
# BattleCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BattleCampaignBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BattleCampaignBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`BattleCampaignBehavior` 管**战役层与战斗层的接缝**：把地图上发生的遭遇战接进战役状态，处理战前判定与战后结算。它是 71 行的轻量 Behavior，因为真正的战斗逻辑在 `Mission` 层，这个 Behavior 只负责「战役侧该知道什么」。

## 心智模型

**它是「战役层与战斗层的适配器」，不是「战斗系统」。**

- 它决定**战役侧在战斗前后做什么**（结算、状态更新、事件派发）。
- 它**不决定**战斗怎么打 —— 那是 `Mission` 层与战斗 AI 的事。
- 它**不处理**战后恢复 —— 那是 `CampaignBattleRecoveryBehavior` 的事。

**为什么它很薄**：Bannerlord 的战斗分两层 —— 战役层（地图上的部队与状态）和任务层（实际战场）。这个 Behavior 只做两层的转接，不重复任务层的逻辑。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<BattleCampaignBehavior>();
```

### 典型用法

```csharp
// 订阅会话启动事件（与本 Behavior 的 RegisterEvents 同一模式，:14）
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义战前/战后回调
});
```

### 坑

- **它不管战场内的逻辑**。要改战斗过程，去 `Mission` 层的类。
- **它不管战后恢复**。要改战后伤亡恢复，去 `CampaignBattleRecoveryBehavior`。
- **它不管俘虏**。要改俘虏处理，去 `SetPrisonerFreeBarterBehavior` / `TransferPrisonerBarterBehavior`。

## 关键成员

- `RegisterEvents()`（`BattleCampaignBehavior.cs:14`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`BattleCampaignBehavior.cs:45`）—— 存读私有状态。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 拿到 Behavior 实例
var battleBehavior = Campaign.Current.GetCampaignBehavior<BattleCampaignBehavior>();

// 订阅会话启动
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义战斗前后回调
});
```

## 参见

- [`../CampaignBattleRecoveryBehavior`](../CampaignBattleRecoveryBehavior) —— 战后恢复，本 Behavior 的下游。
- [`../LiftSiegeBarterBehavior`](../LiftSiegeBarterBehavior) —— 解围交易，围城战的经济出口。
- [`../BuildingsCampaignBehavior`](../BuildingsCampaignBehavior) —— 建筑系统，战斗后果的常见作用对象。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../BuildingsCampaignBehavior`](../BuildingsCampaignBehavior) · [`../CampaignBattleRecoveryBehavior`](../CampaignBattleRecoveryBehavior) · [`../LiftSiegeBarterBehavior`](../LiftSiegeBarterBehavior)
- 父索引：[`../_index`](../_index)

---
title: "FiefBarterBehavior"
description: "领地交易 Behavior：处理以领地（fief）为标的的交易，是 BarterBehaviors 子命名空间里最轻量的一个。"
---
# FiefBarterBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class FiefBarterBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BarterBehaviors/FiefBarterBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`FiefBarterBehavior` 管**以领地为标的的交易**：把城镇、村庄、城堡作为交易筹码的交互。它是 `BarterBehaviors` 子命名空间里最轻量的一个（49 行），因为领地交易的条款相对固定 —— 要么给，要么不给，没有太多中间态。

## 心智模型

**它是「领地交易的条款提供者」。**

- 它通过 `CheckForBarters(BarterData args)` 声明「我提供哪些领地交易选项」。
- 它**不决定**交易怎么执行 —— 那是 BarterData 与交易系统的事。
- 它**不处理**普通物品交易 —— 那是 `ItemBarterBehavior`。

**为什么单独一个 Behavior**：领地是战役里最有价值的资产，把它的交易逻辑独立出来，比混在普通交易里更容易维护和扩展。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<FiefBarterBehavior>();
```

### 典型用法

```csharp
// 订阅会话启动事件（与本 Behavior 的 RegisterEvents 同一模式，:13）
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义领地交易条款
});
```

### 坑

- **它不管普通交易**。要加物品/金币交易，去 `ItemBarterBehavior` / `GoldBarterBehavior`。
- **它不管战斗**。要改战斗结果，去 `BattleCampaignBehavior`。
- **条款是声明式的**。你声明「什么条件下提供什么选项」，不是「什么时候执行什么逻辑」。

## 关键成员

- `RegisterEvents()`（`FiefBarterBehavior.cs:13`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`FiefBarterBehavior.cs:19`）—— 存读私有状态。
- `CheckForBarters(BarterData args)`（`FiefBarterBehavior.cs:24`）—— 声明本 Behavior 提供的交易选项。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors;

// 拿到 Behavior 实例
var fiefBehavior = Campaign.Current.GetCampaignBehavior<FiefBarterBehavior>();

// 订阅会话启动
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义领地交易条款
});
```

## 参见

- [`../DiplomaticBartersBehavior`](../DiplomaticBartersBehavior) —— 同命名空间的外交交易。
- [`../GoldBarterBehavior`](../GoldBarterBehavior) —— 同命名空间的金币交易。
- [`../ItemBarterBehavior`](../ItemBarterBehavior) —— 同命名空间的物品交易。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../DiplomaticBartersBehavior`](../DiplomaticBartersBehavior) · [`../GoldBarterBehavior`](../GoldBarterBehavior) · [`../ItemBarterBehavior`](../ItemBarterBehavior) · [`../LiftSiegeBarterBehavior`](../LiftSiegeBarterBehavior)
- 父索引：[`../_index`](../_index)

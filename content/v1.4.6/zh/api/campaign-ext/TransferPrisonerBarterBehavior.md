---
title: "TransferPrisonerBarterBehavior"
description: "囚犯转移交易 Behavior：处理把囚犯从一个阵营转给另一个阵营的交易，是 BarterBehaviors 子命名空间里最轻量的之一（48 行）。"
---
# TransferPrisonerBarterBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TransferPrisonerBarterBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BarterBehaviors/TransferPrisonerBarterBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`TransferPrisonerBarterBehavior` 管**把囚犯从一个阵营转给另一个阵营**的交易：用囚犯换资源、换关系、换其他囚犯。它是 `BarterBehaviors` 子命名空间里最轻量的之一（48 行），因为转移的条款相对固定 —— 给囚犯，拿东西。

## 心智模型

**它是「囚犯转移交易的条款提供者」。**

- 它通过 `CheckForBarters(BarterData args)` 声明「我提供哪些囚犯转移的交易选项」。
- 它**不决定**交易怎么执行 —— 那是 BarterData 与交易系统的事。
- 它**不处理**囚犯本身 —— 囚犯的捕获与关押是战斗与俘虏系统的事。

**与 `SetPrisonerFreeBarterBehavior` 的区别**：那个是「释放囚犯」（囚犯自由了），这个是「转移囚犯」（囚犯换了个主人）。两者都涉及囚犯，但结果完全不同。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<TransferPrisonerBarterBehavior>();
```

### 典型用法

```csharp
// 订阅会话启动事件（与本 Behavior 的 RegisterEvents 同一模式，:12）
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义囚犯转移交易条款
});
```

### 坑

- **它不管囚犯捕获**。要改战斗中的俘虏逻辑，去 `BattleCampaignBehavior`。
- **它不管释放**。要释放囚犯，去 `SetPrisonerFreeBarterBehavior`。
- **条款是声明式的**。你声明「什么条件下提供什么选项」，不是「什么时候执行什么逻辑」。

## 关键成员

- `RegisterEvents()`（`TransferPrisonerBarterBehavior.cs:12`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`TransferPrisonerBarterBehavior.cs:18`）—— 存读私有状态。
- `CheckForBarters(BarterData args)`（`TransferPrisonerBarterBehavior.cs:23`）—— 声明本 Behavior 提供的交易选项。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors;

// 拿到 Behavior 实例
var transferBehavior = Campaign.Current.GetCampaignBehavior<TransferPrisonerBarterBehavior>();

// 订阅会话启动
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义囚犯转移交易条款
});
```

## 参见

- [`../SetPrisonerFreeBarterBehavior`](../SetPrisonerFreeBarterBehavior) —— 同命名空间的囚犯释放交易。
- [`../GoldBarterBehavior`](../GoldBarterBehavior) —— 同命名空间的金币交易。
- [`../ItemBarterBehavior`](../ItemBarterBehavior) —— 同命名空间的物品交易。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../DiplomaticBartersBehavior`](../DiplomaticBartersBehavior) · [`../FiefBarterBehavior`](../FiefBarterBehavior) · [`../GoldBarterBehavior`](../GoldBarterBehavior) · [`../ItemBarterBehavior`](../ItemBarterBehavior) · [`../SetPrisonerFreeBarterBehavior`](../SetPrisonerFreeBarterBehavior)
- 父索引：[`../_index`](../_index)

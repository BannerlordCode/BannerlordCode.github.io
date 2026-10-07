---
title: "SetPrisonerFreeBarterBehavior"
description: "释放囚犯交易 Behavior：处理以资源换囚犯释放的交易，是 BarterBehaviors 子命名空间里中等大小的一个（90 行）。"
---
# SetPrisonerFreeBarterBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class SetPrisonerFreeBarterBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BarterBehaviors/SetPrisonerFreeBarterBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`SetPrisonerFreeBarterBehavior` 管**用资源换囚犯释放**的交易：花钱或给物品让对方放人。它是 `BarterBehaviors` 子命名空间里中等大小的一个（90 行），因为囚犯释放涉及囚犯身份、所属阵营、释放条件等多个维度。

## 心智模型

**它是「释放囚犯交易的条款提供者」。**

- 它通过 `CheckForBarters(BarterData args)` 声明「我提供哪些释放囚犯的交易选项」。
- 它**不决定**交易怎么执行 —— 那是 BarterData 与交易系统的事。
- 它**不处理**囚犯本身 —— 囚犯的捕获与关押是战斗与俘虏系统的事。

**为什么比金币交易复杂**：释放囚犯不是简单的「给钱放人」—— 要考虑囚犯是谁、属于哪个阵营、释放后去哪、是否会影响关系。这些判断都在 `CheckForBarters` 里。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<SetPrisonerFreeBarterBehavior>();
```

### 典型用法

```csharp
// 订阅会话启动事件（与本 Behavior 的 RegisterEvents 同一模式，:14）
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义释放囚犯交易条款
});
```

### 坑

- **它不管囚犯捕获**。要改战斗中的俘虏逻辑，去 `BattleCampaignBehavior`。
- **它不管囚犯关押**。囚犯在队伍里怎么处理是俘虏系统的事。
- **条款是声明式的**。你声明「什么条件下提供什么选项」，不是「什么时候执行什么逻辑」。

## 关键成员

- `RegisterEvents()`（`SetPrisonerFreeBarterBehavior.cs:14`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`SetPrisonerFreeBarterBehavior.cs:20`）—— 存读私有状态。
- `CheckForBarters(BarterData args)`（`SetPrisonerFreeBarterBehavior.cs:25`）—— 声明本 Behavior 提供的交易选项。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors;

// 拿到 Behavior 实例
var prisonerBehavior = Campaign.Current.GetCampaignBehavior<SetPrisonerFreeBarterBehavior>();

// 订阅会话启动
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义释放囚犯交易条款
});
```

## 参见

- [`../TransferPrisonerBarterBehavior`](../TransferPrisonerBarterBehavior) —— 同命名空间的囚犯转移交易。
- [`../GoldBarterBehavior`](../GoldBarterBehavior) —— 同命名空间的金币交易。
- [`../ItemBarterBehavior`](../ItemBarterBehavior) —— 同命名空间的物品交易。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../DiplomaticBartersBehavior`](../DiplomaticBartersBehavior) · [`../FiefBarterBehavior`](../FiefBarterBehavior) · [`../GoldBarterBehavior`](../GoldBarterBehavior) · [`../ItemBarterBehavior`](../ItemBarterBehavior) · [`../TransferPrisonerBarterBehavior`](../TransferPrisonerBarterBehavior)
- 父索引：[`../_index`](../_index)

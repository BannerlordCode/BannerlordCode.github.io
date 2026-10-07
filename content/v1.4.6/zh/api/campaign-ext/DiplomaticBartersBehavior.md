---
title: "DiplomaticBartersBehavior"
description: "外交交易 Behavior：处理以外交为目的的交易（停战、结盟、领土），是 BarterBehaviors 子命名空间里最大的一个。"
---
# DiplomaticBartersBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DiplomaticBartersBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BarterBehaviors/DiplomaticBartersBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`DiplomaticBartersBehavior` 管**以外交为目的的交易**：停战、结盟、领土割让这类「用资源换政治结果」的交互。它是 `BarterBehaviors` 子命名空间里最大的 Behavior（298 行），因为外交交易的条款组合比普通交易多得多。

## 心智模型

**它是「外交交易条款的提供者」，不是「交易系统的引擎」。**

- 它通过 `CheckForBarters(BarterData)` 声明「我提供哪些交易选项」。
- 它**不决定**交易怎么执行 —— 那是 BarterData 与交易系统的事。
- 它**不处理**普通物品交易 —— 那是 `ItemBarterBehavior`。

**为什么单独一个 Behavior**：外交交易的条款依赖大量战役状态（关系值、战争状态、领土归属），把这些判断集中在一个 Behavior 里，比散在各处更容易维护。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<DiplomaticBartersBehavior>();
```

### 典型用法

```csharp
// 订阅会话启动事件（与本 Behavior 的 RegisterEvents 同一模式，:16）
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义外交交易选项
});
```

### 坑

- **它不管普通交易**。要加物品/金币交易，去 `ItemBarterBehavior` / `GoldBarterBehavior`。
- **它不管战斗**。要改战斗结果，去 `BattleCampaignBehavior`。
- **条款是声明式的**。你声明「什么条件下提供什么选项」，不是「什么时候执行什么逻辑」。

## 关键成员

- `RegisterEvents()`（`DiplomaticBartersBehavior.cs:16`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`DiplomaticBartersBehavior.cs:273`）—— 存读私有状态。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors;

// 拿到 Behavior 实例
var diplomaticBehavior = Campaign.Current.GetCampaignBehavior<DiplomaticBartersBehavior>();

// 订阅会话启动
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义外交交易条款
});
```

## 参见

- [`../FiefBarterBehavior`](../FiefBarterBehavior) —— 同命名空间的领地交易。
- [`../GoldBarterBehavior`](../GoldBarterBehavior) —— 同命名空间的金币交易。
- [`../ItemBarterBehavior`](../ItemBarterBehavior) —— 同命名空间的物品交易。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../FiefBarterBehavior`](../FiefBarterBehavior) · [`../GoldBarterBehavior`](../GoldBarterBehavior) · [`../ItemBarterBehavior`](../ItemBarterBehavior) · [`../LiftSiegeBarterBehavior`](../LiftSiegeBarterBehavior)
- 父索引：[`../_index`](../_index)

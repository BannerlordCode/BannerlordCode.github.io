---
title: "CampaignBattleRecoveryBehavior"
description: "战后恢复 Behavior：处理战斗结束后的伤亡恢复、部队重整与状态清理，是 BattleCampaignBehavior 的下游。"
---
# CampaignBattleRecoveryBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignBattleRecoveryBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignBattleRecoveryBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`CampaignBattleRecoveryBehavior` 管**战斗结束后的恢复**：伤亡恢复、部队重整、状态清理。它是 117 行的 Behavior，是 `BattleCampaignBehavior` 的下游 —— 战斗打完，由它收尾。

## 心智模型

**它是「战斗的善后处理者」。**

- 它决定**战后部队怎么恢复、状态怎么清理**。
- 它**不决定**战斗怎么打 —— 那是 `Mission` 层与 `BattleCampaignBehavior` 的事。
- 它**不处理**俘虏 —— 那是 `SetPrisonerFreeBarterBehavior` / `TransferPrisonerBarterBehavior`。

**为什么单独一个 Behavior**：战后恢复涉及多个系统（伤员、士气、补给、部队编制），集中在一个 Behavior 里比散在各处更容易维护。这也是 `BattleCampaignBehavior` 只有 71 行的原因 —— 它把善后工作交给了这里。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<CampaignBattleRecoveryBehavior>();
```

### 典型用法

```csharp
// 订阅会话启动事件（与本 Behavior 的 RegisterEvents 同一模式，:16）
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里观察或影响战后恢复
});
```

### 坑

- **它不管战斗过程**。要改战斗怎么打，去 `Mission` 层的类。
- **它不管俘虏**。要改俘虏处理，去 `SetPrisonerFreeBarterBehavior` / `TransferPrisonerBarterBehavior`。
- **它不管建筑**。要改建筑状态，去 `BuildingsCampaignBehavior`。

## 关键成员

- `RegisterEvents()`（`CampaignBattleRecoveryBehavior.cs:16`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`CampaignBattleRecoveryBehavior.cs:45`）—— 存读私有状态。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 拿到 Behavior 实例
var recoveryBehavior = Campaign.Current.GetCampaignBehavior<CampaignBattleRecoveryBehavior>();

// 订阅会话启动
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里观察战后恢复流程
});
```

## 参见

- [`../BattleCampaignBehavior`](../BattleCampaignBehavior) —— 战斗接缝，本 Behavior 的上游。
- [`../BuildingsCampaignBehavior`](../BuildingsCampaignBehavior) —— 建筑系统，战后状态相关。
- [`../BannerCampaignBehavior`](../BannerCampaignBehavior) —— 同属战役层 Behavior。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../BattleCampaignBehavior`](../BattleCampaignBehavior) · [`../BuildingsCampaignBehavior`](../BuildingsCampaignBehavior) · [`../BannerCampaignBehavior`](../BannerCampaignBehavior)
- 父索引：[`../_index`](../_index)

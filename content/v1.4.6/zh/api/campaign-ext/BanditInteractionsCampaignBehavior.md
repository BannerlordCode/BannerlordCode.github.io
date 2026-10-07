---
title: "BanditInteractionsCampaignBehavior"
description: "土匪交互 Behavior：处理玩家与土匪的对话、贿赂与招募，是「招安土匪」这类玩法的落点。"
---
# BanditInteractionsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BanditInteractionsCampaignBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BanditInteractionsCampaignBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`BanditInteractionsCampaignBehavior` 管玩家与**土匪部队**之间的交互：对话选项、贿赂放行、招募入伙。它是「把土匪变成自己人」这类玩法的系统落点。

它是本批里少数带**显式构造函数**的 Behavior（`:26`）—— 大多数 Behavior 不需要构造函数，这个需要，说明它持有需要在创建时初始化的状态。

## 心智模型

**它是「交互入口」，不是「决策者」。**

- 它负责**接收**玩家与土匪的交互事件，并把结果写进战役状态。
- 它**不决定**土匪 AI 怎么走 —— 那是 `AiLandBanditPatrollingBehavior` 的事。
- 它**不决定**土匪怎么刷新 —— 那是 `BanditSpawnCampaignBehavior` 的事。

**为什么有显式构造函数**：`CampaignBehaviorBase` 的子类通常靠 `RegisterEvents` / `SyncData` 两个 override 工作，不需要构造函数。这个 Behavior 在 `:26` 显式声明了构造函数，说明它要在创建时初始化自己的字段（比如缓存或配置）。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<BanditInteractionsCampaignBehavior>();
```

### 典型用法

```csharp
// 订阅会话启动事件（与本 Behavior 的 OnSessionLaunched 同一模式，:32）
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, OnLaunched);

private void OnLaunched(CampaignGameStarter starter)
{
    // 在这里注册自己的交互选项
}
```

### 坑

- **它不管 AI**。要改土匪的行为模式，去 `AiLandBanditPatrollingBehavior`，不是这里。
- **它不管刷新**。要改土匪巢穴的生成节奏，去 `BanditSpawnCampaignBehavior`。
- **构造函数有内容**。如果你继承或替换这个 Behavior，注意它的构造函数里做了什么 —— 不要假设它是空的。

## 关键成员

- `BanditInteractionsCampaignBehavior()`（`BanditInteractionsCampaignBehavior.cs:26`）—— 显式构造函数，初始化 Behavior 自有状态。
- `OnSessionLaunched(CampaignGameStarter)`（`BanditInteractionsCampaignBehavior.cs:32`）—— 会话启动回调，注册交互选项的时机。
- `RegisterEvents()`（`BanditInteractionsCampaignBehavior.cs:38`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`BanditInteractionsCampaignBehavior.cs:45`）—— 存读私有状态。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 拿到 Behavior 实例
var banditBehavior = Campaign.Current.GetCampaignBehavior<BanditInteractionsCampaignBehavior>();

// 订阅会话启动，注册自定义交互
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里挂你自己的对话选项
});
```

## 参见

- [`../BanditInteractionsCampaignBehaviorTypeDefiner`](../BanditInteractionsCampaignBehaviorTypeDefiner) —— 本 Behavior 的存档类型定义器。
- [`../BanditSpawnCampaignBehavior`](../BanditSpawnCampaignBehavior) —— 土匪巢穴的生成与刷新。
- [`../AiLandBanditPatrollingBehavior`](../AiLandBanditPatrollingBehavior) —— 土匪的巡逻 AI。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../AllianceCampaignBehaviorTypeDefiner`](../AllianceCampaignBehaviorTypeDefiner) · [`../BanditSpawnCampaignBehavior`](../BanditSpawnCampaignBehavior) · [`../BannerCampaignBehavior`](../BannerCampaignBehavior)
- 父索引：[`../_index`](../_index)

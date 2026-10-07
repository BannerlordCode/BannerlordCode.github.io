---
title: "BannerCampaignBehavior"
description: "旗帜系统 Behavior：管理旗帜的授予、展示与回收，是「以某势力名义行动」这类玩法的落点。"
---
# BannerCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BannerCampaignBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BannerCampaignBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`BannerCampaignBehavior` 管**旗帜（banner）系统**：旗帜的授予、展示与回收。旗帜是战役里代表「你以某个势力名义行动」的标识，影响外交观感与部分事件判定。

它是本批里中等大小的 Behavior（245 行），结构标准：两个 override 加若干事件回调。

## 心智模型

**它是「身份标识系统」，不是「外交系统」。**

- 它决定**旗帜的展示与回收**，不决定外交关系数值。
- 它**不处理**联盟/宣战 —— 那是 `AllianceCampaignBehavior`。
- 它**不处理**家族归属 —— 那是 `ChangeKingdomAction`。

**为什么旗帜重要**：在 Bannerlord 里，旗帜是「你代表谁」的视觉与系统标识。有旗帜时，部分事件与对话选项会按「代表某势力」处理；没有旗帜时，你只是独立佣兵。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<BannerCampaignBehavior>();
```

### 典型用法

```csharp
// 订阅事件（与本 Behavior 的 RegisterEvents 同一模式，:17）
CampaignEvents.MobilePartyCreated.AddNonSerializedListener(this, OnPartyCreated);

private void OnPartyCreated(MobileParty party)
{
    // 在这里观察或影响旗帜的授予
}
```

### 坑

- **它不管外交数值**。要改关系值，用 `ChangeRelationAction`。
- **它不管家族归属**。要换王国，用 `ChangeKingdomAction`。
- **旗帜与家族是两回事**。有旗帜不代表属于某家族，反之亦然。

## 关键成员

- `RegisterEvents()`（`BannerCampaignBehavior.cs:17`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`BannerCampaignBehavior.cs:29`）—— 存读私有状态。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 拿到 Behavior 实例
var bannerBehavior = Campaign.Current.GetCampaignBehavior<BannerCampaignBehavior>();

// 订阅部队创建事件
CampaignEvents.MobilePartyCreated.AddNonSerializedListener(this, party =>
{
    // 在这里观察旗帜与部队的关系
});
```

## 参见

- [`../AllianceCampaignBehavior`](../AllianceCampaignBehavior) —— 联盟系统，旗帜的外交对应面。
- [`../BanditInteractionsCampaignBehavior`](../BanditInteractionsCampaignBehavior) —— 土匪交互，同属战役层 Behavior。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../AllianceCampaignBehaviorTypeDefiner`](../AllianceCampaignBehaviorTypeDefiner) · [`../BanditInteractionsCampaignBehavior`](../BanditInteractionsCampaignBehavior) · [`../BanditSpawnCampaignBehavior`](../BanditSpawnCampaignBehavior)
- 父索引：[`../_index`](../_index)

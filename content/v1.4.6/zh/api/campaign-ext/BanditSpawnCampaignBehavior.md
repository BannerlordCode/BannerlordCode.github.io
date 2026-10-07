---
title: "BanditSpawnCampaignBehavior"
description: "土匪刷新 Behavior：管理土匪巢穴的生成与补充，控制地图上土匪的数量与分布节奏。"
---
# BanditSpawnCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BanditSpawnCampaignBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BanditSpawnCampaignBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`BanditSpawnCampaignBehavior` 管**土匪部队从哪来、多久来一次**。它负责在地图上生成新的土匪巢穴（hideout）、补充被消灭的土匪部队，并决定刷新节奏。

它是本批里较大的文件之一（692 行），因为「什么时候该刷一波土匪」这件事比看起来复杂 —— 要考虑地图区域、玩家进度、已有土匪数量。

## 心智模型

**它是「人口系统」，不是「战斗系统」。**

- 它决定**土匪部队的存在与数量**，不决定它们怎么打。
- 它**不处理**玩家与土匪的对话 —— 那是 `BanditInteractionsCampaignBehavior`。
- 它**不处理**土匪的巡逻路线 —— 那是 `AiLandBanditPatrollingBehavior`。

**核心张力**：土匪太少，玩家没东西打、没经验刷；土匪太多，地图被堵、商路中断。这个 Behavior 的全部逻辑都在调这个平衡。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<BanditSpawnCampaignBehavior>();
```

### 典型用法

```csharp
// 订阅定居点进入事件（与本 Behavior 的 OnSettlementEntered 同一模式，:216）
CampaignEvents.OnSettlementEnteredEvent.AddNonSerializedListener(this, OnEntered);

private void OnEntered(MobileParty party, Settlement settlement, Hero hero)
{
    // 在这里观察或影响土匪刷新
}
```

### 坑

- **它不管交互**。要改玩家与土匪的对话/贿赂，去 `BanditInteractionsCampaignBehavior`。
- **它不管 AI**。要改土匪的巡逻行为，去 `AiLandBanditPatrollingBehavior`。
- **刷新节奏是全局调好的**。直接调它的生成方法会绕过平衡逻辑，可能导致土匪泛滥。

## 关键成员

- `RegisterEvents()`（`BanditSpawnCampaignBehavior.cs:99`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`BanditSpawnCampaignBehavior.cs:141`）—— 存读私有状态。
- `InitializeInitialHideouts()`（`BanditSpawnCampaignBehavior.cs:195`）—— 战役开始时生成初始土匪巢穴。
- `OnSettlementEntered(MobileParty, Settlement, Hero)`（`BanditSpawnCampaignBehavior.cs:216`）—— 玩家进入定居点时的回调。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 拿到 Behavior 实例
var spawnBehavior = Campaign.Current.GetCampaignBehavior<BanditSpawnCampaignBehavior>();

// 订阅定居点进入事件
CampaignEvents.OnSettlementEnteredEvent.AddNonSerializedListener(this, (party, settlement, hero) =>
{
    // 在这里观察土匪刷新与玩家位置的关系
});
```

## 参见

- [`../BanditInteractionsCampaignBehavior`](../BanditInteractionsCampaignBehavior) —— 玩家与土匪的交互（对话/贿赂/招募）。
- [`../AiLandBanditPatrollingBehavior`](../AiLandBanditPatrollingBehavior) —— 土匪的巡逻 AI。
- [`../BanditInteractionsCampaignBehaviorTypeDefiner`](../BanditInteractionsCampaignBehaviorTypeDefiner) —— 同族 Behavior 的存档类型定义器。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../AllianceCampaignBehaviorTypeDefiner`](../AllianceCampaignBehaviorTypeDefiner) · [`../BanditInteractionsCampaignBehavior`](../BanditInteractionsCampaignBehavior) · [`../BannerCampaignBehavior`](../BannerCampaignBehavior)
- 父索引：[`../_index`](../_index)

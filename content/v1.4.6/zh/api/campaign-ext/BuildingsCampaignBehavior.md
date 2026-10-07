---
title: "BuildingsCampaignBehavior"
description: "建筑系统 Behavior：管理城镇与城堡的建筑建造、升级与效果结算，是领地经营玩法的核心落点。"
---
# BuildingsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BuildingsCampaignBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BuildingsCampaignBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`BuildingsCampaignBehavior` 管**定居点建筑的建造、升级与效果结算**。城镇与城堡里的每座建筑（城墙、兵营、市场、工坊）都由它驱动：进度推进、等级提升、效果生效。

它是 206 行的中等 Behavior，是领地经营玩法的核心落点 —— mod 若要加自定义建筑或改建造节奏，这里是入口。

## 心智模型

**它是「建筑进度的时间驱动者」。**

- 它决定**建筑何时推进、何时完成**（按游戏时间）。
- 它**不定义**建筑的数据 —— 建筑定义在 XML 里，这个 Behavior 只管运行时推进。
- 它**不处理**建筑被摧毁** —— 领地易主是 `ChangeOwnerOfSettlementAction` 的事。

**为什么需要它**：建筑不是瞬间完成的，需要有人按游戏时间推进进度。这个 Behavior 就是那个「时钟」—— 每次 tick 检查所有正在建造的项目，推进它们。

## 怎么用

### 怎么拿到

```csharp
var behavior = Campaign.Current.GetCampaignBehavior<BuildingsCampaignBehavior>();
```

### 典型用法

```csharp
// 订阅会话启动事件（与本 Behavior 的 RegisterEvents 同一模式，:20）
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义建筑相关逻辑
});
```

### 坑

- **它不管建筑定义**。要加新建筑类型，改 XML 与建筑模型，不是这里。
- **它不管领地易主**。要改领地归属，去 `ChangeOwnerOfSettlementAction`。
- **它不管战斗**。要改战斗结果，去 `BattleCampaignBehavior`。

## 关键成员

- `RegisterEvents()`（`BuildingsCampaignBehavior.cs:20`）—— 挂事件订阅。
- `SyncData(IDataStore)`（`BuildingsCampaignBehavior.cs:38`）—— 存读私有状态。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 拿到 Behavior 实例
var buildingsBehavior = Campaign.Current.GetCampaignBehavior<BuildingsCampaignBehavior>();

// 订阅会话启动
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    // 在这里注册自定义建筑逻辑
});
```

## 参见

- [`../BattleCampaignBehavior`](../BattleCampaignBehavior) —— 战斗系统，建筑（如城墙）的常见作用对象。
- [`../CampaignBattleRecoveryBehavior`](../CampaignBattleRecoveryBehavior) —— 战后恢复，与建筑状态相关。
- [`../BannerCampaignBehavior`](../BannerCampaignBehavior) —— 同属战役层 Behavior。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../BattleCampaignBehavior`](../BattleCampaignBehavior) · [`../CampaignBattleRecoveryBehavior`](../CampaignBattleRecoveryBehavior) · [`../BannerCampaignBehavior`](../BannerCampaignBehavior)
- 父索引：[`../_index`](../_index)

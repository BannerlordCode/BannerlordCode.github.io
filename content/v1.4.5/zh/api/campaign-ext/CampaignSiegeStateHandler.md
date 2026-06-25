---
title: "CampaignSiegeStateHandler"
description: "CampaignSiegeStateHandler 的自动生成类参考。"
---
# CampaignSiegeStateHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CampaignSiegeStateHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/CampaignSiegeStateHandler.cs`

## 概述

`CampaignSiegeStateHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `CampaignSiegeStateHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnRetreatMission
`public override void OnRetreatMission()`

**用途 / Purpose:** **用途 / Purpose:** 在 retreat mission 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignSiegeStateHandler 实例
CampaignSiegeStateHandler campaignSiegeStateHandler = ...;
campaignSiegeStateHandler.OnRetreatMission();
```

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission result ready 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignSiegeStateHandler 实例
CampaignSiegeStateHandler campaignSiegeStateHandler = ...;
campaignSiegeStateHandler.OnMissionResultReady(missionResult);
```

### OnSurrenderMission
`public override void OnSurrenderMission()`

**用途 / Purpose:** **用途 / Purpose:** 在 surrender mission 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignSiegeStateHandler 实例
CampaignSiegeStateHandler campaignSiegeStateHandler = ...;
campaignSiegeStateHandler.OnSurrenderMission();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<CampaignSiegeStateHandler>();
```

## 参见

- [本区域目录](../)
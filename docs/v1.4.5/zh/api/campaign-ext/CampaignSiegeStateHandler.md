<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignSiegeStateHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignSiegeStateHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CampaignSiegeStateHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/CampaignSiegeStateHandler.cs`

## 概述

`CampaignSiegeStateHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `CampaignSiegeStateHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnRetreatMission
`public override void OnRetreatMission()`

**用途 / Purpose:** 当 `retreat mission` 事件触发时调用此方法。

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**用途 / Purpose:** 当 `mission result ready` 事件触发时调用此方法。

### OnSurrenderMission
`public override void OnSurrenderMission()`

**用途 / Purpose:** 当 `surrender mission` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new CampaignSiegeStateHandler());
```

## 参见

- [完整类目录](../catalog)
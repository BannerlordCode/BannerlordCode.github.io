---
title: "MissionAudienceHandler"
description: "MissionAudienceHandler 的自动生成类参考。"
---
# MissionAudienceHandler

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionAudienceHandler : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionAudienceHandler.cs`

## 概述

`MissionAudienceHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionAudienceHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionAudienceHandler 实例
MissionAudienceHandler missionAudienceHandler = ...;
missionAudienceHandler.EarlyStart();
```

### OnInit
`public void OnInit()`

**用途 / Purpose:** 在 「init」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAudienceHandler 实例
MissionAudienceHandler missionAudienceHandler = ...;
missionAudienceHandler.OnInit();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAudienceHandler 实例
MissionAudienceHandler missionAudienceHandler = ...;
missionAudienceHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAudienceHandler 实例
MissionAudienceHandler missionAudienceHandler = ...;
missionAudienceHandler.OnMissionTick(0);
```

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**用途 / Purpose:** 在 「mission mode change」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAudienceHandler 实例
MissionAudienceHandler missionAudienceHandler = ...;
missionAudienceHandler.OnMissionModeChange(oldMissionMode, false);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAudienceHandler 实例
MissionAudienceHandler missionAudienceHandler = ...;
missionAudienceHandler.OnMissionScreenFinalize();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAudienceHandler>();
```

## 参见

- [本区域目录](../)
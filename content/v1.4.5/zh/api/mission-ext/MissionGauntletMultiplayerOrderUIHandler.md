---
title: "MissionGauntletMultiplayerOrderUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletMultiplayerOrderUIHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletMultiplayerOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMultiplayerOrderUIHandler : GauntletOrderUIHandler`
**Base:** `GauntletOrderUIHandler`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletMultiplayerOrderUIHandler.cs`

## 概述

`MissionGauntletMultiplayerOrderUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionGauntletMultiplayerOrderUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValidForTick` | `public override bool IsValidForTick { get; }` |

## 主要方法

### IsReady
`public override bool IsReady()`

**用途 / Purpose:** 处理 `is ready` 相关逻辑。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### InitializeInADisgustingManner
`public void InitializeInADisgustingManner()`

**用途 / Purpose:** 初始化 `in a disgusting manner` 的状态、资源或绑定。

### ValidateInADisgustingManner
`public void ValidateInADisgustingManner()`

**用途 / Purpose:** 处理 `validate in a disgusting manner` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionGauntletMultiplayerOrderUIHandler());
```

## 参见

- [完整类目录](../catalog)
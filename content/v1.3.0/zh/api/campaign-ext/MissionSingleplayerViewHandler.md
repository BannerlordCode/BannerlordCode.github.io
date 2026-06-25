---
title: "MissionSingleplayerViewHandler"
description: "MissionSingleplayerViewHandler 的自动生成类参考。"
---
# MissionSingleplayerViewHandler

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionSingleplayerViewHandler : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionSingleplayerViewHandler.cs`

## 概述

`MissionSingleplayerViewHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionSingleplayerViewHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 「mission screen initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionSingleplayerViewHandler 实例
MissionSingleplayerViewHandler missionSingleplayerViewHandler = ...;
missionSingleplayerViewHandler.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionSingleplayerViewHandler 实例
MissionSingleplayerViewHandler missionSingleplayerViewHandler = ...;
missionSingleplayerViewHandler.OnMissionScreenTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionSingleplayerViewHandler>();
```

## 参见

- [本区域目录](../)
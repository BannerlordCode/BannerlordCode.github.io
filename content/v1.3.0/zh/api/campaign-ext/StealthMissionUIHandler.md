---
title: "StealthMissionUIHandler"
description: "StealthMissionUIHandler 的自动生成类参考。"
---
# StealthMissionUIHandler

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class StealthMissionUIHandler : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/StealthMissionUIHandler.cs`

## 概述

`StealthMissionUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `StealthMissionUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthMissionUIHandler 实例
StealthMissionUIHandler stealthMissionUIHandler = ...;
stealthMissionUIHandler.OnMissionScreenTick(0);
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 在 object used 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthMissionUIHandler 实例
StealthMissionUIHandler stealthMissionUIHandler = ...;
stealthMissionUIHandler.OnObjectUsed(userAgent, usedObject);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<StealthMissionUIHandler>();
```

## 参见

- [本区域目录](../)
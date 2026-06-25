---
title: "WorkshopMissionHandler"
description: "WorkshopMissionHandler 的自动生成类参考。"
---
# WorkshopMissionHandler

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class WorkshopMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Towns/WorkshopMissionHandler.cs`

## 概述

`WorkshopMissionHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `WorkshopMissionHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WorkshopMissionHandler 实例
WorkshopMissionHandler workshopMissionHandler = ...;
workshopMissionHandler.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EarlyStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 WorkshopMissionHandler 实例
WorkshopMissionHandler workshopMissionHandler = ...;
workshopMissionHandler.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 WorkshopMissionHandler 实例
WorkshopMissionHandler workshopMissionHandler = ...;
workshopMissionHandler.AfterStart();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<WorkshopMissionHandler>();
```

## 参见

- [本区域目录](../)
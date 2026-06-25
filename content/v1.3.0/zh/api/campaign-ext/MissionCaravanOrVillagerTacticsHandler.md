---
title: "MissionCaravanOrVillagerTacticsHandler"
description: "MissionCaravanOrVillagerTacticsHandler 的自动生成类参考。"
---
# MissionCaravanOrVillagerTacticsHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionCaravanOrVillagerTacticsHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionCaravanOrVillagerTacticsHandler.cs`

## 概述

`MissionCaravanOrVillagerTacticsHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionCaravanOrVillagerTacticsHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionCaravanOrVillagerTacticsHandler 实例
MissionCaravanOrVillagerTacticsHandler missionCaravanOrVillagerTacticsHandler = ...;
missionCaravanOrVillagerTacticsHandler.EarlyStart();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionCaravanOrVillagerTacticsHandler>();
```

## 参见

- [本区域目录](../)
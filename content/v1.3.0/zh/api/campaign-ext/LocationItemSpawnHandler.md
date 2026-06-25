---
title: "LocationItemSpawnHandler"
description: "LocationItemSpawnHandler 的自动生成类参考。"
---
# LocationItemSpawnHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class LocationItemSpawnHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/LocationItemSpawnHandler.cs`

## 概述

`LocationItemSpawnHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `LocationItemSpawnHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 LocationItemSpawnHandler 实例
LocationItemSpawnHandler locationItemSpawnHandler = ...;
locationItemSpawnHandler.AfterStart();
```

### OnEntityRemoved
`public override void OnEntityRemoved(GameEntity entity)`

**用途 / Purpose:** 在 entity removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LocationItemSpawnHandler 实例
LocationItemSpawnHandler locationItemSpawnHandler = ...;
locationItemSpawnHandler.OnEntityRemoved(entity);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<LocationItemSpawnHandler>();
```

## 参见

- [本区域目录](../)
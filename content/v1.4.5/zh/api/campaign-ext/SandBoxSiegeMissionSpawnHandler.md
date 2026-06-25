---
title: "SandBoxSiegeMissionSpawnHandler"
description: "SandBoxSiegeMissionSpawnHandler 的自动生成类参考。"
---
# SandBoxSiegeMissionSpawnHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxSiegeMissionSpawnHandler : SandBoxMissionSpawnHandler`
**Base:** `SandBoxMissionSpawnHandler`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/SandBoxSiegeMissionSpawnHandler.cs`

## 概述

`SandBoxSiegeMissionSpawnHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `SandBoxSiegeMissionSpawnHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxSiegeMissionSpawnHandler 实例
SandBoxSiegeMissionSpawnHandler sandBoxSiegeMissionSpawnHandler = ...;
sandBoxSiegeMissionSpawnHandler.AfterStart();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<SandBoxSiegeMissionSpawnHandler>();
```

## 参见

- [本区域目录](../)
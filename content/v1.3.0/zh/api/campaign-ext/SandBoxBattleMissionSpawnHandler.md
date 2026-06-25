---
title: "SandBoxBattleMissionSpawnHandler"
description: "SandBoxBattleMissionSpawnHandler 的自动生成类参考。"
---
# SandBoxBattleMissionSpawnHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxBattleMissionSpawnHandler : SandBoxMissionSpawnHandler`
**Base:** `SandBoxMissionSpawnHandler`
**File:** `SandBox/Missions/MissionLogics/SandBoxBattleMissionSpawnHandler.cs`

## 概述

`SandBoxBattleMissionSpawnHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `SandBoxBattleMissionSpawnHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxBattleMissionSpawnHandler 实例
SandBoxBattleMissionSpawnHandler sandBoxBattleMissionSpawnHandler = ...;
sandBoxBattleMissionSpawnHandler.AfterStart();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<SandBoxBattleMissionSpawnHandler>();
```

## 参见

- [本区域目录](../)
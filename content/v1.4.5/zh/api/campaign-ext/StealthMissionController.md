---
title: "StealthMissionController"
description: "StealthMissionController 的自动生成类参考。"
---
# StealthMissionController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class StealthMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/StealthMissionController.cs`

## 概述

`StealthMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `StealthMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 StealthMissionController 实例
StealthMissionController stealthMissionController = ...;
stealthMissionController.AfterStart();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<StealthMissionController>();
```

## 参见

- [本区域目录](../)
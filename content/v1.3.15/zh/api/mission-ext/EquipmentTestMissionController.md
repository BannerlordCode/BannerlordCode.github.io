---
title: "EquipmentTestMissionController"
description: "EquipmentTestMissionController 的自动生成类参考。"
---
# EquipmentTestMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentTestMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/EquipmentTestMissionController.cs`

## 概述

`EquipmentTestMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `EquipmentTestMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 EquipmentTestMissionController 实例
EquipmentTestMissionController equipmentTestMissionController = ...;
equipmentTestMissionController.AfterStart();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<EquipmentTestMissionController>();
```

## 参见

- [本区域目录](../)
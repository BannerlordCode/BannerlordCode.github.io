---
title: "MultiplayerItemTestMissionController"
description: "MultiplayerItemTestMissionController 的自动生成类参考。"
---
# MultiplayerItemTestMissionController

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class MultiplayerItemTestMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SandBox/MultiplayerItemTestMissionController.cs`

## 概述

`MultiplayerItemTestMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `MultiplayerItemTestMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerItemTestMissionController 实例
MultiplayerItemTestMissionController multiplayerItemTestMissionController = ...;
multiplayerItemTestMissionController.AfterStart();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<MultiplayerItemTestMissionController>();
```

## 参见

- [本区域目录](../)
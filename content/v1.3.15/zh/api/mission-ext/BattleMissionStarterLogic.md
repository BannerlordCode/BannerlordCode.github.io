---
title: "BattleMissionStarterLogic"
description: "BattleMissionStarterLogic 的自动生成类参考。"
---
# BattleMissionStarterLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleMissionStarterLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleMissionStarterLogic.cs`

## 概述

`BattleMissionStarterLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BattleMissionStarterLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleMissionStarterLogic 实例
BattleMissionStarterLogic battleMissionStarterLogic = ...;
battleMissionStarterLogic.AfterStart();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleMissionStarterLogic>();
```

## 参见

- [本区域目录](../)
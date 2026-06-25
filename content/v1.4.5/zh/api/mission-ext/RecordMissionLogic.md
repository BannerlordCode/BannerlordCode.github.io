---
title: "RecordMissionLogic"
description: "RecordMissionLogic 的自动生成类参考。"
---
# RecordMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RecordMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/RecordMissionLogic.cs`

## 概述

`RecordMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `RecordMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RecordMissionLogic 实例
RecordMissionLogic recordMissionLogic = ...;
recordMissionLogic.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RecordMissionLogic 实例
RecordMissionLogic recordMissionLogic = ...;
recordMissionLogic.OnMissionTick(0);
```

### OnEndMissionInternal
`public override void OnEndMissionInternal()`

**用途 / Purpose:** 在 end mission internal 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RecordMissionLogic 实例
RecordMissionLogic recordMissionLogic = ...;
recordMissionLogic.OnEndMissionInternal();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<RecordMissionLogic>();
```

## 参见

- [本区域目录](../)
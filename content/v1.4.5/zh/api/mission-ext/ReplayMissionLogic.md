---
title: "ReplayMissionLogic"
description: "ReplayMissionLogic 的自动生成类参考。"
---
# ReplayMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReplayMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ReplayMissionLogic.cs`

## 概述

`ReplayMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `ReplayMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FileName` | `public string FileName { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ReplayMissionLogic 实例
ReplayMissionLogic replayMissionLogic = ...;
replayMissionLogic.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** **用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ReplayMissionLogic 实例
ReplayMissionLogic replayMissionLogic = ...;
replayMissionLogic.OnRemoveBehavior();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<ReplayMissionLogic>();
```

## 参见

- [本区域目录](../)
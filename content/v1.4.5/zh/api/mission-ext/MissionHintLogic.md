---
title: "MissionHintLogic"
description: "MissionHintLogic 的自动生成类参考。"
---
# MissionHintLogic

**Namespace:** TaleWorlds.MountAndBlade.Missions.MissionLogics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionHintLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.MissionLogics/MissionHintLogic.cs`

## 概述

`MissionHintLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionHintLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveHint` | `public MissionHint ActiveHint { get; }` |

## 主要方法

### MissionHintChangedDelegate
`public delegate void MissionHintChangedDelegate(MissionHint previousHint, MissionHint newHint)`

**用途 / Purpose:** 调用 MissionHintChangedDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionHintLogic 实例
MissionHintLogic missionHintLogic = ...;
missionHintLogic.MissionHintChangedDelegate(previousHint, newHint);
```

### SetActiveHint
`public void SetActiveHint(MissionHint hint)`

**用途 / Purpose:** 为 active hint 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionHintLogic 实例
MissionHintLogic missionHintLogic = ...;
missionHintLogic.SetActiveHint(hint);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 MissionHintLogic 实例
MissionHintLogic missionHintLogic = ...;
missionHintLogic.Clear();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionHintLogic>();
```

## 参见

- [本区域目录](../)
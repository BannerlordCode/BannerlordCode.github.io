---
title: "MissionAgentAlarmTargetVM"
description: "MissionAgentAlarmTargetVM 的自动生成类参考。"
---
# MissionAgentAlarmTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionAgentAlarmTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions/MissionAgentAlarmTargetVM.cs`

## 概述

`MissionAgentAlarmTargetVM` 位于 `SandBox.ViewModelCollection.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasCautiousness` | `public bool HasCautiousness { get; }` |
| `AlarmedBehaviorGroup` | `public AlarmedBehaviorGroup AlarmedBehaviorGroup { get; }` |
| `IsStealthModeEnabled` | `public bool IsStealthModeEnabled { get; set; }` |
| `IsMainAgentInVisibilityRange` | `public bool IsMainAgentInVisibilityRange { get; set; }` |
| `IsInVision` | `public bool IsInVision { get; set; }` |
| `IsSuspected` | `public bool IsSuspected { get; set; }` |
| `AlarmProgress` | `public int AlarmProgress { get; set; }` |
| `AlarmState` | `public string AlarmState { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |

## 主要方法

### UpdateValues
`public void UpdateValues()`

**用途 / Purpose:** 重新计算并更新 values 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionAgentAlarmTargetVM 实例
MissionAgentAlarmTargetVM missionAgentAlarmTargetVM = ...;
missionAgentAlarmTargetVM.UpdateValues();
```

### UpdateScreenPosition
`public void UpdateScreenPosition(Camera missionCamera)`

**用途 / Purpose:** 重新计算并更新 screen position 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionAgentAlarmTargetVM 实例
MissionAgentAlarmTargetVM missionAgentAlarmTargetVM = ...;
missionAgentAlarmTargetVM.UpdateScreenPosition(missionCamera);
```

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 remove 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionAgentAlarmTargetVM 实例
MissionAgentAlarmTargetVM missionAgentAlarmTargetVM = ...;
missionAgentAlarmTargetVM.ExecuteRemove();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionAgentAlarmTargetVM missionAgentAlarmTargetVM = ...;
missionAgentAlarmTargetVM.UpdateValues();
```

## 参见

- [本区域目录](../)
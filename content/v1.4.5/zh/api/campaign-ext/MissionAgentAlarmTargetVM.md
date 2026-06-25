---
title: "MissionAgentAlarmTargetVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentAlarmTargetVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentAlarmTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionAgentAlarmTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions/MissionAgentAlarmTargetVM.cs`

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

**用途 / Purpose:** 更新 `values` 的状态或数据。

### UpdateScreenPosition
`public void UpdateScreenPosition(Camera missionCamera)`

**用途 / Purpose:** 更新 `screen position` 的状态或数据。

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 `remove` 操作或流程。

## 使用示例

```csharp
var value = new MissionAgentAlarmTargetVM();
value.UpdateValues();
```

## 参见

- [完整类目录](../catalog)
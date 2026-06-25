---
title: "MissionDisguiseMarkerItemVM"
description: "MissionDisguiseMarkerItemVM 的自动生成类参考。"
---
# MissionDisguiseMarkerItemVM

**Namespace:** SandBox.ViewModelCollection.Missions.MainAgentDetection
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionDisguiseMarkerItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.MainAgentDetection/MissionDisguiseMarkerItemVM.cs`

## 概述

`MissionDisguiseMarkerItemVM` 位于 `SandBox.ViewModelCollection.Missions.MainAgentDetection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.MainAgentDetection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OffenseInfo` | `public DisguiseMissionLogic.ShadowingAgentOffenseInfo OffenseInfo { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `AlarmProgress` | `public int AlarmProgress { get; set; }` |
| `AlarmState` | `public string AlarmState { get; set; }` |
| `OffenseTypeIdentifier` | `public string OffenseTypeIdentifier { get; set; }` |
| `IsStealthModeEnabled` | `public bool IsStealthModeEnabled { get; set; }` |
| `IsSuspicious` | `public bool IsSuspicious { get; set; }` |
| `IsTarget` | `public bool IsTarget { get; set; }` |
| `IsInVision` | `public bool IsInVision { get; set; }` |
| `IsInVisibilityRange` | `public bool IsInVisibilityRange { get; set; }` |

## 主要方法

### RefreshVisuals
`public void RefreshVisuals()`

**用途 / Purpose:** **用途 / Purpose:** 使 visuals 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionDisguiseMarkerItemVM 实例
MissionDisguiseMarkerItemVM missionDisguiseMarkerItemVM = ...;
missionDisguiseMarkerItemVM.RefreshVisuals();
```

### UpdatePosition
`public void UpdatePosition()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 position 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionDisguiseMarkerItemVM 实例
MissionDisguiseMarkerItemVM missionDisguiseMarkerItemVM = ...;
missionDisguiseMarkerItemVM.UpdatePosition();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionDisguiseMarkerItemVM missionDisguiseMarkerItemVM = ...;
missionDisguiseMarkerItemVM.RefreshVisuals();
```

## 参见

- [本区域目录](../)
---
title: "MissionLosingTargetVM"
description: "MissionLosingTargetVM 的自动生成类参考。"
---
# MissionLosingTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.MainAgentDetection
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionLosingTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.MainAgentDetection/MissionLosingTargetVM.cs`

## 概述

`MissionLosingTargetVM` 位于 `SandBox.ViewModelCollection.Missions.MainAgentDetection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.MainAgentDetection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsLosingTarget` | `public bool IsLosingTarget { get; set; }` |
| `LosingTargetRatio` | `public float LosingTargetRatio { get; set; }` |
| `LosingTargetWarningText` | `public string LosingTargetWarningText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionLosingTargetVM 实例
MissionLosingTargetVM missionLosingTargetVM = ...;
missionLosingTargetVM.RefreshValues();
```

### UpdateLosingTargetValues
`public void UpdateLosingTargetValues(bool isLosingTarget, float losingTargetTimer, float losingTargetTreshold)`

**用途 / Purpose:** 重新计算并更新 losing target values 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionLosingTargetVM 实例
MissionLosingTargetVM missionLosingTargetVM = ...;
missionLosingTargetVM.UpdateLosingTargetValues(false, 0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionLosingTargetVM missionLosingTargetVM = ...;
missionLosingTargetVM.RefreshValues();
```

## 参见

- [本区域目录](../)
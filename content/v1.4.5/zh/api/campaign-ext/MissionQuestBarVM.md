---
title: "MissionQuestBarVM"
description: "MissionQuestBarVM 的自动生成类参考。"
---
# MissionQuestBarVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionQuestBarVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions/MissionQuestBarVM.cs`

## 概述

`MissionQuestBarVM` 位于 `SandBox.ViewModelCollection.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasQuestLevel` | `public bool HasQuestLevel { get; set; }` |
| `MinimumQuestLevel` | `public float MinimumQuestLevel { get; set; }` |
| `MaximumQuestLevel` | `public float MaximumQuestLevel { get; set; }` |
| `CurrentQuestLevel` | `public float CurrentQuestLevel { get; set; }` |
| `CurrentQuestLevelRatio` | `public float CurrentQuestLevelRatio { get; set; }` |

## 主要方法

### UpdateQuestValues
`public void UpdateQuestValues(float minDetectionLevel, float maxDetectionLevel, float currentDetectionLevel)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 quest values 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionQuestBarVM 实例
MissionQuestBarVM missionQuestBarVM = ...;
missionQuestBarVM.UpdateQuestValues(0, 0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionQuestBarVM missionQuestBarVM = ...;
missionQuestBarVM.UpdateQuestValues(0, 0, 0);
```

## 参见

- [本区域目录](../)
---
title: "MainAgentDetectionVM"
description: "MainAgentDetectionVM 的自动生成类参考。"
---
# MainAgentDetectionVM

**Namespace:** SandBox.ViewModelCollection.Missions.MainAgentDetection
**Module:** SandBox.ViewModelCollection
**Type:** `public class MainAgentDetectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.MainAgentDetection/MainAgentDetectionVM.cs`

## 概述

`MainAgentDetectionVM` 位于 `SandBox.ViewModelCollection.Missions.MainAgentDetection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.MainAgentDetection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasDetection` | `public bool HasDetection { get; set; }` |
| `HasReachedSuspicionTreshold` | `public bool HasReachedSuspicionTreshold { get; set; }` |
| `MinimumDetectionLevel` | `public float MinimumDetectionLevel { get; set; }` |
| `MaximumDetectionLevel` | `public float MaximumDetectionLevel { get; set; }` |
| `CurrentDetectionLevel` | `public float CurrentDetectionLevel { get; set; }` |
| `CurrentDetectionLevelRatio` | `public float CurrentDetectionLevelRatio { get; set; }` |
| `SuspicionFullText` | `public string SuspicionFullText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MainAgentDetectionVM 实例
MainAgentDetectionVM mainAgentDetectionVM = ...;
mainAgentDetectionVM.RefreshValues();
```

### UpdateDetectionValues
`public void UpdateDetectionValues(float minDetectionLevel, float maxDetectionLevel, float currentDetectionLevel)`

**用途 / Purpose:** 重新计算并更新 「detection values」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MainAgentDetectionVM 实例
MainAgentDetectionVM mainAgentDetectionVM = ...;
mainAgentDetectionVM.UpdateDetectionValues(0, 0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MainAgentDetectionVM mainAgentDetectionVM = ...;
mainAgentDetectionVM.RefreshValues();
```

## 参见

- [本区域目录](../)
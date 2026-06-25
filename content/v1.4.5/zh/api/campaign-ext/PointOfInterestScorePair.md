---
title: "PointOfInterestScorePair"
description: "PointOfInterestScorePair 的自动生成类参考。"
---
# PointOfInterestScorePair

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class PointOfInterestScorePair`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionPathGenerationLogic.cs`

## 概述

`PointOfInterestScorePair` 位于 `SandBox.Missions.MissionLogics`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.MissionLogics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Clone
`public PointOfInterestScorePair Clone()`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 PointOfInterestScorePair 实例
PointOfInterestScorePair pointOfInterestScorePair = ...;
var result = pointOfInterestScorePair.Clone();
```

### AddToData
`public void AddToData(PointOfInterestBaseData pointOfInterestToAdd)`

**用途 / Purpose:** 将 「to data」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PointOfInterestScorePair 实例
PointOfInterestScorePair pointOfInterestScorePair = ...;
pointOfInterestScorePair.AddToData(pointOfInterestToAdd);
```

### IsDataEqualTo
`public bool IsDataEqualTo(PointOfInterestScorePair other, PointOfInterestBaseData newDataToAdd)`

**用途 / Purpose:** 判断当前对象是否处于 「data equal to」 状态或条件。

```csharp
// 先通过子系统 API 拿到 PointOfInterestScorePair 实例
PointOfInterestScorePair pointOfInterestScorePair = ...;
var result = pointOfInterestScorePair.IsDataEqualTo(other, newDataToAdd);
```

### IsBetterThan
`public bool IsBetterThan(PointOfInterestScorePair other)`

**用途 / Purpose:** 判断当前对象是否处于 「better than」 状态或条件。

```csharp
// 先通过子系统 API 拿到 PointOfInterestScorePair 实例
PointOfInterestScorePair pointOfInterestScorePair = ...;
var result = pointOfInterestScorePair.IsBetterThan(other);
```

### IsSufficient
`public bool IsSufficient()`

**用途 / Purpose:** 判断当前对象是否处于 「sufficient」 状态或条件。

```csharp
// 先通过子系统 API 拿到 PointOfInterestScorePair 实例
PointOfInterestScorePair pointOfInterestScorePair = ...;
var result = pointOfInterestScorePair.IsSufficient();
```

### ReOrderDataAccordingToPathRatios
`public void ReOrderDataAccordingToPathRatios()`

**用途 / Purpose:** 处理与 「re order data according to path ratios」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PointOfInterestScorePair 实例
PointOfInterestScorePair pointOfInterestScorePair = ...;
pointOfInterestScorePair.ReOrderDataAccordingToPathRatios();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PointOfInterestScorePair pointOfInterestScorePair = ...;
pointOfInterestScorePair.Clone();
```

## 参见

- [本区域目录](../)
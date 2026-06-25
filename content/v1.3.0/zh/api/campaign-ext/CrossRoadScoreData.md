---
title: "CrossRoadScoreData"
description: "CrossRoadScoreData 的自动生成类参考。"
---
# CrossRoadScoreData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CrossRoadScoreData : MissionPathGenerationLogic.PointOfInterestBaseData`
**Base:** `MissionPathGenerationLogic.PointOfInterestBaseData`
**File:** `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`

## 概述

`CrossRoadScoreData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CrossRoadScoreData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 读取并返回当前对象中 point of interest type 的结果。

```csharp
// 先通过子系统 API 拿到 CrossRoadScoreData 实例
CrossRoadScoreData crossRoadScoreData = ...;
var result = crossRoadScoreData.GetPointOfInterestType();
```

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**用途 / Purpose:** 读取并返回当前对象中 position and radius pairs 的结果。

```csharp
// 先通过子系统 API 拿到 CrossRoadScoreData 实例
CrossRoadScoreData crossRoadScoreData = ...;
var result = crossRoadScoreData.GetPositionAndRadiusPairs();
```

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 判断当前对象是否处于 in radius 状态或条件。

```csharp
// 先通过子系统 API 拿到 CrossRoadScoreData 实例
CrossRoadScoreData crossRoadScoreData = ...;
var result = crossRoadScoreData.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 读取并返回当前对象中 location ratio 的结果。

```csharp
// 先通过子系统 API 拿到 CrossRoadScoreData 实例
CrossRoadScoreData crossRoadScoreData = ...;
var result = crossRoadScoreData.GetLocationRatio();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
CrossRoadScoreData entry = ...;
```

## 参见

- [本区域目录](../)
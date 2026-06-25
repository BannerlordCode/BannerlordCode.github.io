---
title: "LookBackPointData"
description: "LookBackPointData 的自动生成类参考。"
---
# LookBackPointData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class LookBackPointData : MissionPathGenerationLogic.PointOfInterestBaseData`
**Base:** `MissionPathGenerationLogic.PointOfInterestBaseData`
**File:** `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`

## 概述

`LookBackPointData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `LookBackPointData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 point of interest type 的结果。

```csharp
// 先通过子系统 API 拿到 LookBackPointData 实例
LookBackPointData lookBackPointData = ...;
var result = lookBackPointData.GetPointOfInterestType();
```

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 position and radius pairs 的结果。

```csharp
// 先通过子系统 API 拿到 LookBackPointData 实例
LookBackPointData lookBackPointData = ...;
var result = lookBackPointData.GetPositionAndRadiusPairs();
```

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 in radius 状态或条件。

```csharp
// 先通过子系统 API 拿到 LookBackPointData 实例
LookBackPointData lookBackPointData = ...;
var result = lookBackPointData.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 location ratio 的结果。

```csharp
// 先通过子系统 API 拿到 LookBackPointData 实例
LookBackPointData lookBackPointData = ...;
var result = lookBackPointData.GetLocationRatio();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
LookBackPointData entry = ...;
```

## 参见

- [本区域目录](../)
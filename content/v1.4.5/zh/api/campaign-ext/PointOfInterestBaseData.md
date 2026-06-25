---
title: "PointOfInterestBaseData"
description: "PointOfInterestBaseData 的自动生成类参考。"
---
# PointOfInterestBaseData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public abstract class PointOfInterestBaseData`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionPathGenerationLogic.cs`

## 概述

`PointOfInterestBaseData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PointOfInterestBaseData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPointOfInterestType
`public abstract PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 读取并返回当前对象中 point of interest type 的结果。

```csharp
// 先通过子系统 API 拿到 PointOfInterestBaseData 实例
PointOfInterestBaseData pointOfInterestBaseData = ...;
var result = pointOfInterestBaseData.GetPointOfInterestType();
```

### IsInRadius
`public abstract bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 判断当前对象是否处于 in radius 状态或条件。

```csharp
// 先通过子系统 API 拿到 PointOfInterestBaseData 实例
PointOfInterestBaseData pointOfInterestBaseData = ...;
var result = pointOfInterestBaseData.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public abstract float GetLocationRatio()`

**用途 / Purpose:** 读取并返回当前对象中 location ratio 的结果。

```csharp
// 先通过子系统 API 拿到 PointOfInterestBaseData 实例
PointOfInterestBaseData pointOfInterestBaseData = ...;
var result = pointOfInterestBaseData.GetLocationRatio();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PointOfInterestBaseData instance = ...;
```

## 参见

- [本区域目录](../)
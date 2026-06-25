---
title: "MissionPathGenerationLogic"
description: "MissionPathGenerationLogic 的自动生成类参考。"
---
# MissionPathGenerationLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionPathGenerationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionPathGenerationLogic.cs`

## 概述

`MissionPathGenerationLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionPathGenerationLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ReverseClone
`public NavigationPathData ReverseClone()`

**用途 / Purpose:** 处理与 「reverse clone」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.ReverseClone();
```

### InitializeUsablePoints
`public void InitializeUsablePoints(List<UsableMachine> allUsableMachines)`

**用途 / Purpose:** 为 「usable points」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.InitializeUsablePoints(allUsableMachines);
```

### GetPointOfInterestType
`public abstract PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 读取并返回当前对象中 「point of interest type」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### IsInRadius
`public abstract bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 判断当前对象是否处于 「in radius」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public abstract float GetLocationRatio()`

**用途 / Purpose:** 读取并返回当前对象中 「location ratio」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 读取并返回当前对象中 「point of interest type」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 判断当前对象是否处于 「in radius」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 读取并返回当前对象中 「location ratio」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 读取并返回当前对象中 「point of interest type」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 判断当前对象是否处于 「in radius」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 读取并返回当前对象中 「location ratio」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 读取并返回当前对象中 「point of interest type」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 判断当前对象是否处于 「in radius」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 读取并返回当前对象中 「location ratio」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 读取并返回当前对象中 「point of interest type」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 判断当前对象是否处于 「in radius」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 读取并返回当前对象中 「location ratio」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### Clone
`public PointOfInterestScorePair Clone()`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.Clone();
```

### AddToData
`public void AddToData(PointOfInterestBaseData pointOfInterestToAdd)`

**用途 / Purpose:** 将 「to data」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.AddToData(pointOfInterestToAdd);
```

### IsDataEqualTo
`public bool IsDataEqualTo(PointOfInterestScorePair other, PointOfInterestBaseData newDataToAdd)`

**用途 / Purpose:** 判断当前对象是否处于 「data equal to」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsDataEqualTo(other, newDataToAdd);
```

### IsBetterThan
`public bool IsBetterThan(PointOfInterestScorePair other)`

**用途 / Purpose:** 判断当前对象是否处于 「better than」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsBetterThan(other);
```

### IsSufficient
`public bool IsSufficient()`

**用途 / Purpose:** 判断当前对象是否处于 「sufficient」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsSufficient();
```

### ReOrderDataAccordingToPathRatios
`public void ReOrderDataAccordingToPathRatios()`

**用途 / Purpose:** 处理与 「re order data according to path ratios」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.ReOrderDataAccordingToPathRatios();
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 在 「object used」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.OnObjectUsed(userAgent, usedObject);
```

### InitializeBehavior
`public void InitializeBehavior()`

**用途 / Purpose:** 为 「behavior」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.InitializeBehavior();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.OnMissionTick(0);
```

### GetAllPossiblePaths
`public List<PointOfInterestScorePair> GetAllPossiblePaths()`

**用途 / Purpose:** 读取并返回当前对象中 「all possible paths」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetAllPossiblePaths();
```

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)`

**用途 / Purpose:** 判断当前对象是否处于 「on left side」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionPathGenerationLogic 实例
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsOnLeftSide(lineA, lineB, point);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionPathGenerationLogic>();
```

## 参见

- [本区域目录](../)
---
title: "DefaultFormationDeploymentPlan"
description: "DefaultFormationDeploymentPlan 的自动生成类参考。"
---
# DefaultFormationDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultFormationDeploymentPlan : IFormationDeploymentPlan`
**Base:** `IFormationDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs`

## 概述

`DefaultFormationDeploymentPlan` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Class` | `public FormationClass Class { get; }` |
| `SpawnClass` | `public FormationClass SpawnClass { get; }` |
| `PlannedWidth` | `public float PlannedWidth { get; }` |
| `PlannedDepth` | `public float PlannedDepth { get; }` |
| `PlannedTroopCount` | `public int PlannedTroopCount { get; }` |
| `PlannedFootTroopCount` | `public int PlannedFootTroopCount { get; }` |
| `PlannedMountedTroopCount` | `public int PlannedMountedTroopCount { get; }` |
| `HasDimensions` | `public bool HasDimensions { get; }` |
| `HasSignificantMountedTroops` | `public bool HasSignificantMountedTroops { get; }` |

## 主要方法

### HasFrame
`public bool HasFrame()`

**用途 / Purpose:** 判断当前对象是否已经持有 「frame」。

```csharp
// 先通过子系统 API 拿到 DefaultFormationDeploymentPlan 实例
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.HasFrame();
```

### GetDefaultFlank
`public FormationDeploymentFlank GetDefaultFlank(int formationTroopCount, int infantryCount, bool spawnWithHorses = false)`

**用途 / Purpose:** 读取并返回当前对象中 「default flank」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultFormationDeploymentPlan 实例
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.GetDefaultFlank(0, 0, false);
```

### GetFlankDeploymentOrder
`public FormationDeploymentOrder GetFlankDeploymentOrder(int offset = 0)`

**用途 / Purpose:** 读取并返回当前对象中 「flank deployment order」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultFormationDeploymentPlan 实例
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.GetFlankDeploymentOrder(0);
```

### GetFrame
`public MatrixFrame GetFrame()`

**用途 / Purpose:** 读取并返回当前对象中 「frame」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultFormationDeploymentPlan 实例
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.GetFrame();
```

### GetPosition
`public Vec3 GetPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「position」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultFormationDeploymentPlan 实例
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.GetPosition();
```

### GetDirection
`public Vec2 GetDirection()`

**用途 / Purpose:** 读取并返回当前对象中 「direction」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultFormationDeploymentPlan 实例
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.GetDirection();
```

### CreateNewDeploymentWorldPosition
`public WorldPosition CreateNewDeploymentWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**用途 / Purpose:** 构建一个新的 「new deployment world position」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 DefaultFormationDeploymentPlan 实例
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.CreateNewDeploymentWorldPosition(worldPositionEnforcedCache);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 DefaultFormationDeploymentPlan 实例
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
defaultFormationDeploymentPlan.Clear();
```

### SetPlannedTroopCount
`public void SetPlannedTroopCount(int footTroopCount, int mountedTroopCount)`

**用途 / Purpose:** 为 「planned troop count」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DefaultFormationDeploymentPlan 实例
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
defaultFormationDeploymentPlan.SetPlannedTroopCount(0, 0);
```

### SetPlannedDimensions
`public void SetPlannedDimensions(float width, float depth)`

**用途 / Purpose:** 为 「planned dimensions」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DefaultFormationDeploymentPlan 实例
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
defaultFormationDeploymentPlan.SetPlannedDimensions(0, 0);
```

### SetFrame
`public void SetFrame(in WorldFrame frame)`

**用途 / Purpose:** 为 「frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DefaultFormationDeploymentPlan 实例
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
defaultFormationDeploymentPlan.SetFrame(frame);
```

### SetSpawnClass
`public void SetSpawnClass(FormationClass spawnClass)`

**用途 / Purpose:** 为 「spawn class」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DefaultFormationDeploymentPlan 实例
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
defaultFormationDeploymentPlan.SetSpawnClass(spawnClass);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
defaultFormationDeploymentPlan.HasFrame();
```

## 参见

- [本区域目录](../)
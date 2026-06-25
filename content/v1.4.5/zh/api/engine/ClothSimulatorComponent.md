---
title: "ClothSimulatorComponent"
description: "ClothSimulatorComponent 的自动生成类参考。"
---
# ClothSimulatorComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ClothSimulatorComponent : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ClothSimulatorComponent.cs`

## 概述

`ClothSimulatorComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ClothSimulatorComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetMaxDistanceMultiplier
`public void SetMaxDistanceMultiplier(float multiplier)`

**用途 / Purpose:** 为 「max distance multiplier」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetMaxDistanceMultiplier(0);
```

### SetForcedWind
`public void SetForcedWind(Vec3 windVector, bool isLocal)`

**用途 / Purpose:** 为 「forced wind」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetForcedWind(windVector, false);
```

### DisableForcedWind
`public void DisableForcedWind()`

**用途 / Purpose:** 处理与 「disable forced wind」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.DisableForcedWind();
```

### SetForcedGustStrength
`public void SetForcedGustStrength(float gustStrength)`

**用途 / Purpose:** 为 「forced gust strength」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetForcedGustStrength(0);
```

### SetResetRequired
`public void SetResetRequired()`

**用途 / Purpose:** 为 「reset required」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetResetRequired();
```

### DisableMorphAnimation
`public void DisableMorphAnimation()`

**用途 / Purpose:** 处理与 「disable morph animation」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.DisableMorphAnimation();
```

### SetMorphBuffer
`public void SetMorphBuffer(float morphKey)`

**用途 / Purpose:** 为 「morph buffer」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetMorphBuffer(0);
```

### GetNumberOfMorphKeys
`public int GetNumberOfMorphKeys()`

**用途 / Purpose:** 读取并返回当前对象中 「number of morph keys」 的结果。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
var result = clothSimulatorComponent.GetNumberOfMorphKeys();
```

### SetVectorArgument
`public void SetVectorArgument(float x, float y, float z, float w)`

**用途 / Purpose:** 为 「vector argument」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetVectorArgument(0, 0, 0, 0);
```

### GetMorphAnimLeftPoints
`public void GetMorphAnimLeftPoints(Vec3 leftPoints)`

**用途 / Purpose:** 读取并返回当前对象中 「morph anim left points」 的结果。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.GetMorphAnimLeftPoints(leftPoints);
```

### GetMorphAnimRightPoints
`public void GetMorphAnimRightPoints(Vec3 rightPoints)`

**用途 / Purpose:** 读取并返回当前对象中 「morph anim right points」 的结果。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.GetMorphAnimRightPoints(rightPoints);
```

### GetMorphAnimCenterPoints
`public void GetMorphAnimCenterPoints(Vec3 centerPoints)`

**用途 / Purpose:** 读取并返回当前对象中 「morph anim center points」 的结果。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.GetMorphAnimCenterPoints(centerPoints);
```

### SetForcedVelocity
`public void SetForcedVelocity(in Vec3 forcedVelocity)`

**用途 / Purpose:** 为 「forced velocity」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClothSimulatorComponent 实例
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetForcedVelocity(forcedVelocity);
```

## 使用示例

```csharp
var component = agent.GetComponent<ClothSimulatorComponent>();
```

## 参见

- [本区域目录](../)
---
title: "ClothSimulatorComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClothSimulatorComponent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClothSimulatorComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ClothSimulatorComponent : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/ClothSimulatorComponent.cs`

## 概述

`ClothSimulatorComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ClothSimulatorComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetMaxDistanceMultiplier
`public void SetMaxDistanceMultiplier(float multiplier)`

**用途 / Purpose:** 设置 `max distance multiplier` 的值或状态。

### SetForcedWind
`public void SetForcedWind(Vec3 windVector, bool isLocal)`

**用途 / Purpose:** 设置 `forced wind` 的值或状态。

### DisableForcedWind
`public void DisableForcedWind()`

**用途 / Purpose:** 处理 `disable forced wind` 相关逻辑。

### SetForcedGustStrength
`public void SetForcedGustStrength(float gustStrength)`

**用途 / Purpose:** 设置 `forced gust strength` 的值或状态。

### SetResetRequired
`public void SetResetRequired()`

**用途 / Purpose:** 设置 `reset required` 的值或状态。

### DisableMorphAnimation
`public void DisableMorphAnimation()`

**用途 / Purpose:** 处理 `disable morph animation` 相关逻辑。

### SetMorphBuffer
`public void SetMorphBuffer(float morphKey)`

**用途 / Purpose:** 设置 `morph buffer` 的值或状态。

### GetNumberOfMorphKeys
`public int GetNumberOfMorphKeys()`

**用途 / Purpose:** 获取 `number of morph keys` 的当前值。

### SetVectorArgument
`public void SetVectorArgument(float x, float y, float z, float w)`

**用途 / Purpose:** 设置 `vector argument` 的值或状态。

### GetMorphAnimLeftPoints
`public void GetMorphAnimLeftPoints(Vec3 leftPoints)`

**用途 / Purpose:** 获取 `morph anim left points` 的当前值。

### GetMorphAnimRightPoints
`public void GetMorphAnimRightPoints(Vec3 rightPoints)`

**用途 / Purpose:** 获取 `morph anim right points` 的当前值。

### GetMorphAnimCenterPoints
`public void GetMorphAnimCenterPoints(Vec3 centerPoints)`

**用途 / Purpose:** 获取 `morph anim center points` 的当前值。

### SetForcedVelocity
`public void SetForcedVelocity(in Vec3 forcedVelocity)`

**用途 / Purpose:** 设置 `forced velocity` 的值或状态。

## 使用示例

```csharp
var component = agent.GetComponent<ClothSimulatorComponent>();
```

## 参见

- [完整类目录](../catalog)
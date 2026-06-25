---
title: "Ballista"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Ballista`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Ballista

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Ballista : RangedSiegeWeapon, ISpawnable`
**Base:** `RangedSiegeWeapon`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Ballista.cs`

## 概述

`Ballista` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** 获取 `siege engine type` 的当前值。

### OnPilotAssignedDuringSpawn
`public override void OnPilotAssignedDuringSpawn()`

**用途 / Purpose:** 当 `pilot assigned during spawn` 事件触发时调用此方法。

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 创建一个 `a i behavior object` 实例或对象。

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 获取 `action text for standing point` 的当前值。

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**用途 / Purpose:** 处理 `process target value` 相关逻辑。

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**用途 / Purpose:** 获取 `target flags` 的当前值。

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**用途 / Purpose:** 获取 `target value` 的当前值。

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**用途 / Purpose:** 设置 `spawned from spawner` 的值或状态。

## 使用示例

```csharp
var value = new Ballista();
value.GetSiegeEngineType();
```

## 参见

- [完整类目录](../catalog)
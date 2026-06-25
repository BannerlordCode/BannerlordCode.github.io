---
title: "MPOnSpawnPerkEffectBase"
description: "MPOnSpawnPerkEffectBase 的自动生成类参考。"
---
# MPOnSpawnPerkEffectBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPOnSpawnPerkEffectBase : MPPerkEffectBase, IOnSpawnPerkEffect`
**Base:** `MPPerkEffectBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPOnSpawnPerkEffectBase.cs`

## 概述

`MPOnSpawnPerkEffectBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetTroopCountMultiplier
`public virtual float GetTroopCountMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 troop count multiplier 的结果。

```csharp
// 先通过子系统 API 拿到 MPOnSpawnPerkEffectBase 实例
MPOnSpawnPerkEffectBase mPOnSpawnPerkEffectBase = ...;
var result = mPOnSpawnPerkEffectBase.GetTroopCountMultiplier();
```

### GetExtraTroopCount
`public virtual int GetExtraTroopCount()`

**用途 / Purpose:** 读取并返回当前对象中 extra troop count 的结果。

```csharp
// 先通过子系统 API 拿到 MPOnSpawnPerkEffectBase 实例
MPOnSpawnPerkEffectBase mPOnSpawnPerkEffectBase = ...;
var result = mPOnSpawnPerkEffectBase.GetExtraTroopCount();
```

### GetDrivenPropertyBonusOnSpawn
`public virtual float GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**用途 / Purpose:** 读取并返回当前对象中 driven property bonus on spawn 的结果。

```csharp
// 先通过子系统 API 拿到 MPOnSpawnPerkEffectBase 实例
MPOnSpawnPerkEffectBase mPOnSpawnPerkEffectBase = ...;
var result = mPOnSpawnPerkEffectBase.GetDrivenPropertyBonusOnSpawn(false, drivenProperty, 0);
```

### GetHitpoints
`public virtual float GetHitpoints(bool isPlayer)`

**用途 / Purpose:** 读取并返回当前对象中 hitpoints 的结果。

```csharp
// 先通过子系统 API 拿到 MPOnSpawnPerkEffectBase 实例
MPOnSpawnPerkEffectBase mPOnSpawnPerkEffectBase = ...;
var result = mPOnSpawnPerkEffectBase.GetHitpoints(false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MPOnSpawnPerkEffectBase instance = ...;
```

## 参见

- [本区域目录](../)
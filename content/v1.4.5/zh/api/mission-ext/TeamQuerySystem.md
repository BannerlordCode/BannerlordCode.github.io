---
title: "TeamQuerySystem"
description: "TeamQuerySystem 的自动生成类参考。"
---
# TeamQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamQuerySystem`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamQuerySystem.cs`

## 概述

`TeamQuerySystem` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BattlePowerLogic` | `public IBattlePowerCalculationLogic BattlePowerLogic { get; }` |
| `CasualtyHandler` | `public CasualtyHandler CasualtyHandler { get; }` |
| `DeathCount` | `public int DeathCount { get; }` |
| `DeathByRangedCount` | `public int DeathByRangedCount { get; }` |

## 主要方法

### Expire
`public void Expire()`

**用途 / Purpose:** 调用 Expire 对应的操作。

```csharp
// 先通过子系统 API 拿到 TeamQuerySystem 实例
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.Expire();
```

### ExpireAfterUnitAddRemove
`public void ExpireAfterUnitAddRemove()`

**用途 / Purpose:** 调用 ExpireAfterUnitAddRemove 对应的操作。

```csharp
// 先通过子系统 API 拿到 TeamQuerySystem 实例
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.ExpireAfterUnitAddRemove();
```

### RegisterDeath
`public void RegisterDeath()`

**用途 / Purpose:** 将death注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 TeamQuerySystem 实例
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.RegisterDeath();
```

### RegisterDeathByRanged
`public void RegisterDeathByRanged()`

**用途 / Purpose:** 将death by ranged注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 TeamQuerySystem 实例
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.RegisterDeathByRanged();
```

### GetLocalAllyPower
`public float GetLocalAllyPower(Vec2 target)`

**用途 / Purpose:** 读取并返回当前对象中 local ally power 的结果。

```csharp
// 先通过子系统 API 拿到 TeamQuerySystem 实例
TeamQuerySystem teamQuerySystem = ...;
var result = teamQuerySystem.GetLocalAllyPower(target);
```

### GetLocalEnemyPower
`public float GetLocalEnemyPower(Vec2 target)`

**用途 / Purpose:** 读取并返回当前对象中 local enemy power 的结果。

```csharp
// 先通过子系统 API 拿到 TeamQuerySystem 实例
TeamQuerySystem teamQuerySystem = ...;
var result = teamQuerySystem.GetLocalEnemyPower(target);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.Expire();
```

## 参见

- [本区域目录](../)
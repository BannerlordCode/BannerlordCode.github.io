---
title: "FormationQuerySystem"
description: "FormationQuerySystem 的自动生成类参考。"
---
# FormationQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationQuerySystem`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationQuerySystem.cs`

## 概述

`FormationQuerySystem` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClosestSignificantlyLargeEnemyFormation` | `public FormationQuerySystem ClosestSignificantlyLargeEnemyFormation { get; }` |
| `FastestSignificantlyLargeEnemyFormation` | `public FormationQuerySystem FastestSignificantlyLargeEnemyFormation { get; }` |

## 主要方法

### EvaluateAllPreliminaryQueryData
`public void EvaluateAllPreliminaryQueryData()`

**用途 / Purpose:** 调用 EvaluateAllPreliminaryQueryData 对应的操作。

```csharp
// 先通过子系统 API 拿到 FormationQuerySystem 实例
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.EvaluateAllPreliminaryQueryData();
```

### ForceExpireCavalryUnitRatio
`public void ForceExpireCavalryUnitRatio()`

**用途 / Purpose:** 调用 ForceExpireCavalryUnitRatio 对应的操作。

```csharp
// 先通过子系统 API 拿到 FormationQuerySystem 实例
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.ForceExpireCavalryUnitRatio();
```

### Expire
`public void Expire()`

**用途 / Purpose:** 调用 Expire 对应的操作。

```csharp
// 先通过子系统 API 拿到 FormationQuerySystem 实例
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.Expire();
```

### ExpireAfterUnitAddRemove
`public void ExpireAfterUnitAddRemove()`

**用途 / Purpose:** 调用 ExpireAfterUnitAddRemove 对应的操作。

```csharp
// 先通过子系统 API 拿到 FormationQuerySystem 实例
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.ExpireAfterUnitAddRemove();
```

### GetClassWeightedFactor
`public float GetClassWeightedFactor(float infantryWeight, float rangedWeight, float cavalryWeight, float rangedCavalryWeight)`

**用途 / Purpose:** 读取并返回当前对象中 class weighted factor 的结果。

```csharp
// 先通过子系统 API 拿到 FormationQuerySystem 实例
FormationQuerySystem formationQuerySystem = ...;
var result = formationQuerySystem.GetClassWeightedFactor(0, 0, 0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.EvaluateAllPreliminaryQueryData();
```

## 参见

- [本区域目录](../)
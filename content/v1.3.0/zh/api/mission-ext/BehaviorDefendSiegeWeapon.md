---
title: "BehaviorDefendSiegeWeapon"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BehaviorDefendSiegeWeapon`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BehaviorDefendSiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorDefendSiegeWeapon : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorDefendSiegeWeapon.cs`

## 概述

`BehaviorDefendSiegeWeapon` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetDefensePositionFromTactic
`public void SetDefensePositionFromTactic(WorldPosition defensePosition)`

**用途 / Purpose:** 设置 `defense position from tactic` 的值或状态。

### SetDefendedSiegeWeaponFromTactic
`public void SetDefendedSiegeWeaponFromTactic(SiegeWeapon siegeWeapon)`

**用途 / Purpose:** 设置 `defended siege weapon from tactic` 的值或状态。

### GetBehaviorString
`public override TextObject GetBehaviorString()`

**用途 / Purpose:** 获取 `behavior string` 的当前值。

### TickOccasionally
`public override void TickOccasionally()`

**用途 / Purpose:** 处理 `tick occasionally` 相关逻辑。

### ResetBehavior
`public override void ResetBehavior()`

**用途 / Purpose:** 将 `behavior` 重置为初始状态。

## 使用示例

```csharp
var value = new BehaviorDefendSiegeWeapon();
value.SetDefensePositionFromTactic(defensePosition);
```

## 参见

- [完整类目录](../catalog)
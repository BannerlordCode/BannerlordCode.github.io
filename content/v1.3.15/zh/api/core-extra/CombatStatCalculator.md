---
title: "CombatStatCalculator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CombatStatCalculator`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatStatCalculator

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public static class CombatStatCalculator`
**领域:** core-extra

## 概述

`CombatStatCalculator` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CalculateStrikeMagnitudeForSwing
`public static float CalculateStrikeMagnitudeForSwing(float swingSpeed, float impactPointAsPercent, float weaponWeight, float weaponLength, float weaponInertia, float weaponCoM, float extraLinearSpeed)`

**用途 / Purpose:** 处理 `calculate strike magnitude for swing` 相关逻辑。

### CalculateStrikeMagnitudeForThrust
`public static float CalculateStrikeMagnitudeForThrust(float thrustWeaponSpeed, float weaponWeight, float extraLinearSpeed, bool isThrown)`

**用途 / Purpose:** 处理 `calculate strike magnitude for thrust` 相关逻辑。

### CalculateBaseBlowMagnitudeForSwing
`public static float CalculateBaseBlowMagnitudeForSwing(float angularSpeed, float weaponReach, float weaponWeight, float weaponInertia, float weaponCoM, float impactPoint, float exraLinearSpeed)`

**用途 / Purpose:** 处理 `calculate base blow magnitude for swing` 相关逻辑。

### CalculateBaseBlowMagnitudeForThrust
`public static float CalculateBaseBlowMagnitudeForThrust(float linearSpeed, float weaponWeight, float exraLinearSpeed)`

**用途 / Purpose:** 处理 `calculate base blow magnitude for thrust` 相关逻辑。

### CalculateBaseBlowMagnitudeForPassiveUsage
`public static float CalculateBaseBlowMagnitudeForPassiveUsage(float weaponWeight, float extraLinearSpeed)`

**用途 / Purpose:** 处理 `calculate base blow magnitude for passive usage` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
CombatStatCalculator.CalculateStrikeMagnitudeForSwing(0, 0, 0, 0, 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)

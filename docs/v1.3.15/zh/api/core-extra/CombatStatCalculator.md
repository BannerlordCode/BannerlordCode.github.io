<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CombatStatCalculator`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatStatCalculator

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`CombatStatCalculator` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### CalculateStrikeMagnitudeForSwing

```csharp
public static float CalculateStrikeMagnitudeForSwing(float swingSpeed, float impactPointAsPercent, float weaponWeight, float weaponLength, float weaponInertia, float weaponCoM, float extraLinearSpeed)
```

### CalculateStrikeMagnitudeForThrust

```csharp
public static float CalculateStrikeMagnitudeForThrust(float thrustWeaponSpeed, float weaponWeight, float extraLinearSpeed, bool isThrown)
```

### CalculateBaseBlowMagnitudeForSwing

```csharp
public static float CalculateBaseBlowMagnitudeForSwing(float angularSpeed, float weaponReach, float weaponWeight, float weaponInertia, float weaponCoM, float impactPoint, float exraLinearSpeed)
```

### CalculateBaseBlowMagnitudeForThrust

```csharp
public static float CalculateBaseBlowMagnitudeForThrust(float linearSpeed, float weaponWeight, float exraLinearSpeed)
```

### CalculateBaseBlowMagnitudeForPassiveUsage

```csharp
public static float CalculateBaseBlowMagnitudeForPassiveUsage(float weaponWeight, float extraLinearSpeed)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
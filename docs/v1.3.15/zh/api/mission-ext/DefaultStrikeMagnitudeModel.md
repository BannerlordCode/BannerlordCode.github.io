<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultStrikeMagnitudeModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultStrikeMagnitudeModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**Base:** `StrikeMagnitudeCalculationModel`
**File:** `TaleWorlds.MountAndBlade/DefaultStrikeMagnitudeModel.cs`

## 概述

`DefaultStrikeMagnitudeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultStrikeMagnitudeModel>(new MyDefaultStrikeMagnitudeModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateStrikeMagnitudeForMissile
```csharp
public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)
```

### CalculateStrikeMagnitudeForSwing
```csharp
public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)
```

### CalculateStrikeMagnitudeForUnarmedAttack
```csharp
public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)
```

### CalculateStrikeMagnitudeForThrust
```csharp
public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)
```

### ComputeRawDamage
```csharp
public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)
```

### GetBluntDamageFactorByDamageType
```csharp
public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)
```

### CalculateHorseArcheryFactor
```csharp
public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)
```

## 使用示例

```csharp
// DefaultStrikeMagnitudeModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultStrikeMagnitudeModel>(new MyDefaultStrikeMagnitudeModel());
```

## 参见

- [完整类目录](../catalog)
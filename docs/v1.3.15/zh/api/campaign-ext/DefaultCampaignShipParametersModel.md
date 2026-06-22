<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCampaignShipParametersModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCampaignShipParametersModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignShipParametersModel : CampaignShipParametersModel`
**Base:** `CampaignShipParametersModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipParametersModel.cs`

## 概述

`DefaultCampaignShipParametersModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultCampaignShipParametersModel>(new MyDefaultCampaignShipParametersModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetShipSizeWeatherFactor
```csharp
public override float GetShipSizeWeatherFactor(ShipHull shipHull)
```

### GetDefaultCombatFactor
```csharp
public override float GetDefaultCombatFactor(ShipHull shipHull)
```

### GetCampaignSpeedBonusFactor
```csharp
public override float GetCampaignSpeedBonusFactor(Ship ship)
```

### GetCrewCapacityBonusFactor
```csharp
public override float GetCrewCapacityBonusFactor(Ship ship)
```

### GetShipWeightFactor
```csharp
public override float GetShipWeightFactor(Ship ship)
```

### GetForwardDragFactor
```csharp
public override float GetForwardDragFactor(Ship ship)
```

### GetCrewShieldHitPointsFactor
```csharp
public override float GetCrewShieldHitPointsFactor(Ship ship)
```

### GetAdditionalAmmoBonus
```csharp
public override int GetAdditionalAmmoBonus(Ship ship)
```

### GetMaxOarPowerFactor
```csharp
public override float GetMaxOarPowerFactor(Ship ship)
```

### GetMaxOarForceFactor
```csharp
public override float GetMaxOarForceFactor(Ship ship)
```

### GetSailForceFactor
```csharp
public override float GetSailForceFactor(Ship ship)
```

### GetCrewMeleeDamageFactor
```csharp
public override float GetCrewMeleeDamageFactor(Ship ship)
```

### GetAdditionalArcherQuivers
```csharp
public override int GetAdditionalArcherQuivers(Ship ship)
```

### GetAdditionalThrowingWeaponStack
```csharp
public override int GetAdditionalThrowingWeaponStack(Ship ship)
```

### GetSailRotationSpeedFactor
```csharp
public override float GetSailRotationSpeedFactor(Ship ship)
```

### GetFurlUnfurlSpeedFactor
```csharp
public override float GetFurlUnfurlSpeedFactor(Ship ship)
```

## 使用示例

```csharp
// DefaultCampaignShipParametersModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultCampaignShipParametersModel>(new MyDefaultCampaignShipParametersModel());
```

## 参见

- [完整类目录](../catalog)
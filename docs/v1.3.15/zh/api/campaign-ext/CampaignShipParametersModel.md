<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignShipParametersModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignShipParametersModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignShipParametersModel : MBGameModel<CampaignShipParametersModel>`
**Base:** `MBGameModel<CampaignShipParametersModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipParametersModel.cs`

## 概述

`CampaignShipParametersModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CampaignShipParametersModel>(new MyCampaignShipParametersModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetShipSizeWeatherFactor
```csharp
public abstract float GetShipSizeWeatherFactor(ShipHull shipHull)
```

### GetDefaultCombatFactor
```csharp
public abstract float GetDefaultCombatFactor(ShipHull shipHull)
```

### GetCampaignSpeedBonusFactor
```csharp
public abstract float GetCampaignSpeedBonusFactor(Ship ship)
```

### GetCrewCapacityBonusFactor
```csharp
public abstract float GetCrewCapacityBonusFactor(Ship ship)
```

### GetShipWeightFactor
```csharp
public abstract float GetShipWeightFactor(Ship ship)
```

### GetForwardDragFactor
```csharp
public abstract float GetForwardDragFactor(Ship ship)
```

### GetCrewShieldHitPointsFactor
```csharp
public abstract float GetCrewShieldHitPointsFactor(Ship ship)
```

### GetAdditionalAmmoBonus
```csharp
public abstract int GetAdditionalAmmoBonus(Ship ship)
```

### GetMaxOarPowerFactor
```csharp
public abstract float GetMaxOarPowerFactor(Ship ship)
```

### GetMaxOarForceFactor
```csharp
public abstract float GetMaxOarForceFactor(Ship ship)
```

### GetSailForceFactor
```csharp
public abstract float GetSailForceFactor(Ship ship)
```

### GetCrewMeleeDamageFactor
```csharp
public abstract float GetCrewMeleeDamageFactor(Ship ship)
```

### GetAdditionalArcherQuivers
```csharp
public abstract int GetAdditionalArcherQuivers(Ship ship)
```

### GetAdditionalThrowingWeaponStack
```csharp
public abstract int GetAdditionalThrowingWeaponStack(Ship ship)
```

### GetSailRotationSpeedFactor
```csharp
public abstract float GetSailRotationSpeedFactor(Ship ship)
```

### GetFurlUnfurlSpeedFactor
```csharp
public abstract float GetFurlUnfurlSpeedFactor(Ship ship)
```

## 使用示例

```csharp
// CampaignShipParametersModel (Model) 的典型用法
Game.Current.ReplaceModel<CampaignShipParametersModel>(new MyCampaignShipParametersModel());
```

## 参见

- [完整类目录](../catalog)
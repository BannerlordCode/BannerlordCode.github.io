<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSiegeEngineCalculationModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeEngineCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionSiegeEngineCalculationModel : MBGameModel<MissionSiegeEngineCalculationModel>`
**Base:** `MBGameModel<MissionSiegeEngineCalculationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionSiegeEngineCalculationModel.cs`

## 概述

`MissionSiegeEngineCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MissionSiegeEngineCalculationModel>(new MyMissionSiegeEngineCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateReloadSpeed
```csharp
public abstract float CalculateReloadSpeed(Agent userAgent, float baseSpeed)
```

### CalculateShipSiegeWeaponAmmoCount
```csharp
public abstract int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)
```

### CalculateDamage
```csharp
public abstract int CalculateDamage(Agent attackerAgent, float baseDamage)
```

## 使用示例

```csharp
// MissionSiegeEngineCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<MissionSiegeEngineCalculationModel>(new MyMissionSiegeEngineCalculationModel());
```

## 参见

- [完整类目录](../catalog)
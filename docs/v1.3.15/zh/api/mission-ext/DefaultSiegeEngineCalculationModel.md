<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSiegeEngineCalculationModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeEngineCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultSiegeEngineCalculationModel : MissionSiegeEngineCalculationModel`
**Base:** `MissionSiegeEngineCalculationModel`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs`

## 概述

`DefaultSiegeEngineCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSiegeEngineCalculationModel>(new MyDefaultSiegeEngineCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateReloadSpeed
```csharp
public override float CalculateReloadSpeed(Agent userAgent, float baseSpeed)
```

### CalculateShipSiegeWeaponAmmoCount
```csharp
public override int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)
```

### CalculateDamage
```csharp
public override int CalculateDamage(Agent attackerAgent, float baseDamage)
```

## 使用示例

```csharp
// DefaultSiegeEngineCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSiegeEngineCalculationModel>(new MyDefaultSiegeEngineCalculationModel());
```

## 参见

- [完整类目录](../catalog)
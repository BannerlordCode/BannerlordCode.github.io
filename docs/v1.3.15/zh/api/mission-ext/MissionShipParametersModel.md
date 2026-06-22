<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionShipParametersModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionShipParametersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionShipParametersModel : MBGameModel<MissionShipParametersModel>`
**Base:** `MBGameModel<MissionShipParametersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs`

## 概述

`MissionShipParametersModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MissionShipParametersModel>(new MyMissionShipParametersModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateMainDeckCrewSize
```csharp
public abstract int CalculateMainDeckCrewSize(IShipOrigin shipOrigin, Agent captain)
```

### CalculateWindBonus
```csharp
public abstract float CalculateWindBonus(IShipOrigin shipOrigin, Agent captain, float baseSailForceMagnitude)
```

### CalculateOarForceMultiplier
```csharp
public abstract float CalculateOarForceMultiplier(Agent pilotAgent, float baseOarForce)
```

## 使用示例

```csharp
// MissionShipParametersModel (Model) 的典型用法
Game.Current.ReplaceModel<MissionShipParametersModel>(new MyMissionShipParametersModel());
```

## 参见

- [完整类目录](../catalog)
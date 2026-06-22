<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleMoraleModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel>`
**Base:** `MBGameModel<BattleMoraleModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs`

## 概述

`BattleMoraleModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BattleMoraleModel>(new MyBattleMoraleModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateMaxMoraleChangeDueToAgentIncapacitated
```csharp
public abstract ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)
```

### CalculateMaxMoraleChangeDueToAgentPanicked
```csharp
public abstract ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)
```

### CalculateMoraleChangeToCharacter
```csharp
public abstract float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)
```

### GetEffectiveInitialMorale
```csharp
public abstract float GetEffectiveInitialMorale(Agent agent, float baseMorale)
```

### CanPanicDueToMorale
```csharp
public abstract bool CanPanicDueToMorale(Agent agent)
```

### CalculateCasualtiesFactor
```csharp
public abstract float CalculateCasualtiesFactor(BattleSideEnum battleSide)
```

### GetAverageMorale
```csharp
public abstract float GetAverageMorale(Formation formation)
```

### CalculateMoraleChangeOnShipSunk
```csharp
public abstract float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)
```

### CalculateMoraleOnRamming
```csharp
public abstract float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)
```

### CalculateMoraleOnShipsConnected
```csharp
public abstract float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)
```

## 使用示例

```csharp
// BattleMoraleModel (Model) 的典型用法
Game.Current.ReplaceModel<BattleMoraleModel>(new MyBattleMoraleModel());
```

## 参见

- [完整类目录](../catalog)
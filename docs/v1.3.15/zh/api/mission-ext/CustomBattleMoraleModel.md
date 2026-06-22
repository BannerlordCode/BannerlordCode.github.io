<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleMoraleModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleMoraleModel : BattleMoraleModel`
**Base:** `BattleMoraleModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleMoraleModel.cs`

## 概述

`CustomBattleMoraleModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CustomBattleMoraleModel>(new MyCustomBattleMoraleModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateMaxMoraleChangeDueToAgentIncapacitated
```csharp
public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)
```

### CalculateMaxMoraleChangeDueToAgentPanicked
```csharp
public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)
```

### CalculateMoraleChangeToCharacter
```csharp
public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)
```

### GetEffectiveInitialMorale
```csharp
public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)
```

### CanPanicDueToMorale
```csharp
public override bool CanPanicDueToMorale(Agent agent)
```

### CalculateCasualtiesFactor
```csharp
public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)
```

### GetAverageMorale
```csharp
public override float GetAverageMorale(Formation formation)
```

### CalculateMoraleChangeOnShipSunk
```csharp
public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)
```

### CalculateMoraleOnRamming
```csharp
public override float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)
```

### CalculateMoraleOnShipsConnected
```csharp
public override float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)
```

## 使用示例

```csharp
// CustomBattleMoraleModel (Model) 的典型用法
Game.Current.ReplaceModel<CustomBattleMoraleModel>(new MyCustomBattleMoraleModel());
```

## 参见

- [完整类目录](../catalog)
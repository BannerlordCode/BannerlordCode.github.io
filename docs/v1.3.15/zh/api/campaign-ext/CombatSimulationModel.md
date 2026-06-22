<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CombatSimulationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatSimulationModel : MBGameModel<CombatSimulationModel>`
**Base:** `MBGameModel<CombatSimulationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs`

## 概述

`CombatSimulationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CombatSimulationModel>(new MyCombatSimulationModel())` 注册，以改变其计算逻辑。

## 主要方法

### SimulateHit
```csharp
public abstract ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale)
```

### SimulateHit
```csharp
public abstract ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)
```

### GetSimulationTicksForBattleRound
```csharp
public abstract ValueTuple<int, int> GetSimulationTicksForBattleRound(MapEvent mapEvent)
```

### GetNumberOfEquipmentsBuilt
```csharp
public abstract int GetNumberOfEquipmentsBuilt(Settlement settlement)
```

### GetMaximumSiegeEquipmentProgress
```csharp
public abstract float GetMaximumSiegeEquipmentProgress(Settlement settlement)
```

### GetSettlementAdvantage
```csharp
public abstract float GetSettlementAdvantage(Settlement settlement)
```

### GetBattleAdvantage
```csharp
public abstract void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)
```

### GetShipSiegeEngineHitChance
```csharp
public abstract float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)
```

### GetPursuitRoundCount
```csharp
public abstract int GetPursuitRoundCount(MapEvent mapEvent)
```

### GetBluntDamageChance
```csharp
public abstract float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle)
```

## 使用示例

```csharp
// CombatSimulationModel (Model) 的典型用法
Game.Current.ReplaceModel<CombatSimulationModel>(new MyCombatSimulationModel());
```

## 参见

- [完整类目录](../catalog)
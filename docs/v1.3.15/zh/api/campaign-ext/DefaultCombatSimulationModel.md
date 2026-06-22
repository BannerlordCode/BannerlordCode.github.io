<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCombatSimulationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatSimulationModel : CombatSimulationModel`
**Base:** `CombatSimulationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs`

## 概述

`DefaultCombatSimulationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultCombatSimulationModel>(new MyDefaultCombatSimulationModel())` 注册，以改变其计算逻辑。

## 主要方法

### SimulateHit
```csharp
public override ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale)
```

### SimulateHit
```csharp
public override ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)
```

### GetMaximumSiegeEquipmentProgress
```csharp
public override float GetMaximumSiegeEquipmentProgress(Settlement settlement)
```

### GetNumberOfEquipmentsBuilt
```csharp
public override int GetNumberOfEquipmentsBuilt(Settlement settlement)
```

### GetSettlementAdvantage
```csharp
public override float GetSettlementAdvantage(Settlement settlement)
```

### GetSimulationTicksForBattleRound
```csharp
public override ValueTuple<int, int> GetSimulationTicksForBattleRound(MapEvent mapEvent)
```

### GetBattleAdvantage
```csharp
public override void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)
```

### GetShipSiegeEngineHitChance
```csharp
public override float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)
```

### GetPursuitRoundCount
```csharp
public override int GetPursuitRoundCount(MapEvent mapEvent)
```

### GetBluntDamageChance
```csharp
public override float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle)
```

## 使用示例

```csharp
// DefaultCombatSimulationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultCombatSimulationModel>(new MyDefaultCombatSimulationModel());
```

## 参见

- [完整类目录](../catalog)
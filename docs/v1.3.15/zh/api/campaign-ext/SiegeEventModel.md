<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEventModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeEventModel : MBGameModel<SiegeEventModel>`
**Base:** `MBGameModel<SiegeEventModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs`

## 概述

`SiegeEventModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SiegeEventModel>(new MySiegeEventModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSiegeEngineDestructionCasualties
```csharp
public abstract int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)
```

### GetCasualtyChance
```csharp
public abstract float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)
```

### GetColleteralDamageCasualties
```csharp
public abstract int GetColleteralDamageCasualties(SiegeEngineType attackerSiegeEngine, MobileParty attackerParty)
```

### GetSiegeEngineHitChance
```csharp
public abstract float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)
```

### GetSiegeEngineMapPrefabName
```csharp
public abstract string GetSiegeEngineMapPrefabName(SiegeEngineType siegeEngineType, int wallLevel, BattleSideEnum side)
```

### GetSiegeEngineMapProjectilePrefabName
```csharp
public abstract string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType siegeEngineType)
```

### GetSiegeEngineMapReloadAnimationName
```csharp
public abstract string GetSiegeEngineMapReloadAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)
```

### GetSiegeEngineMapFireAnimationName
```csharp
public abstract string GetSiegeEngineMapFireAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)
```

### GetSiegeEngineMapProjectileBoneIndex
```csharp
public abstract sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType siegeEngineType, BattleSideEnum side)
```

### GetSiegeStrategyScore
```csharp
public abstract float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)
```

### GetConstructionProgressPerHour
```csharp
public abstract float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)
```

### GetEffectiveSiegePartyForSide
```csharp
public abstract MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum side)
```

### GetAvailableManDayPower
```csharp
public abstract float GetAvailableManDayPower(ISiegeEventSide side)
```

### GetAvailableAttackerRangedSiegeEngines
```csharp
public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)
```

### GetAvailableDefenderSiegeEngines
```csharp
public abstract IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)
```

### GetAvailableAttackerRamSiegeEngines
```csharp
public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)
```

### GetAvailableAttackerTowerSiegeEngines
```csharp
public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)
```

### GetPrebuiltSiegeEnginesOfSettlement
```csharp
public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)
```

### GetPrebuiltSiegeEnginesOfSiegeCamp
```csharp
public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp camp)
```

### GetSiegeEngineHitPoints
```csharp
public abstract float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)
```

### GetRangedSiegeEngineReloadTime
```csharp
public abstract int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)
```

### GetSiegeEngineDamage
```csharp
public abstract float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)
```

### GetPriorityTroopsForSallyOutAmbush
```csharp
public abstract FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()
```

## 使用示例

```csharp
// SiegeEventModel (Model) 的典型用法
Game.Current.ReplaceModel<SiegeEventModel>(new MySiegeEventModel());
```

## 参见

- [完整类目录](../catalog)
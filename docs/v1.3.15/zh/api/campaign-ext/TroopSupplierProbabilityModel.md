<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopSupplierProbabilityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopSupplierProbabilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopSupplierProbabilityModel : MBGameModel<TroopSupplierProbabilityModel>`
**Base:** `MBGameModel<TroopSupplierProbabilityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSupplierProbabilityModel.cs`

## 概述

`TroopSupplierProbabilityModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<TroopSupplierProbabilityModel>(new MyTroopSupplierProbabilityModel())` 注册，以改变其计算逻辑。

## 主要方法

### EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization
```csharp
public abstract void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayers, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>> priorityList)
```

## 使用示例

```csharp
// TroopSupplierProbabilityModel (Model) 的典型用法
Game.Current.ReplaceModel<TroopSupplierProbabilityModel>(new MyTroopSupplierProbabilityModel());
```

## 参见

- [完整类目录](../catalog)
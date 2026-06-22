<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultTroopSupplierProbabilityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTroopSupplierProbabilityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTroopSupplierProbabilityModel : TroopSupplierProbabilityModel`
**Base:** `TroopSupplierProbabilityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSupplierProbabilityModel.cs`

## 概述

`DefaultTroopSupplierProbabilityModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultTroopSupplierProbabilityModel>(new MyDefaultTroopSupplierProbabilityModel())` 注册，以改变其计算逻辑。

## 主要方法

### EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization
```csharp
public override void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayer, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>> priorityList)
```

## 使用示例

```csharp
// DefaultTroopSupplierProbabilityModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultTroopSupplierProbabilityModel>(new MyDefaultTroopSupplierProbabilityModel());
```

## 参见

- [完整类目录](../catalog)
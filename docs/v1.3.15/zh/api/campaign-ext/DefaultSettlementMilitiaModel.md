<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementMilitiaModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementMilitiaModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementMilitiaModel : SettlementMilitiaModel`
**Base:** `SettlementMilitiaModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs`

## 概述

`DefaultSettlementMilitiaModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSettlementMilitiaModel>(new MyDefaultSettlementMilitiaModel())` 注册，以改变其计算逻辑。

## 主要方法

### MilitiaToSpawnAfterSiege
```csharp
public override int MilitiaToSpawnAfterSiege(Town town)
```

### CalculateMilitiaChange
```csharp
public override ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)
```

### CalculateVeteranMilitiaSpawnChance
```csharp
public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)
```

### CalculateMilitiaSpawnRate
```csharp
public override void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)
```

## 使用示例

```csharp
// DefaultSettlementMilitiaModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSettlementMilitiaModel>(new MyDefaultSettlementMilitiaModel());
```

## 参见

- [完整类目录](../catalog)
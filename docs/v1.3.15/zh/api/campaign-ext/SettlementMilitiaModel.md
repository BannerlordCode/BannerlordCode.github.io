<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementMilitiaModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementMilitiaModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`
**Base:** `MBGameModel<SettlementMilitiaModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs`

## 概述

`SettlementMilitiaModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SettlementMilitiaModel>(new MySettlementMilitiaModel())` 注册，以改变其计算逻辑。

## 主要方法

### MilitiaToSpawnAfterSiege
```csharp
public abstract int MilitiaToSpawnAfterSiege(Town town)
```

### CalculateMilitiaChange
```csharp
public abstract ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)
```

### CalculateVeteranMilitiaSpawnChance
```csharp
public abstract ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)
```

### CalculateMilitiaSpawnRate
```csharp
public abstract void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)
```

## 使用示例

```csharp
// SettlementMilitiaModel (Model) 的典型用法
Game.Current.ReplaceModel<SettlementMilitiaModel>(new MySettlementMilitiaModel());
```

## 参见

- [完整类目录](../catalog)
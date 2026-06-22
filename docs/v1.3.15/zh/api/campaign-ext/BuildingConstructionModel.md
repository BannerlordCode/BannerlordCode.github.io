<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BuildingConstructionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BuildingConstructionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`
**Base:** `MBGameModel<BuildingConstructionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs`

## 概述

`BuildingConstructionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BuildingConstructionModel>(new MyBuildingConstructionModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `TownBoostCost` | `public abstract int TownBoostCost { get; }` |
| `TownBoostBonus` | `public abstract int TownBoostBonus { get; }` |
| `CastleBoostCost` | `public abstract int CastleBoostCost { get; }` |
| `CastleBoostBonus` | `public abstract int CastleBoostBonus { get; }` |

## 主要方法

### CalculateDailyConstructionPower
```csharp
public abstract ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)
```

### CalculateDailyConstructionPowerWithoutBoost
```csharp
public abstract int CalculateDailyConstructionPowerWithoutBoost(Town town)
```

### GetBoostCost
```csharp
public abstract int GetBoostCost(Town town)
```

### GetBoostAmount
```csharp
public abstract int GetBoostAmount(Town town)
```

## 使用示例

```csharp
// BuildingConstructionModel (Model) 的典型用法
Game.Current.ReplaceModel<BuildingConstructionModel>(new MyBuildingConstructionModel());
```

## 参见

- [完整类目录](../catalog)
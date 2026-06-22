<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBuildingConstructionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBuildingConstructionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingConstructionModel : BuildingConstructionModel`
**Base:** `BuildingConstructionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs`

## 概述

`DefaultBuildingConstructionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultBuildingConstructionModel>(new MyDefaultBuildingConstructionModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `TownBoostCost` | `public override int TownBoostCost { get; }` |
| `TownBoostBonus` | `public override int TownBoostBonus { get; }` |
| `CastleBoostCost` | `public override int CastleBoostCost { get; }` |
| `CastleBoostBonus` | `public override int CastleBoostBonus { get; }` |

## 主要方法

### CalculateDailyConstructionPower
```csharp
public override ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)
```

### CalculateDailyConstructionPowerWithoutBoost
```csharp
public override int CalculateDailyConstructionPowerWithoutBoost(Town town)
```

### GetBoostAmount
```csharp
public override int GetBoostAmount(Town town)
```

### GetBoostCost
```csharp
public override int GetBoostCost(Town town)
```

## 使用示例

```csharp
// DefaultBuildingConstructionModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultBuildingConstructionModel>(new MyDefaultBuildingConstructionModel());
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultNotablePowerModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultNotablePowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultNotablePowerModel : NotablePowerModel`
**Base:** `NotablePowerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs`

## 概述

`DefaultNotablePowerModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultNotablePowerModel>(new MyDefaultNotablePowerModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `NotableDisappearPowerLimit` | `public override int NotableDisappearPowerLimit { get; }` |
| `RegularNotableMaxPowerLevel` | `public override int RegularNotableMaxPowerLevel { get; }` |

## 主要方法

### CalculateDailyPowerChangeForHero
```csharp
public override ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)
```

### GetPowerRankName
```csharp
public override TextObject GetPowerRankName(Hero hero)
```

### GetInfluenceBonusToClan
```csharp
public override float GetInfluenceBonusToClan(Hero hero)
```

### GetInitialPower
```csharp
public override int GetInitialPower(Hero hero)
```

### GetInitialNotableSupporterCost
```csharp
public override int GetInitialNotableSupporterCost(Hero hero)
```

## 使用示例

```csharp
// DefaultNotablePowerModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultNotablePowerModel>(new MyDefaultNotablePowerModel());
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NotablePowerModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NotablePowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NotablePowerModel : MBGameModel<NotablePowerModel>`
**Base:** `MBGameModel<NotablePowerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs`

## 概述

`NotablePowerModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<NotablePowerModel>(new MyNotablePowerModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegularNotableMaxPowerLevel` | `public abstract int RegularNotableMaxPowerLevel { get; }` |
| `NotableDisappearPowerLimit` | `public abstract int NotableDisappearPowerLimit { get; }` |

## 主要方法

### CalculateDailyPowerChangeForHero
```csharp
public abstract ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)
```

### GetPowerRankName
```csharp
public abstract TextObject GetPowerRankName(Hero hero)
```

### GetInfluenceBonusToClan
```csharp
public abstract float GetInfluenceBonusToClan(Hero hero)
```

### GetInitialPower
```csharp
public abstract int GetInitialPower(Hero hero)
```

### GetInitialNotableSupporterCost
```csharp
public abstract int GetInitialNotableSupporterCost(Hero hero)
```

## 使用示例

```csharp
// NotablePowerModel (Model) 的典型用法
Game.Current.ReplaceModel<NotablePowerModel>(new MyNotablePowerModel());
```

## 参见

- [完整类目录](../catalog)
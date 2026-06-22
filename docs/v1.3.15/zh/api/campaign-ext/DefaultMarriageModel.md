<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMarriageModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMarriageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMarriageModel : MarriageModel`
**Base:** `MarriageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs`

## 概述

`DefaultMarriageModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultMarriageModel>(new MyDefaultMarriageModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumMarriageAgeMale` | `public override int MinimumMarriageAgeMale { get; }` |
| `MinimumMarriageAgeFemale` | `public override int MinimumMarriageAgeFemale { get; }` |

## 主要方法

### IsCoupleSuitableForMarriage
```csharp
public override bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)
```

### IsClanSuitableForMarriage
```csharp
public override bool IsClanSuitableForMarriage(Clan clan)
```

### NpcCoupleMarriageChance
```csharp
public override float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)
```

### ShouldNpcMarriageBetweenClansBeAllowed
```csharp
public override bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)
```

### GetAdultChildrenSuitableForMarriage
```csharp
public override List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)
```

### GetEffectiveRelationIncrease
```csharp
public override int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)
```

### IsSuitableForMarriage
```csharp
public override bool IsSuitableForMarriage(Hero maidenOrSuitor)
```

### GetClanAfterMarriage
```csharp
public override Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)
```

## 使用示例

```csharp
// DefaultMarriageModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultMarriageModel>(new MyDefaultMarriageModel());
```

## 参见

- [完整类目录](../catalog)
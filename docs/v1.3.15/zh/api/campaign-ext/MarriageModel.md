<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MarriageModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MarriageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MarriageModel : MBGameModel<MarriageModel>`
**Base:** `MBGameModel<MarriageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs`

## 概述

`MarriageModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MarriageModel>(new MyMarriageModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumMarriageAgeMale` | `public abstract int MinimumMarriageAgeMale { get; }` |
| `MinimumMarriageAgeFemale` | `public abstract int MinimumMarriageAgeFemale { get; }` |

## 主要方法

### IsCoupleSuitableForMarriage
```csharp
public abstract bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)
```

### GetEffectiveRelationIncrease
```csharp
public abstract int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)
```

### GetClanAfterMarriage
```csharp
public abstract Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)
```

### IsSuitableForMarriage
```csharp
public abstract bool IsSuitableForMarriage(Hero hero)
```

### IsClanSuitableForMarriage
```csharp
public abstract bool IsClanSuitableForMarriage(Clan clan)
```

### NpcCoupleMarriageChance
```csharp
public abstract float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)
```

### ShouldNpcMarriageBetweenClansBeAllowed
```csharp
public abstract bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)
```

### GetAdultChildrenSuitableForMarriage
```csharp
public abstract List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)
```

## 使用示例

```csharp
// MarriageModel (Model) 的典型用法
Game.Current.ReplaceModel<MarriageModel>(new MyMarriageModel());
```

## 参见

- [完整类目录](../catalog)
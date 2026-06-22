<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultVolunteerModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultVolunteerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVolunteerModel : VolunteerModel`
**Base:** `VolunteerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs`

## 概述

`DefaultVolunteerModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultVolunteerModel>(new MyDefaultVolunteerModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxVolunteerTier` | `public override int MaxVolunteerTier { get; }` |

## 主要方法

### MaximumIndexHeroCanRecruitFromHero
```csharp
public override int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)
```

### MaximumIndexGarrisonCanRecruitFromHero
```csharp
public override int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)
```

### GetDailyVolunteerProductionProbability
```csharp
public override float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)
```

### GetBasicVolunteer
```csharp
public override CharacterObject GetBasicVolunteer(Hero sellerHero)
```

### CanHaveRecruits
```csharp
public override bool CanHaveRecruits(Hero hero)
```

## 使用示例

```csharp
// DefaultVolunteerModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultVolunteerModel>(new MyDefaultVolunteerModel());
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VolunteerModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VolunteerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VolunteerModel : MBGameModel<VolunteerModel>`
**Base:** `MBGameModel<VolunteerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs`

## 概述

`VolunteerModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<VolunteerModel>(new MyVolunteerModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxVolunteerTier` | `public abstract int MaxVolunteerTier { get; }` |

## 主要方法

### MaximumIndexHeroCanRecruitFromHero
```csharp
public abstract int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)
```

### MaximumIndexGarrisonCanRecruitFromHero
```csharp
public abstract int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)
```

### GetDailyVolunteerProductionProbability
```csharp
public abstract float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)
```

### GetBasicVolunteer
```csharp
public abstract CharacterObject GetBasicVolunteer(Hero hero)
```

### CanHaveRecruits
```csharp
public abstract bool CanHaveRecruits(Hero hero)
```

## 使用示例

```csharp
// VolunteerModel (Model) 的典型用法
Game.Current.ReplaceModel<VolunteerModel>(new MyVolunteerModel());
```

## 参见

- [完整类目录](../catalog)
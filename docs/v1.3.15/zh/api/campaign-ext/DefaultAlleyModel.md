<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultAlleyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultAlleyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAlleyModel : AlleyModel`
**Base:** `AlleyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs`

## 概述

`DefaultAlleyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultAlleyModel>(new MyDefaultAlleyModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | `public override CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath { get; }` |
| `MinimumTroopCountInPlayerOwnedAlley` | `public override int MinimumTroopCountInPlayerOwnedAlley { get; }` |
| `MaximumTroopCountInPlayerOwnedAlley` | `public override int MaximumTroopCountInPlayerOwnedAlley { get; }` |
| `GetDailyCrimeRatingOfAlley` | `public override float GetDailyCrimeRatingOfAlley { get; }` |

## 主要方法

### GetDailyXpGainForAssignedClanMember
```csharp
public override float GetDailyXpGainForAssignedClanMember(Hero assignedHero)
```

### GetDailyXpGainForMainHero
```csharp
public override float GetDailyXpGainForMainHero()
```

### GetInitialXpGainForMainHero
```csharp
public override float GetInitialXpGainForMainHero()
```

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
```csharp
public override float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()
```

### GetTroopsOfAIOwnedAlley
```csharp
public override TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)
```

### GetTroopsOfAlleyForBattleMission
```csharp
public override TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)
```

### GetClanMembersAndAvailabilityDetailsForLeadingAnAlley
```csharp
public override List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>> GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)
```

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
```csharp
public override TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)
```

### GetDisabledReasonTextForHero
```csharp
public override TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)
```

### GetAlleyAttackResponseTimeInDays
```csharp
public override float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)
```

### GetDailyIncomeOfAlley
```csharp
public override int GetDailyIncomeOfAlley(Alley alley)
```

## 使用示例

```csharp
// DefaultAlleyModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultAlleyModel>(new MyDefaultAlleyModel());
```

## 参见

- [完整类目录](../catalog)
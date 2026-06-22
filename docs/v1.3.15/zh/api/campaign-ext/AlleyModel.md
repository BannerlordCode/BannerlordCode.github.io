<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AlleyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AlleyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AlleyModel : MBGameModel<AlleyModel>`
**Base:** `MBGameModel<AlleyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs`

## 概述

`AlleyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<AlleyModel>(new MyAlleyModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | `public abstract CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath { get; }` |
| `MinimumTroopCountInPlayerOwnedAlley` | `public abstract int MinimumTroopCountInPlayerOwnedAlley { get; }` |
| `MaximumTroopCountInPlayerOwnedAlley` | `public abstract int MaximumTroopCountInPlayerOwnedAlley { get; }` |
| `GetDailyCrimeRatingOfAlley` | `public abstract float GetDailyCrimeRatingOfAlley { get; }` |

## 主要方法

### GetDailyXpGainForAssignedClanMember
```csharp
public abstract float GetDailyXpGainForAssignedClanMember(Hero assignedHero)
```

### GetDailyXpGainForMainHero
```csharp
public abstract float GetDailyXpGainForMainHero()
```

### GetInitialXpGainForMainHero
```csharp
public abstract float GetInitialXpGainForMainHero()
```

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
```csharp
public abstract float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()
```

### GetTroopsOfAIOwnedAlley
```csharp
public abstract TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)
```

### GetTroopsOfAlleyForBattleMission
```csharp
public abstract TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)
```

### GetDailyIncomeOfAlley
```csharp
public abstract int GetDailyIncomeOfAlley(Alley alley)
```

### GetClanMembersAndAvailabilityDetailsForLeadingAnAlley
```csharp
public abstract List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>> GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)
```

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
```csharp
public abstract TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)
```

### GetDisabledReasonTextForHero
```csharp
public abstract TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)
```

### GetAlleyAttackResponseTimeInDays
```csharp
public abstract float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)
```

## 使用示例

```csharp
// AlleyModel (Model) 的典型用法
Game.Current.ReplaceModel<AlleyModel>(new MyAlleyModel());
```

## 参见

- [完整类目录](../catalog)
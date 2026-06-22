<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPrisonerRecruitmentCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPrisonerRecruitmentCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**Base:** `PrisonerRecruitmentCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerRecruitmentCalculationModel.cs`

## 概述

`DefaultPrisonerRecruitmentCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPrisonerRecruitmentCalculationModel>(new MyDefaultPrisonerRecruitmentCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetConformityNeededToRecruitPrisoner
```csharp
public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)
```

### GetConformityChangePerHour
```csharp
public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject troopToBoost)
```

### GetPrisonerRecruitmentMoraleEffect
```csharp
public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)
```

### IsPrisonerRecruitable
```csharp
public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)
```

### ShouldPartyRecruitPrisoners
```csharp
public override bool ShouldPartyRecruitPrisoners(PartyBase party)
```

### CalculateRecruitableNumber
```csharp
public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)
```

## 使用示例

```csharp
// DefaultPrisonerRecruitmentCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPrisonerRecruitmentCalculationModel>(new MyDefaultPrisonerRecruitmentCalculationModel());
```

## 参见

- [完整类目录](../catalog)
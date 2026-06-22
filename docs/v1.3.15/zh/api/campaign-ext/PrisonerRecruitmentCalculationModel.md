<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PrisonerRecruitmentCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PrisonerRecruitmentCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonerRecruitmentCalculationModel : MBGameModel<PrisonerRecruitmentCalculationModel>`
**Base:** `MBGameModel<PrisonerRecruitmentCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerRecruitmentCalculationModel.cs`

## 概述

`PrisonerRecruitmentCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PrisonerRecruitmentCalculationModel>(new MyPrisonerRecruitmentCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetConformityNeededToRecruitPrisoner
```csharp
public abstract int GetConformityNeededToRecruitPrisoner(CharacterObject character)
```

### GetConformityChangePerHour
```csharp
public abstract ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)
```

### GetPrisonerRecruitmentMoraleEffect
```csharp
public abstract int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)
```

### IsPrisonerRecruitable
```csharp
public abstract bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)
```

### ShouldPartyRecruitPrisoners
```csharp
public abstract bool ShouldPartyRecruitPrisoners(PartyBase party)
```

### CalculateRecruitableNumber
```csharp
public abstract int CalculateRecruitableNumber(PartyBase party, CharacterObject character)
```

## 使用示例

```csharp
// PrisonerRecruitmentCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<PrisonerRecruitmentCalculationModel>(new MyPrisonerRecruitmentCalculationModel());
```

## 参见

- [完整类目录](../catalog)
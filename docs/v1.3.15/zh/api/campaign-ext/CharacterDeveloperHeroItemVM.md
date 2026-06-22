<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterDeveloperHeroItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterDeveloperHeroItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CharacterDeveloperHeroItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `HeroDeveloper` | `public HeroDeveloper HeroDeveloper { get; }` |
| `Hero` | `public Hero Hero { get; }` |
| `OrgUnspentFocusPoints` | `public int OrgUnspentFocusPoints { get; }` |
| `OrgUnspentAttributePoints` | `public int OrgUnspentAttributePoints { get; }` |
| `CharacterAttributes` | `public IReadOnlyPropertyOwner<CharacterAttribute> CharacterAttributes { get; }` |
| `Skills` | `public MBBindingList<SkillVM> Skills { get; set; }` |
| `CharacterStats` | `public MBBindingList<StringPairItemVM> CharacterStats { get; set; }` |
| `Attributes` | `public MBBindingList<CharacterAttributeItemVM> Attributes { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `PerkSelection` | `public PerkSelectionVM PerkSelection { get; set; }` |
| `CurrentSkill` | `public SkillVM CurrentSkill { get; set; }` |
| `CurrentInspectedAttribute` | `public CharacterAttributeItemVM CurrentInspectedAttribute { get; set; }` |
| `FocusPointsText` | `public string FocusPointsText { get; set; }` |
| `LevelProgressText` | `public string LevelProgressText { get; set; }` |
| `HeroCharacter` | `public HeroViewModel HeroCharacter { get; set; }` |
| `IsInspectingAnAttribute` | `public bool IsInspectingAnAttribute { get; set; }` |
| `LevelProgressPercentage` | `public int LevelProgressPercentage { get; set; }` |
| `CurrentTotalSkill` | `public int CurrentTotalSkill { get; set; }` |
| `SkillPointsRequiredForCurrentLevel` | `public int SkillPointsRequiredForCurrentLevel { get; set; }` |
| `SkillPointsRequiredForNextLevel` | `public int SkillPointsRequiredForNextLevel { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteStopInspectingCurrentAttribute

```csharp
public void ExecuteStopInspectingCurrentAttribute()
```

### RefreshCharacterValues

```csharp
public void RefreshCharacterValues()
```

### RefreshPerksOfSkill

```csharp
public void RefreshPerksOfSkill(SkillObject skill)
```

### ResetChanges

```csharp
public void ResetChanges(bool isCancel)
```

### ApplyChanges

```csharp
public void ApplyChanges()
```

### SetCurrentSkill

```csharp
public void SetCurrentSkill(SkillVM skill)
```

### IsThereAnyChanges

```csharp
public bool IsThereAnyChanges()
```

### GetRequiredFocusPointsToAddFocusWithCurrentFocus

```csharp
public int GetRequiredFocusPointsToAddFocusWithCurrentFocus(SkillObject skill)
```

### CanAddFocusToSkillWithFocusAmount

```csharp
public bool CanAddFocusToSkillWithFocusAmount(int currentFocusAmount)
```

### IsSkillMaxAmongOtherSkills

```csharp
public bool IsSkillMaxAmongOtherSkills(SkillVM skill)
```

### GetNameWithNumOfUnopenedPerks

```csharp
public string GetNameWithNumOfUnopenedPerks()
```

### GetNumberOfUnselectedPerks

```csharp
public int GetNumberOfUnselectedPerks()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
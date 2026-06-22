<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterDeveloperHeroItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterDeveloperHeroItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CharacterDeveloperHeroItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
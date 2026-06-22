<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecruitVolunteerTroopVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecruitVolunteerTroopVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `RecruitVolunteerTroopVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Level` | `public string Level { get; set; }` |
| `CanBeRecruited` | `public bool CanBeRecruited { get; set; }` |
| `IsHiglightEnabled` | `public bool IsHiglightEnabled { get; set; }` |
| `Wage` | `public int Wage { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `IsTroopEmpty` | `public bool IsTroopEmpty { get; set; }` |
| `PlayerHasEnoughRelation` | `public bool PlayerHasEnoughRelation { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteRecruit

```csharp
public void ExecuteRecruit()
```

### ExecuteOpenEncyclopedia

```csharp
public void ExecuteOpenEncyclopedia()
```

### ExecuteRemoveFromCart

```csharp
public void ExecuteRemoveFromCart()
```

### ExecuteBeginHint

```csharp
public virtual void ExecuteBeginHint()
```

### ExecuteEndHint

```csharp
public virtual void ExecuteEndHint()
```

### ExecuteFocus

```csharp
public void ExecuteFocus()
```

### ExecuteUnfocus

```csharp
public void ExecuteUnfocus()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
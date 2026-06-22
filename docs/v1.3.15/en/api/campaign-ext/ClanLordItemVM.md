<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanLordItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanLordItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanLordItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Skills` | `public MBBindingList<EncyclopediaSkillVM> Skills { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `HeroModel` | `public HeroViewModel HeroModel { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsChild` | `public bool IsChild { get; set; }` |
| `IsTeleporting` | `public bool IsTeleporting { get; set; }` |
| `IsRecallVisible` | `public bool IsRecallVisible { get; set; }` |
| `IsRecallEnabled` | `public bool IsRecallEnabled { get; set; }` |
| `IsTalkVisible` | `public bool IsTalkVisible { get; set; }` |
| `IsTalkEnabled` | `public bool IsTalkEnabled { get; set; }` |
| `CanShowLocationOfHero` | `public bool CanShowLocationOfHero { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `IsFamilyMember` | `public bool IsFamilyMember { get; set; }` |
| `IsPregnant` | `public bool IsPregnant { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `CurrentActionText` | `public string CurrentActionText { get; set; }` |
| `RelationToMainHeroText` | `public string RelationToMainHeroText { get; set; }` |
| `GovernorOfText` | `public string GovernorOfText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteLocationLink

```csharp
public void ExecuteLocationLink(string link)
```

### UpdateProperties

```csharp
public void UpdateProperties()
```

### ExecuteLink

```csharp
public void ExecuteLink()
```

### OnCharacterSelect

```csharp
public void OnCharacterSelect()
```

### ExecuteBeginHint

```csharp
public virtual void ExecuteBeginHint()
```

### ExecuteEndHint

```csharp
public virtual void ExecuteEndHint()
```

### GetHero

```csharp
public Hero GetHero()
```

### ExecuteRename

```csharp
public void ExecuteRename()
```

### ExecuteShowOnMap

```csharp
public void ExecuteShowOnMap()
```

### ExecuteRecall

```csharp
public void ExecuteRecall()
```

### ExecuteTalk

```csharp
public void ExecuteTalk()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
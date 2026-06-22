<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaClanPageVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaClanPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EncyclopediaClanPageVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ClanInfo` | `public MBBindingList<StringPairItemVM> ClanInfo { get; set; }` |
| `Members` | `public MBBindingList<HeroVM> Members { get; set; }` |
| `Enemies` | `public MBBindingList<EncyclopediaFactionVM> Enemies { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `ParentKingdom` | `public EncyclopediaFactionVM ParentKingdom { get; set; }` |
| `HasParentKingdom` | `public bool HasParentKingdom { get; set; }` |
| `IsClanDestroyed` | `public bool IsClanDestroyed { get; set; }` |
| `DestroyedText` | `public string DestroyedText { get; set; }` |
| `PartOfText` | `public string PartOfText { get; set; }` |
| `TierText` | `public string TierText { get; set; }` |
| `InfoText` | `public string InfoText { get; set; }` |
| `Leader` | `public HeroVM Leader { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `EnemiesText` | `public string EnemiesText { get; set; }` |
| `AlliesText` | `public string AlliesText { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### Refresh

```csharp
public override void Refresh()
```

### GetName

```csharp
public override string GetName()
```

### GetNavigationBarURL

```csharp
public override string GetNavigationBarURL()
```

### ExecuteSwitchBookmarkedState

```csharp
public override void ExecuteSwitchBookmarkedState()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
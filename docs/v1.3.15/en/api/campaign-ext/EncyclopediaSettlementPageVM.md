<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaSettlementPageVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaSettlementPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EncyclopediaSettlementPageVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `OwnerBanner` | `public EncyclopediaFactionVM OwnerBanner { get; set; }` |
| `BoundSettlement` | `public EncyclopediaSettlementVM BoundSettlement { get; set; }` |
| `IsFortification` | `public bool IsFortification { get; set; }` |
| `IsTrackerButtonHighlightEnabled` | `public bool IsTrackerButtonHighlightEnabled { get; set; }` |
| `HasBoundSettlement` | `public bool HasBoundSettlement { get; set; }` |
| `SettlementCropPosition` | `public double SettlementCropPosition { get; set; }` |
| `BoundSettlementText` | `public string BoundSettlementText { get; set; }` |
| `TrackText` | `public string TrackText { get; set; }` |
| `SettlementPath` | `public string SettlementPath { get; set; }` |
| `SettlementName` | `public string SettlementName { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `Owner` | `public HeroVM Owner { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `SettlementImageID` | `public string SettlementImageID { get; set; }` |
| `NotableCharactersText` | `public string NotableCharactersText { get; set; }` |
| `SettlementType` | `public int SettlementType { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `NotableCharacters` | `public MBBindingList<HeroVM> NotableCharacters { get; set; }` |
| `ShowInMapHint` | `public HintViewModel ShowInMapHint { get; set; }` |


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

### ExecuteTrack

```csharp
public void ExecuteTrack()
```

### GetNavigationBarURL

```csharp
public override string GetNavigationBarURL()
```

### ExecuteBoundSettlementLink

```csharp
public void ExecuteBoundSettlementLink()
```

### ExecuteSwitchBookmarkedState

```csharp
public override void ExecuteSwitchBookmarkedState()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomClanVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomClanVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `KingdomClanVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController { get; set; }` |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan { get; set; }` |
| `ExpelActionExplanationText` | `public string ExpelActionExplanationText { get; set; }` |
| `SupportActionExplanationText` | `public string SupportActionExplanationText { get; set; }` |
| `BannerText` | `public string BannerText { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `InfluenceText` | `public string InfluenceText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `Clans` | `public MBBindingList<KingdomClanItemVM> Clans { get; set; }` |
| `CanSupportCurrentClan` | `public bool CanSupportCurrentClan { get; set; }` |
| `CanExpelCurrentClan` | `public bool CanExpelCurrentClan { get; set; }` |
| `SupportText` | `public string SupportText { get; set; }` |
| `ExpelActionText` | `public string ExpelActionText { get; set; }` |
| `SupportCost` | `public int SupportCost { get; set; }` |
| `ExpelCost` | `public int ExpelCost { get; set; }` |
| `ExpelHint` | `public HintViewModel ExpelHint { get; set; }` |
| `SupportHint` | `public HintViewModel SupportHint { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshClan

```csharp
public void RefreshClan()
```

### SelectClan

```csharp
public void SelectClan(Clan clan)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
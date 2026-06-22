<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomClanItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomClanItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `KingdomClanItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `ClanType` | `public int ClanType { get; set; }` |
| `NumOfMembers` | `public int NumOfMembers { get; set; }` |
| `NumOfFiefs` | `public int NumOfFiefs { get; set; }` |
| `TierText` | `public string TierText { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |
| `Members` | `public MBBindingList<HeroVM> Members { get; set; }` |
| `Fiefs` | `public MBBindingList<KingdomClanFiefItemVM> Fiefs { get; set; }` |
| `Influence` | `public int Influence { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### Refresh

```csharp
public void Refresh()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MarriageOfferPopupVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MarriageOfferPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MarriageOfferPopupVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanText` | `public string ClanText { get; set; }` |
| `AgeText` | `public string AgeText { get; set; }` |
| `OccupationText` | `public string OccupationText { get; set; }` |
| `RelationText` | `public string RelationText { get; set; }` |
| `ConsequencesText` | `public string ConsequencesText { get; set; }` |
| `ConsequencesList` | `public MBBindingList<BindingListStringItem> ConsequencesList { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `ButtonCancelLabel` | `public string ButtonCancelLabel { get; set; }` |
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen { get; set; }` |
| `OffereeClanMember` | `public MarriageOfferPopupHeroVM OffereeClanMember { get; set; }` |
| `OffererClanMember` | `public MarriageOfferPopupHeroVM OffererClanMember { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |


## Key Methods

### Update

```csharp
public void Update()
```

### ExecuteAcceptOffer

```csharp
public void ExecuteAcceptOffer()
```

### ExecuteDeclineOffer

```csharp
public void ExecuteDeclineOffer()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### ExecuteLink

```csharp
public void ExecuteLink(string link)
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotKey)
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeirSelectionPopupVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeirSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `HeirSelectionPopupVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `NameLabel` | `public string NameLabel { get; set; }` |
| `AgeLabel` | `public string AgeLabel { get; set; }` |
| `CultureLabel` | `public string CultureLabel { get; set; }` |
| `OccupationLabel` | `public string OccupationLabel { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `HeirApparents` | `public MBBindingList<HeirSelectionPopupHeroVM> HeirApparents { get; set; }` |
| `CurrentSelectedHero` | `public HeirSelectionPopupHeroVM CurrentSelectedHero { get; set; }` |
| `AreHotkeysVisible` | `public bool AreHotkeysVisible { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |


## Key Methods

### Update

```csharp
public void Update()
```

### ExecuteSelectHeir

```csharp
public void ExecuteSelectHeir()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
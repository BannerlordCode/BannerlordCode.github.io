<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomGiftFiefPopupVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomGiftFiefPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `KingdomGiftFiefPopupVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsAnyClanSelected` | `public bool IsAnyClanSelected { get; set; }` |
| `Clans` | `public MBBindingList<KingdomClanItemVM> Clans { get; set; }` |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan { get; set; }` |
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `GiftText` | `public string GiftText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `BannerText` | `public string BannerText { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `InfluenceText` | `public string InfluenceText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OpenWith

```csharp
public void OpenWith(Settlement settlement)
```

### ExecuteGiftSettlement

```csharp
public void ExecuteGiftSettlement()
```

### ExecuteClose

```csharp
public void ExecuteClose()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
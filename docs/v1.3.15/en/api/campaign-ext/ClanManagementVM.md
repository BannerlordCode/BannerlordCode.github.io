<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanManagementVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanManagementVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Leader` | `public HeroVM Leader { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `CardSelectionPopup` | `public ClanCardSelectionPopupVM CardSelectionPopup { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `ClanMembers` | `public ClanMembersVM ClanMembers { get; set; }` |
| `ClanParties` | `public ClanPartiesVM ClanParties { get; set; }` |
| `ClanFiefs` | `public ClanFiefsVM ClanFiefs { get; set; }` |
| `ClanIncome` | `public ClanIncomeVM ClanIncome { get; set; }` |
| `IsMembersSelected` | `public bool IsMembersSelected { get; set; }` |
| `IsPartiesSelected` | `public bool IsPartiesSelected { get; set; }` |
| `CanSwitchTabs` | `public bool CanSwitchTabs { get; set; }` |
| `IsFiefsSelected` | `public bool IsFiefsSelected { get; set; }` |
| `IsIncomeSelected` | `public bool IsIncomeSelected { get; set; }` |
| `ClanIsInAKingdom` | `public bool ClanIsInAKingdom { get; set; }` |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled { get; set; }` |
| `PlayerCanChangeClanName` | `public bool PlayerCanChangeClanName { get; set; }` |
| `CanChooseBanner` | `public bool CanChooseBanner { get; set; }` |
| `IsRenownProgressComplete` | `public bool IsRenownProgressComplete { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### SelectHero

```csharp
public void SelectHero(Hero hero)
```

### SelectParty

```csharp
public void SelectParty(PartyBase party)
```

### SelectSettlement

```csharp
public void SelectSettlement(Settlement settlement)
```

### SelectWorkshop

```csharp
public void SelectWorkshop(Workshop workshop)
```

### SelectAlley

```csharp
public void SelectAlley(Alley alley)
```

### SelectPreviousCategory

```csharp
public void SelectPreviousCategory()
```

### SelectNextCategory

```csharp
public void SelectNextCategory()
```

### ExecuteOpenBannerEditor

```csharp
public void ExecuteOpenBannerEditor()
```

### UpdateBannerVisuals

```csharp
public void UpdateBannerVisuals()
```

### SetSelectedCategory

```csharp
public void SetSelectedCategory(int index)
```

### RefreshDailyValues

```csharp
public void RefreshDailyValues()
```

### RefreshCategoryValues

```csharp
public void RefreshCategoryValues()
```

### ExecuteChangeClanName

```csharp
public void ExecuteChangeClanName()
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
public void SetDoneInputKey(HotKey hotkey)
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotkey)
```

### SetPreviousTabInputKey

```csharp
public void SetPreviousTabInputKey(HotKey hotkey)
```

### SetNextTabInputKey

```csharp
public void SetNextTabInputKey(HotKey hotkey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
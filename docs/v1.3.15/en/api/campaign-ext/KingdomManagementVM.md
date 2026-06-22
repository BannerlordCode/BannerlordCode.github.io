<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomManagementVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `KingdomManagementVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Kingdom` | `public Kingdom Kingdom { get; }` |
| `KingdomActionHint` | `public BasicTooltipViewModel KingdomActionHint { get; set; }` |
| `KingdomBanner` | `public BannerImageIdentifierVM KingdomBanner { get; set; }` |
| `Leader` | `public HeroVM Leader { get; set; }` |
| `Army` | `public KingdomArmyVM Army { get; set; }` |
| `Settlement` | `public KingdomSettlementVM Settlement { get; set; }` |
| `Clan` | `public KingdomClanVM Clan { get; set; }` |
| `Policy` | `public KingdomPoliciesVM Policy { get; set; }` |
| `Diplomacy` | `public KingdomDiplomacyVM Diplomacy { get; set; }` |
| `GiftFief` | `public KingdomGiftFiefPopupVM GiftFief { get; set; }` |
| `Decision` | `public KingdomDecisionsVM Decision { get; set; }` |
| `ChangeKingdomNameHint` | `public HintViewModel ChangeKingdomNameHint { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `CanSwitchTabs` | `public bool CanSwitchTabs { get; set; }` |
| `PlayerHasKingdom` | `public bool PlayerHasKingdom { get; set; }` |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled { get; set; }` |
| `PlayerCanChangeKingdomName` | `public bool PlayerCanChangeKingdomName { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `KingdomActionText` | `public string KingdomActionText { get; set; }` |
| `ClansText` | `public string ClansText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnRefresh

```csharp
public void OnRefresh()
```

### OnFrameTick

```csharp
public void OnFrameTick()
```

### ExecuteClose

```csharp
public void ExecuteClose()
```

### SelectArmy

```csharp
public void SelectArmy(Army army)
```

### SelectSettlement

```csharp
public void SelectSettlement(Settlement settlement)
```

### SelectClan

```csharp
public void SelectClan(Clan clan)
```

### SelectPolicy

```csharp
public void SelectPolicy(PolicyObject policy)
```

### SelectKingdom

```csharp
public void SelectKingdom(Kingdom kingdom)
```

### SelectPreviousCategory

```csharp
public void SelectPreviousCategory()
```

### SelectNextCategory

```csharp
public void SelectNextCategory()
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
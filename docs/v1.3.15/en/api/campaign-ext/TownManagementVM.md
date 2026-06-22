<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownManagementVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TownManagementVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CompletionText` | `public string CompletionText { get; set; }` |
| `GovernorText` | `public string GovernorText { get; set; }` |
| `ManageText` | `public string ManageText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `WallsText` | `public string WallsText { get; set; }` |
| `CurrentProjectText` | `public string CurrentProjectText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `HasGovernor` | `public bool HasGovernor { get; set; }` |
| `IsGovernorSelectionEnabled` | `public bool IsGovernorSelectionEnabled { get; set; }` |
| `IsTown` | `public bool IsTown { get; set; }` |
| `Show` | `public bool Show { get; set; }` |
| `IsThereCurrentProject` | `public bool IsThereCurrentProject { get; set; }` |
| `IsSelectingGovernor` | `public bool IsSelectingGovernor { get; set; }` |
| `MiddleFirstTextList` | `public MBBindingList<TownManagementDescriptionItemVM> MiddleFirstTextList { get; set; }` |
| `MiddleSecondTextList` | `public MBBindingList<TownManagementDescriptionItemVM> MiddleSecondTextList { get; set; }` |
| `Shops` | `public MBBindingList<TownManagementShopItemVM> Shops { get; set; }` |
| `Villages` | `public MBBindingList<TownManagementVillageItemVM> Villages { get; set; }` |
| `GovernorSelectionDisabledHint` | `public HintViewModel GovernorSelectionDisabledHint { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteDone

```csharp
public void ExecuteDone()
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
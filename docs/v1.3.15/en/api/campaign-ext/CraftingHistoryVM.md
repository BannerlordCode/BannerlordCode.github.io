<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingHistoryVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingHistoryVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CraftingHistoryVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsDoneAvailable` | `public bool IsDoneAvailable { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `HasItemsInHistory` | `public bool HasItemsInHistory { get; set; }` |
| `HistoryHint` | `public HintViewModel HistoryHint { get; set; }` |
| `HistoryDisabledHint` | `public HintViewModel HistoryDisabledHint { get; set; }` |
| `CraftingHistory` | `public MBBindingList<WeaponDesignSelectorVM> CraftingHistory { get; set; }` |
| `SelectedDesign` | `public WeaponDesignSelectorVM SelectedDesign { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `CancelKey` | `public InputKeyItemVM CancelKey { get; set; }` |
| `DoneKey` | `public InputKeyItemVM DoneKey { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### RefreshAvailability

```csharp
public void RefreshAvailability()
```

### ExecuteOpen

```csharp
public void ExecuteOpen()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### SetDoneKey

```csharp
public void SetDoneKey(HotKey hotkey)
```

### SetCancelKey

```csharp
public void SetCancelKey(HotKey hotkey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuTroopSelectionVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuTroopSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GameMenuTroopSelectionVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDoneEnabled` | `public bool IsDoneEnabled { get; set; }` |
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `Troops` | `public MBBindingList<TroopSelectionItemVM> Troops { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClearSelectionText` | `public string ClearSelectionText { get; set; }` |
| `CurrentSelectedAmountText` | `public string CurrentSelectedAmountText { get; set; }` |
| `CurrentSelectedAmountTitle` | `public string CurrentSelectedAmountTitle { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteReset

```csharp
public void ExecuteReset()
```

### ExecuteClearSelection

```csharp
public void ExecuteClearSelection()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotkey)
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotkey)
```

### SetResetInputKey

```csharp
public void SetResetInputKey(HotKey hotkey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
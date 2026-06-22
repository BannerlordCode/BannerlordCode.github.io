<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanCardSelectionPopupVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanCardSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanCardSelectionPopupVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Items` | `public MBBindingList<ClanCardSelectionPopupItemVM> Items { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `ActionResult` | `public string ActionResult { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsDoneEnabled` | `public bool IsDoneEnabled { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |


## Key Methods

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

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotKey)
```

### Open

```csharp
public void Open(ClanCardSelectionInfo info)
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
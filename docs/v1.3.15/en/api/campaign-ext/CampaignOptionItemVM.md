<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignOptionItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignOptionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CampaignOptionItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `OptionData` | `public ICampaignOptionData OptionData { get; }` |
| `HideOptionName` | `public bool HideOptionName { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `OptionType` | `public int OptionType { get; set; }` |
| `ValueAsBoolean` | `public bool ValueAsBoolean { get; set; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `MinRange` | `public float MinRange { get; set; }` |
| `MaxRange` | `public float MaxRange { get; set; }` |
| `ValueAsRange` | `public float ValueAsRange { get; set; }` |
| `ValueAsString` | `public string ValueAsString { get; set; }` |
| `SelectionSelector` | `public CampaignOptionSelectorVM SelectionSelector { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshDisabledStatus

```csharp
public void RefreshDisabledStatus()
```

### ExecuteAction

```csharp
public void ExecuteAction()
```

### OnSelectionOptionValueChanged

```csharp
public void OnSelectionOptionValueChanged(SelectorVM<SelectorItemVM> selector)
```

### SetValue

```csharp
public void SetValue(float value)
```

### SetOnValueChangedCallback

```csharp
public void SetOnValueChangedCallback(Action<CampaignOptionItemVM> onValueChanged)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
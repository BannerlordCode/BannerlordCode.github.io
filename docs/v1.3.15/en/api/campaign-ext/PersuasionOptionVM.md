<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PersuasionOptionVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PersuasionOptionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PersuasionOptionVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsPersuasionResultReady` | `public bool IsPersuasionResultReady { get; set; }` |
| `IsABlockingOption` | `public bool IsABlockingOption { get; set; }` |
| `IsAProgressingOption` | `public bool IsAProgressingOption { get; set; }` |
| `SuccessChance` | `public int SuccessChance { get; set; }` |
| `PersuasionResultIndex` | `public int PersuasionResultIndex { get; set; }` |
| `FailChance` | `public int FailChance { get; set; }` |
| `CritSuccessChance` | `public int CritSuccessChance { get; set; }` |
| `CritFailChance` | `public int CritFailChance { get; set; }` |
| `FailChanceText` | `public string FailChanceText { get; set; }` |
| `CritFailChanceText` | `public string CritFailChanceText { get; set; }` |
| `SuccessChanceText` | `public string SuccessChanceText { get; set; }` |
| `CritSuccessChanceText` | `public string CritSuccessChanceText { get; set; }` |
| `CritFailHint` | `public BasicTooltipViewModel CritFailHint { get; set; }` |
| `FailHint` | `public BasicTooltipViewModel FailHint { get; set; }` |
| `SuccessHint` | `public BasicTooltipViewModel SuccessHint { get; set; }` |
| `CritSuccessHint` | `public BasicTooltipViewModel CritSuccessHint { get; set; }` |
| `BlockingOptionHint` | `public HintViewModel BlockingOptionHint { get; set; }` |
| `ProgressingOptionHint` | `public HintViewModel ProgressingOptionHint { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### GetPersuasionAdditionalText

```csharp
public string GetPersuasionAdditionalText()
```

### ExecuteReadyToContinue

```csharp
public void ExecuteReadyToContinue()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
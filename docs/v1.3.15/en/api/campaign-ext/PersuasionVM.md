<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PersuasionVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PersuasionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PersuasionVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PersuasionHint` | `public BasicTooltipViewModel PersuasionHint { get; set; }` |
| `ProgressText` | `public string ProgressText { get; set; }` |
| `PersuasionProgress` | `public MBBindingList<BoolItemWithActionVM> PersuasionProgress { get; set; }` |
| `IsPersuasionActive` | `public bool IsPersuasionActive { get; set; }` |
| `CurrentSuccessChance` | `public int CurrentSuccessChance { get; set; }` |
| `CurrentPersuasionOption` | `public PersuasionOptionVM CurrentPersuasionOption { get; set; }` |
| `CurrentFailChance` | `public int CurrentFailChance { get; set; }` |
| `CurrentCritSuccessChance` | `public int CurrentCritSuccessChance { get; set; }` |
| `CurrentCritFailChance` | `public int CurrentCritFailChance { get; set; }` |


## Key Methods

### OnPersuasionProgress

```csharp
public void OnPersuasionProgress(Tuple<PersuasionOptionArgs, PersuasionOptionResult> selectedOption)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### SetCurrentOption

```csharp
public void SetCurrentOption(PersuasionOptionVM option)
```

### RefreshPersusasion

```csharp
public void RefreshPersusasion()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
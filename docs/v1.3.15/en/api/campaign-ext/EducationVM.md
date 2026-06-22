<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EducationVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EducationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EducationVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Education` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `StageTitleText` | `public string StageTitleText { get; set; }` |
| `ChooseText` | `public string ChooseText { get; set; }` |
| `PageDescriptionText` | `public string PageDescriptionText { get; set; }` |
| `OptionEffectText` | `public string OptionEffectText { get; set; }` |
| `OptionDescriptionText` | `public string OptionDescriptionText { get; set; }` |
| `NextText` | `public string NextText { get; set; }` |
| `PreviousText` | `public string PreviousText { get; set; }` |
| `CanAdvance` | `public bool CanAdvance { get; set; }` |
| `CanGoBack` | `public bool CanGoBack { get; set; }` |
| `OnlyHasOneOption` | `public bool OnlyHasOneOption { get; set; }` |
| `Options` | `public MBBindingList<EducationOptionVM> Options { get; set; }` |
| `GainedPropertiesController` | `public EducationGainedPropertiesVM GainedPropertiesController { get; set; }` |
| `Review` | `public EducationReviewVM Review { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteNextStage

```csharp
public void ExecuteNextStage()
```

### ExecutePreviousStage

```csharp
public void ExecutePreviousStage()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotKey)
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
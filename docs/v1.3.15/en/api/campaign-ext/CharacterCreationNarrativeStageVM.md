<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationNarrativeStageVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationNarrativeStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CharacterCreationNarrativeStageVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `GainedPropertiesController` | `public CharacterCreationGainedPropertiesVM GainedPropertiesController { get; set; }` |
| `SelectedOption` | `public CharacterCreationOptionVM SelectedOption { get; set; }` |
| `SelectionList` | `public MBBindingList<CharacterCreationOptionVM> SelectionList { get; set; }` |


## Key Methods

### RefreshMenu

```csharp
public void RefreshMenu()
```

### OnOptionSelected

```csharp
public void OnOptionSelected(CharacterCreationOptionVM option)
```

### OnNextStage

```csharp
public override void OnNextStage()
```

### OnPreviousStage

```csharp
public override void OnPreviousStage()
```

### CanAdvanceToNextStage

```csharp
public override bool CanAdvanceToNextStage()
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
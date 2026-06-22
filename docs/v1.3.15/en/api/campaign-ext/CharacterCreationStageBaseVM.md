<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationStageBaseVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationStageBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CharacterCreationStageBaseVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `SelectionText` | `public string SelectionText { get; set; }` |
| `NextStageText` | `public string NextStageText { get; set; }` |
| `PreviousStageText` | `public string PreviousStageText { get; set; }` |
| `TotalStageCount` | `public int TotalStageCount { get; set; }` |
| `FurthestIndex` | `public int FurthestIndex { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `AnyItemSelected` | `public bool AnyItemSelected { get; set; }` |
| `CanAdvance` | `public bool CanAdvance { get; set; }` |


## Key Methods

### OnNextStage

```csharp
public abstract void OnNextStage()
```

### OnPreviousStage

```csharp
public abstract void OnPreviousStage()
```

### CanAdvanceToNextStage

```csharp
public abstract bool CanAdvanceToNextStage()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
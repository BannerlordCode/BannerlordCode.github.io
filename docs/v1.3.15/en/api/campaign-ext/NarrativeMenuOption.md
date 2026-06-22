<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NarrativeMenuOption`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NarrativeMenuOption

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `NarrativeMenuOption` is a class in the `TaleWorlds.CampaignSystem.CharacterCreationContent` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PositiveEffectText` | `public TextObject PositiveEffectText { get; }` |


## Key Methods

### OnCondition

```csharp
public bool OnCondition(CharacterCreationManager characterCreationManager)
```

### OnSelect

```csharp
public void OnSelect(CharacterCreationManager characterCreationManager)
```

### OnConsequence

```csharp
public void OnConsequence(CharacterCreationManager characterCreationManager)
```

### SetOnCondition

```csharp
public void SetOnCondition(NarrativeMenuOptionOnConditionDelegate onCondition)
```

### SetOnSelect

```csharp
public void SetOnSelect(NarrativeMenuOptionOnSelectDelegate onSelect)
```

### SetOnConsequence

```csharp
public void SetOnConsequence(NarrativeMenuOptionOnConsequenceDelegate onConsequence)
```

### ApplyFinalEffects

```csharp
public void ApplyFinalEffects(CharacterCreationContent characterCreationContent)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
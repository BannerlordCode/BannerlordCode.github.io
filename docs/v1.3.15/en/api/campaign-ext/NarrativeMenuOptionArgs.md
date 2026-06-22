<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NarrativeMenuOptionArgs`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NarrativeMenuOptionArgs

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `NarrativeMenuOptionArgs` is a class in the `TaleWorlds.CampaignSystem.CharacterCreationContent` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `AffectedSkills` | `public MBList<SkillObject> AffectedSkills { get; }` |
| `SkillLevelToAdd` | `public int SkillLevelToAdd { get; }` |
| `AffectedTraits` | `public MBList<TraitObject> AffectedTraits { get; }` |
| `TraitLevelToAdd` | `public int TraitLevelToAdd { get; }` |
| `FocusToAdd` | `public int FocusToAdd { get; }` |
| `UnspentFocusToAdd` | `public int UnspentFocusToAdd { get; }` |
| `EffectedAttribute` | `public CharacterAttribute EffectedAttribute { get; }` |
| `AttributeLevelToAdd` | `public int AttributeLevelToAdd { get; }` |
| `UnspentAttributeToAdd` | `public int UnspentAttributeToAdd { get; }` |
| `RenownToAdd` | `public int RenownToAdd { get; }` |
| `GoldToAdd` | `public int GoldToAdd { get; }` |
| `PositiveEffectText` | `public TextObject PositiveEffectText { get; }` |


## Key Methods

### SetAffectedSkills

```csharp
public void SetAffectedSkills(SkillObject affectedSkills)
```

### SetFocusToSkills

```csharp
public void SetFocusToSkills(int focusToAdd)
```

### SetLevelToSkills

```csharp
public void SetLevelToSkills(int levelToAdd)
```

### SetAffectedTraits

```csharp
public void SetAffectedTraits(TraitObject affectedTraits)
```

### SetLevelToTraits

```csharp
public void SetLevelToTraits(int levelToAdd)
```

### SetLevelToAttribute

```csharp
public void SetLevelToAttribute(CharacterAttribute characterAttribute, int levelToAdd)
```

### SetRenownToAdd

```csharp
public void SetRenownToAdd(int value)
```

### SetUnspentFocusToAdd

```csharp
public void SetUnspentFocusToAdd(int value)
```

### SetUnspentAttributeToAdd

```csharp
public void SetUnspentAttributeToAdd(int value)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NarrativeMenu`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NarrativeMenu

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `NarrativeMenu` is a class in the `TaleWorlds.CampaignSystem.CharacterCreationContent` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Characters` | `public List<NarrativeMenuCharacter> Characters { get; }` |
| `CharacterCreationMenuOptions` | `public MBReadOnlyList<NarrativeMenuOption> CharacterCreationMenuOptions { get; }` |


## Key Methods

### AddNarrativeMenuOption

```csharp
public void AddNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)
```

### RemoveNarrativeMenuOption

```csharp
public void RemoveNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)
```

### GetNarrativeMenuCharacterArgsDelegate

```csharp
public delegate List<NarrativeMenuCharacterArgs> GetNarrativeMenuCharacterArgsDelegate(CultureObject culture, string occupationType, CharacterCreationManager characterCreationManager)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
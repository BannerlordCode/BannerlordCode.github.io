<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterStatsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterStatsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterStatsModel : MBGameModel<CharacterStatsModel>`
**Base:** `MBGameModel<CharacterStatsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterStatsModel.cs`

## Overview

`CharacterStatsModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CharacterStatsModel>(new MyCharacterStatsModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxCharacterTier` | `public abstract int MaxCharacterTier { get; }` |

## Key Methods

### MaxHitpoints
```csharp
public abstract ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)
```

### GetTier
```csharp
public abstract int GetTier(CharacterObject character)
```

### WoundedHitPointLimit
```csharp
public abstract int WoundedHitPointLimit(Hero hero)
```

## Usage Example

```csharp
// Typical usage of CharacterStatsModel (Model)
Game.Current.ReplaceModel<CharacterStatsModel>(new MyCharacterStatsModel());
```

## See Also

- [Complete Class Catalog](../catalog)
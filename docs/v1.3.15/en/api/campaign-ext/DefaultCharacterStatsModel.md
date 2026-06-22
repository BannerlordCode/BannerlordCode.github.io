<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCharacterStatsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCharacterStatsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterStatsModel : CharacterStatsModel`
**Base:** `CharacterStatsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs`

## Overview

`DefaultCharacterStatsModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultCharacterStatsModel>(new MyDefaultCharacterStatsModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxCharacterTier` | `public override int MaxCharacterTier { get; }` |

## Key Methods

### WoundedHitPointLimit
```csharp
public override int WoundedHitPointLimit(Hero hero)
```

### GetTier
```csharp
public override int GetTier(CharacterObject character)
```

### MaxHitpoints
```csharp
public override ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)
```

## Usage Example

```csharp
// Typical usage of DefaultCharacterStatsModel (Model)
Game.Current.ReplaceModel<DefaultCharacterStatsModel>(new MyDefaultCharacterStatsModel());
```

## See Also

- [Complete Class Catalog](../catalog)
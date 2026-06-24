<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCharacterStatsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCharacterStatsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterStatsModel : CharacterStatsModel`
**Base:** `CharacterStatsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs`

## Overview

`DefaultCharacterStatsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCharacterStatsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxCharacterTier` | `public override int MaxCharacterTier { get; }` |

## Key Methods

### WoundedHitPointLimit
`public override int WoundedHitPointLimit(Hero hero)`

**Purpose:** Handles logic related to `wounded hit point limit`.

### GetTier
`public override int GetTier(CharacterObject character)`

**Purpose:** Gets the current value of `tier`.

### MaxHitpoints
`public override ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `max hitpoints`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCharacterStatsModel>(new MyDefaultCharacterStatsModel());
```

## See Also

- [Complete Class Catalog](../catalog)
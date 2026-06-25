---
title: "CharacterStatsModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterStatsModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterStatsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterStatsModel : MBGameModel<CharacterStatsModel>`
**Base:** `MBGameModel<CharacterStatsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterStatsModel.cs`

## Overview

`CharacterStatsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CharacterStatsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxCharacterTier` | `public abstract int MaxCharacterTier { get; }` |

## Key Methods

### MaxHitpoints
`public abstract ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `max hitpoints`.

### GetTier
`public abstract int GetTier(CharacterObject character)`

**Purpose:** Gets the current value of `tier`.

### WoundedHitPointLimit
`public abstract int WoundedHitPointLimit(Hero hero)`

**Purpose:** Handles logic related to `wounded hit point limit`.

## Usage Example

```csharp
var implementation = new CustomCharacterStatsModel();
```

## See Also

- [Complete Class Catalog](../catalog)
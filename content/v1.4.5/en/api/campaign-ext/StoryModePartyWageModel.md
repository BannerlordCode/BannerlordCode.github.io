---
title: "StoryModePartyWageModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModePartyWageModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModePartyWageModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModePartyWageModel : PartyWageModel`
**Base:** `PartyWageModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModePartyWageModel.cs`

## Overview

`StoryModePartyWageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModePartyWageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCharacterWage
`public override int GetCharacterWage(CharacterObject character)`

**Purpose:** Gets the current value of `character wage`.

### GetTotalWage
`public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `total wage`.

### GetTroopRecruitmentCost
`public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`

**Purpose:** Gets the current value of `troop recruitment cost`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModePartyWageModel>(new MyStoryModePartyWageModel());
```

## See Also

- [Complete Class Catalog](../catalog)
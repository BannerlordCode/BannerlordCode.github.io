---
title: "StoryModeEncounterGameMenuModel"
description: "Auto-generated class reference for StoryModeEncounterGameMenuModel."
---
# StoryModeEncounterGameMenuModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeEncounterGameMenuModel : EncounterGameMenuModel`
**Base:** `EncounterGameMenuModel`
**File:** `StoryMode/GameComponents/StoryModeEncounterGameMenuModel.cs`

## Overview

`StoryModeEncounterGameMenuModel` chooses which menu id the player is shown when the map encounters another party, and can veto the choice of battle entirely. `GetEncounterMenu` (`StoryMode/GameComponents/StoryModeEncounterGameMenuModel.cs:13`) resolves the settlement at the encounter position and returns the `"training_field_menu"` id when that settlement is a `TrainingField` (`:19`); failing that, it returns `"storymode_game_menu_blocker"` when the storyline restricts interaction (`:25`). In both blocked cases it also forces the two `out` flags to `false`, so the player is offered neither starting nor joining the battle — that is the mechanism, not a side effect of the string.

## Mental Model

The method returns a menu id and writes its answer through two `out` parameters, so an override must set both even when it only means to change the id. `PlayerEncounter.cs:700` calls it with the attacker and defender party and reads both flags, and calls it a second time at `:708` after the initial branch — two separate reads of the same model within one encounter, not one cached decision. That second read is where a mod's flag becomes inconsistent with its menu id if the story state changed in between. The training-field test is positional rather than settlement-type-wide: it inspects whichever settlement the encounter resolves to, so an encounter outside a training field never takes that branch even if both parties are training troops. The three remaining members (`GetGenericStateMenu`, `GetNewPartyJoinMenu`, `IsPlunderMenu`) are untouched passthroughs and are read from campaign code as well, at `Campaign.cs:1174` and `EncounterGameMenuBehavior.cs:1069`.

## Key Methods

### GetEncounterMenu
`public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)`

**Purpose:** Reads and returns the encounter menu value held by this instance.

```csharp
StoryModeEncounterGameMenuModel storyModeEncounterGameMenuModel = ...;
var result = storyModeEncounterGameMenuModel.GetEncounterMenu(attackerParty, defenderParty, startBattle, joinBattle);
```

### GetGenericStateMenu
`public override string GetGenericStateMenu()`

**Purpose:** Reads and returns the generic state menu value held by this instance.

```csharp
StoryModeEncounterGameMenuModel storyModeEncounterGameMenuModel = ...;
var result = storyModeEncounterGameMenuModel.GetGenericStateMenu();
```

### GetNewPartyJoinMenu
`public override string GetNewPartyJoinMenu(MobileParty newParty)`

**Purpose:** Reads and returns the new party join menu value held by this instance.

```csharp
StoryModeEncounterGameMenuModel storyModeEncounterGameMenuModel = ...;
var result = storyModeEncounterGameMenuModel.GetNewPartyJoinMenu(newParty);
```

### GetRaidCompleteMenu
`public override string GetRaidCompleteMenu()`

**Purpose:** Reads and returns the raid complete menu value held by this instance.

```csharp
StoryModeEncounterGameMenuModel storyModeEncounterGameMenuModel = ...;
var result = storyModeEncounterGameMenuModel.GetRaidCompleteMenu();
```

### IsPlunderMenu
`public override bool IsPlunderMenu(string menuId)`

**Purpose:** Determines whether this instance is in the plunder menu state or condition.

```csharp
StoryModeEncounterGameMenuModel storyModeEncounterGameMenuModel = ...;
var result = storyModeEncounterGameMenuModel.IsPlunderMenu("example");
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<EncounterGameMenuModel>(new StoryModeEncounterGameMenuModel());
}
```

`EncounterGameMenuModel` is declared as `MBGameModel<EncounterGameMenuModel>` (`EncounterGameMenuModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:91`.

## See Also

- [Area Index](../)
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

`StoryModeEncounterGameMenuModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeEncounterGameMenuModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEncounterMenu
`public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)`

**Purpose:** Reads and returns the `encounter menu` value held by the current object.

```csharp
// Obtain an instance of StoryModeEncounterGameMenuModel from the subsystem API first
StoryModeEncounterGameMenuModel storyModeEncounterGameMenuModel = ...;
var result = storyModeEncounterGameMenuModel.GetEncounterMenu(attackerParty, defenderParty, startBattle, joinBattle);
```

### GetGenericStateMenu
`public override string GetGenericStateMenu()`

**Purpose:** Reads and returns the `generic state menu` value held by the current object.

```csharp
// Obtain an instance of StoryModeEncounterGameMenuModel from the subsystem API first
StoryModeEncounterGameMenuModel storyModeEncounterGameMenuModel = ...;
var result = storyModeEncounterGameMenuModel.GetGenericStateMenu();
```

### GetNewPartyJoinMenu
`public override string GetNewPartyJoinMenu(MobileParty newParty)`

**Purpose:** Reads and returns the `new party join menu` value held by the current object.

```csharp
// Obtain an instance of StoryModeEncounterGameMenuModel from the subsystem API first
StoryModeEncounterGameMenuModel storyModeEncounterGameMenuModel = ...;
var result = storyModeEncounterGameMenuModel.GetNewPartyJoinMenu(newParty);
```

### GetRaidCompleteMenu
`public override string GetRaidCompleteMenu()`

**Purpose:** Reads and returns the `raid complete menu` value held by the current object.

```csharp
// Obtain an instance of StoryModeEncounterGameMenuModel from the subsystem API first
StoryModeEncounterGameMenuModel storyModeEncounterGameMenuModel = ...;
var result = storyModeEncounterGameMenuModel.GetRaidCompleteMenu();
```

### IsPlunderMenu
`public override bool IsPlunderMenu(string menuId)`

**Purpose:** Determines whether the current object is in the `plunder menu` state or condition.

```csharp
// Obtain an instance of StoryModeEncounterGameMenuModel from the subsystem API first
StoryModeEncounterGameMenuModel storyModeEncounterGameMenuModel = ...;
var result = storyModeEncounterGameMenuModel.IsPlunderMenu("example");
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeEncounterGameMenuModel>(new MyStoryModeEncounterGameMenuModel());
```

## See Also

- [Area Index](../)
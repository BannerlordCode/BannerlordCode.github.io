---
title: "FightTournamentGame"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FightTournamentGame`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FightTournamentGame

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FightTournamentGame : TournamentGame`
**Base:** `TournamentGame`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.TournamentGames/FightTournamentGame.cs`

## Overview

`FightTournamentGame` lives in `TaleWorlds.CampaignSystem.TournamentGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TournamentGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CanBeAParticipant
`public override bool CanBeAParticipant(CharacterObject character, bool considerSkills)`

**Purpose:** Checks whether the current object can `be a participant`.

### GetMenuText
`public override TextObject GetMenuText()`

**Purpose:** Gets the current value of `menu text`.

### OpenMission
`public override void OpenMission(Settlement settlement, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open mission`.

### GetParticipantCharacters
`public override MBList<CharacterObject> GetParticipantCharacters(Settlement settlement, bool includePlayer = true)`

**Purpose:** Gets the current value of `participant characters`.

## Usage Example

```csharp
var value = new FightTournamentGame();
value.CanBeAParticipant(character, false);
```

## See Also

- [Complete Class Catalog](../catalog)
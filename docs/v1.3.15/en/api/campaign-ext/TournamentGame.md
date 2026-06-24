<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentGame`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentGame

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TournamentGame`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentGame.cs`

## Overview

`TournamentGame` lives in `TaleWorlds.CampaignSystem.TournamentGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TournamentGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Town` | `public Town Town { get; }` |
| `CreationTime` | `public CampaignTime CreationTime { get; }` |
| `Mode` | `public TournamentGame.QualificationMode Mode { get; set; }` |
| `MaxTeamSize` | `public virtual int MaxTeamSize { get; }` |
| `MaxTeamNumberPerMatch` | `public virtual int MaxTeamNumberPerMatch { get; }` |
| `Prize` | `public ItemObject Prize { get; }` |
| `TournamentWinRenown` | `public virtual float TournamentWinRenown { get; }` |
| `TournamentWinInfluence` | `public virtual float TournamentWinInfluence { get; }` |
| `RemoveTournamentAfterDays` | `public abstract int RemoveTournamentAfterDays { get; }` |
| `MaximumParticipantCount` | `public abstract int MaximumParticipantCount { get; }` |

## Key Methods

### GetMenuText
`public abstract TextObject GetMenuText()`

**Purpose:** Gets the current value of `menu text`.

### OpenMission
`public abstract void OpenMission(Settlement settlement, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open mission`.

### GetParticipantCharacters
`public abstract MBList<CharacterObject> GetParticipantCharacters(Settlement settlement, bool includePlayer = true)`

**Purpose:** Gets the current value of `participant characters`.

### CanBeAParticipant
`public virtual bool CanBeAParticipant(CharacterObject character, bool considerSkills)`

**Purpose:** Checks whether the current object can `be a participant`.

### PrepareForTournamentGame
`public void PrepareForTournamentGame(bool isPlayerParticipating)`

**Purpose:** Handles logic related to `prepare for tournament game`.

### UpdateTournamentPrize
`public void UpdateTournamentPrize(bool includePlayer, bool removeCurrentPrize = false)`

**Purpose:** Updates the state or data of `tournament prize`.

## Usage Example

```csharp
var implementation = new CustomTournamentGame();
```

## See Also

- [Complete Class Catalog](../catalog)
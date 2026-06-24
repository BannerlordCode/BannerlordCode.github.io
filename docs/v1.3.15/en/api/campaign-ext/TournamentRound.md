<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentRound`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentRound

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentRound`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentRound.cs`

## Overview

`TournamentRound` lives in `TaleWorlds.CampaignSystem.TournamentGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TournamentGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Matches` | `public TournamentMatch Matches { get; }` |
| `CurrentMatchIndex` | `public int CurrentMatchIndex { get; }` |
| `CurrentMatch` | `public TournamentMatch CurrentMatch { get; }` |

## Key Methods

### OnMatchEnded
`public void OnMatchEnded()`

**Purpose:** Called when the `match ended` event is raised.

### EndMatch
`public void EndMatch()`

**Purpose:** Handles logic related to `end match`.

### AddParticipant
`public void AddParticipant(TournamentParticipant participant, bool firstTime = false)`

**Purpose:** Adds `participant` to the current collection or state.

## Usage Example

```csharp
var value = new TournamentRound();
value.OnMatchEnded();
```

## See Also

- [Complete Class Catalog](../catalog)
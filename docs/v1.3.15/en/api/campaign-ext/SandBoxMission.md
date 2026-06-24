<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxMission`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SandBoxMission

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxMission`
**Area:** campaign-ext

## Overview

`SandBoxMission` lives in `TaleWorlds.CampaignSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTournamentArcheryMission
`public static IMission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament archery mission`.

### OpenTournamentFightMission
`public static IMission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament fight mission`.

### OpenTournamentHorseRaceMission
`public static IMission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament horse race mission`.

### OpenTournamentJoustingMission
`public static IMission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament jousting mission`.

### OpenBattleChallengeMission
`public static IMission OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)`

**Purpose:** Handles logic related to `open battle challenge mission`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
SandBoxMission.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)

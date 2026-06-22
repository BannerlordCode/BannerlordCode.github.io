<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FightTournamentGame`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FightTournamentGame

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `FightTournamentGame` is a class in the `TaleWorlds.CampaignSystem.TournamentGames` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `MaxTeamSize` | `public override int MaxTeamSize { get; }` |
| `MaxTeamNumberPerMatch` | `public override int MaxTeamNumberPerMatch { get; }` |
| `RemoveTournamentAfterDays` | `public override int RemoveTournamentAfterDays { get; }` |
| `MaximumParticipantCount` | `public override int MaximumParticipantCount { get; }` |


## Key Methods

### CanBeAParticipant

```csharp
public override bool CanBeAParticipant(CharacterObject character, bool considerSkills)
```

### GetMenuText

```csharp
public override TextObject GetMenuText()
```

### OpenMission

```csharp
public override void OpenMission(Settlement settlement, bool isPlayerParticipating)
```

### GetParticipantCharacters

```csharp
public override MBList<CharacterObject> GetParticipantCharacters(Settlement settlement, bool includePlayer = true)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
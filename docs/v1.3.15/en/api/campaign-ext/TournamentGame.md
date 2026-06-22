<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentGame`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentGame

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TournamentGame` is a class in the `TaleWorlds.CampaignSystem.TournamentGames` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public abstract TextObject GetMenuText()
```

### OpenMission

```csharp
public abstract void OpenMission(Settlement settlement, bool isPlayerParticipating)
```

### GetParticipantCharacters

```csharp
public abstract MBList<CharacterObject> GetParticipantCharacters(Settlement settlement, bool includePlayer = true)
```

### CanBeAParticipant

```csharp
public virtual bool CanBeAParticipant(CharacterObject character, bool considerSkills)
```

### PrepareForTournamentGame

```csharp
public void PrepareForTournamentGame(bool isPlayerParticipating)
```

### UpdateTournamentPrize

```csharp
public void UpdateTournamentPrize(bool includePlayer, bool removeCurrentPrize = false)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
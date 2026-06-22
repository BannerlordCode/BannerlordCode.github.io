<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentParticipant`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentParticipant

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TournamentParticipant` is a class in the `TaleWorlds.CampaignSystem.TournamentGames` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; }` |
| `Character` | `public CharacterObject Character { get; }` |
| `Descriptor` | `public UniqueTroopDescriptor Descriptor { get; }` |
| `Team` | `public TournamentTeam Team { get; }` |
| `MatchEquipment` | `public Equipment MatchEquipment { get; set; }` |
| `IsAssigned` | `public bool IsAssigned { get; set; }` |
| `IsPlayer` | `public bool IsPlayer { get; }` |


## Key Methods

### SetTeam

```csharp
public void SetTeam(TournamentTeam team)
```

### AddScore

```csharp
public int AddScore(int score)
```

### ResetScore

```csharp
public void ResetScore()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
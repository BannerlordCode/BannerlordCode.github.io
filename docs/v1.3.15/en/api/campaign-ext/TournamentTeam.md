<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentTeam`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentTeam

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TournamentTeam` is a class in the `TaleWorlds.CampaignSystem.TournamentGames` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TeamSize` | `public int TeamSize { get; }` |
| `TeamColor` | `public uint TeamColor { get; }` |
| `TeamBanner` | `public Banner TeamBanner { get; }` |
| `IsPlayerTeam` | `public bool IsPlayerTeam { get; }` |
| `Participants` | `public IEnumerable<TournamentParticipant> Participants { get; }` |
| `Score` | `public int Score { get; }` |


## Key Methods

### IsParticipantRequired

```csharp
public bool IsParticipantRequired()
```

### AddParticipant

```csharp
public void AddParticipant(TournamentParticipant participant)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
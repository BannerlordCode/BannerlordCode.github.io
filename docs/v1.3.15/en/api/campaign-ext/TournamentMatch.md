<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentMatch`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentMatch

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TournamentMatch` is a class in the `TaleWorlds.CampaignSystem.TournamentGames` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Teams` | `public IEnumerable<TournamentTeam> Teams { get; }` |
| `Participants` | `public IEnumerable<TournamentParticipant> Participants { get; }` |
| `State` | `public TournamentMatch.MatchState State { get; }` |
| `Winners` | `public IEnumerable<TournamentParticipant> Winners { get; }` |
| `IsReady` | `public bool IsReady { get; }` |


## Key Methods

### End

```csharp
public void End()
```

### Start

```csharp
public void Start()
```

### GetParticipant

```csharp
public TournamentParticipant GetParticipant(int uniqueSeed)
```

### IsParticipantRequired

```csharp
public bool IsParticipantRequired()
```

### AddParticipant

```csharp
public void AddParticipant(TournamentParticipant participant, bool firstTime)
```

### IsPlayerParticipating

```csharp
public bool IsPlayerParticipating()
```

### IsPlayerWinner

```csharp
public bool IsPlayerWinner()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
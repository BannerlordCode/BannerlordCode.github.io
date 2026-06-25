---
title: "TournamentTeamVM"
description: "Auto-generated class reference for TournamentTeamVM."
---
# TournamentTeamVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentTeamVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentTeamVM.cs`

## Overview

`TournamentTeamVM` lives in `SandBox.ViewModelCollection.Tournament` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tournament` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Participants` | `public List<TournamentParticipantVM> Participants { get; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `Participant1` | `public TournamentParticipantVM Participant1 { get; set; }` |
| `Participant2` | `public TournamentParticipantVM Participant2 { get; set; }` |
| `Participant3` | `public TournamentParticipantVM Participant3 { get; set; }` |
| `Participant4` | `public TournamentParticipantVM Participant4 { get; set; }` |
| `Participant5` | `public TournamentParticipantVM Participant5 { get; set; }` |
| `Participant6` | `public TournamentParticipantVM Participant6 { get; set; }` |
| `Participant7` | `public TournamentParticipantVM Participant7 { get; set; }` |
| `Participant8` | `public TournamentParticipantVM Participant8 { get; set; }` |
| `Count` | `public int Count { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of TournamentTeamVM from the subsystem API first
TournamentTeamVM tournamentTeamVM = ...;
tournamentTeamVM.RefreshValues();
```

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of TournamentTeamVM from the subsystem API first
TournamentTeamVM tournamentTeamVM = ...;
tournamentTeamVM.Initialize();
```

### Initialize
`public void Initialize(TournamentTeam team)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of TournamentTeamVM from the subsystem API first
TournamentTeamVM tournamentTeamVM = ...;
tournamentTeamVM.Initialize(team);
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of TournamentTeamVM from the subsystem API first
TournamentTeamVM tournamentTeamVM = ...;
tournamentTeamVM.Refresh();
```

### GetParticipants
`public IEnumerable<TournamentParticipantVM> GetParticipants()`

**Purpose:** Reads and returns the `participants` value held by the current object.

```csharp
// Obtain an instance of TournamentTeamVM from the subsystem API first
TournamentTeamVM tournamentTeamVM = ...;
var result = tournamentTeamVM.GetParticipants();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TournamentTeamVM tournamentTeamVM = ...;
tournamentTeamVM.RefreshValues();
```

## See Also

- [Area Index](../)
---
title: "TournamentParticipantVM"
description: "Auto-generated class reference for TournamentParticipantVM."
---
# TournamentParticipantVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentParticipantVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentParticipantVM.cs`

## Overview

`TournamentParticipantVM` lives in `SandBox.ViewModelCollection.Tournament` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tournament` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Participant` | `public TournamentParticipant Participant { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `TeamColor` | `public Color TeamColor { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `State` | `public int State { get; set; }` |
| `IsQualifiedForNextRound` | `public bool IsQualifiedForNextRound { get; set; }` |
| `Score` | `public string Score { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Character` | `public CharacterViewModel Character { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of TournamentParticipantVM from the subsystem API first
TournamentParticipantVM tournamentParticipantVM = ...;
tournamentParticipantVM.RefreshValues();
```

### Refresh
`public void Refresh(TournamentParticipant participant, Color teamColor)`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of TournamentParticipantVM from the subsystem API first
TournamentParticipantVM tournamentParticipantVM = ...;
tournamentParticipantVM.Refresh(participant, teamColor);
```

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**Purpose:** Runs the operation or workflow associated with open encyclopedia.

```csharp
// Obtain an instance of TournamentParticipantVM from the subsystem API first
TournamentParticipantVM tournamentParticipantVM = ...;
tournamentParticipantVM.ExecuteOpenEncyclopedia();
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of TournamentParticipantVM from the subsystem API first
TournamentParticipantVM tournamentParticipantVM = ...;
tournamentParticipantVM.Refresh();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TournamentParticipantVM tournamentParticipantVM = ...;
tournamentParticipantVM.RefreshValues();
```

## See Also

- [Area Index](../)
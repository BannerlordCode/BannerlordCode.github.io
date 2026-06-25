---
title: "TournamentMatchVM"
description: "Auto-generated class reference for TournamentMatchVM."
---
# TournamentMatchVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentMatchVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Tournament/TournamentMatchVM.cs`

## Overview

`TournamentMatchVM` lives in `SandBox.ViewModelCollection.Tournament` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tournament` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Match` | `public TournamentMatch Match { get; }` |
| `Teams` | `public List<TournamentTeamVM> Teams { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `State` | `public int State { get; set; }` |
| `Count` | `public int Count { get; set; }` |
| `Team1` | `public TournamentTeamVM Team1 { get; set; }` |
| `Team2` | `public TournamentTeamVM Team2 { get; set; }` |
| `Team3` | `public TournamentTeamVM Team3 { get; set; }` |
| `Team4` | `public TournamentTeamVM Team4 { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of TournamentMatchVM from the subsystem API first
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.RefreshValues();
```

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of TournamentMatchVM from the subsystem API first
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.Initialize();
```

### Initialize
`public void Initialize(TournamentMatch match)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of TournamentMatchVM from the subsystem API first
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.Initialize(match);
```

### Refresh
`public void Refresh(bool forceRefresh)`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of TournamentMatchVM from the subsystem API first
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.Refresh(false);
```

### RefreshActiveMatch
`public void RefreshActiveMatch()`

**Purpose:** Keeps the display or cache of `active match` in sync with the underlying state.

```csharp
// Obtain an instance of TournamentMatchVM from the subsystem API first
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.RefreshActiveMatch();
```

### Refresh
`public void Refresh(TournamentMatchVM target)`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of TournamentMatchVM from the subsystem API first
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.Refresh(target);
```

### GetParticipants
`public IEnumerable<TournamentParticipantVM> GetParticipants()`

**Purpose:** Reads and returns the `participants` value held by the current object.

```csharp
// Obtain an instance of TournamentMatchVM from the subsystem API first
TournamentMatchVM tournamentMatchVM = ...;
var result = tournamentMatchVM.GetParticipants();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.RefreshValues();
```

## See Also

- [Area Index](../)
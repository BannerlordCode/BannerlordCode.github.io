<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentMatchVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentMatchVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentMatchVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentMatchVM.cs`

## Overview

`TournamentMatchVM` lives in `SandBox.ViewModelCollection.Tournament` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tournament` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Match` | `public TournamentMatch Match { get; }` |
| `Teams` | `public List<TournamentTeamVM> Teams { get; }` |
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

**Purpose:** Refreshes the display or cache of `values`.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Initialize
`public void Initialize(TournamentMatch match)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Refresh
`public void Refresh(bool forceRefresh)`

**Purpose:** Refreshes the display or cache of `refresh`.

### RefreshActiveMatch
`public void RefreshActiveMatch()`

**Purpose:** Refreshes the display or cache of `active match`.

### Refresh
`public void Refresh(TournamentMatchVM target)`

**Purpose:** Refreshes the display or cache of `refresh`.

### GetParticipants
`public IEnumerable<TournamentParticipantVM> GetParticipants()`

**Purpose:** Gets the current value of `participants`.

## Usage Example

```csharp
var value = new TournamentMatchVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
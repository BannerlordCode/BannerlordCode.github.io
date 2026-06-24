<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentTeamVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Initialize
`public void Initialize(TournamentTeam team)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### GetParticipants
`public IEnumerable<TournamentParticipantVM> GetParticipants()`

**Purpose:** Gets the current value of `participants`.

## Usage Example

```csharp
var value = new TournamentTeamVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
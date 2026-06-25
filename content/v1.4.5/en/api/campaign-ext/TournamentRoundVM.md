---
title: "TournamentRoundVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentRoundVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentRoundVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentRoundVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Tournament/TournamentRoundVM.cs`

## Overview

`TournamentRoundVM` lives in `SandBox.ViewModelCollection.Tournament` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tournament` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Round` | `public TournamentRound Round { get; }` |
| `Matches` | `public List<TournamentMatchVM> Matches { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Count` | `public int Count { get; set; }` |
| `Match1` | `public TournamentMatchVM Match1 { get; set; }` |
| `Match2` | `public TournamentMatchVM Match2 { get; set; }` |
| `Match3` | `public TournamentMatchVM Match3 { get; set; }` |
| `Match4` | `public TournamentMatchVM Match4 { get; set; }` |
| `Match5` | `public TournamentMatchVM Match5 { get; set; }` |
| `Match6` | `public TournamentMatchVM Match6 { get; set; }` |
| `Match7` | `public TournamentMatchVM Match7 { get; set; }` |
| `Match8` | `public TournamentMatchVM Match8 { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Initialize
`public void Initialize(TournamentRound round, TextObject name)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetParticipants
`public IEnumerable<TournamentParticipantVM> GetParticipants()`

**Purpose:** Gets the current value of `participants`.

## Usage Example

```csharp
var value = new TournamentRoundVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
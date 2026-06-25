---
title: "TournamentParticipantVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentParticipantVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### Refresh
`public void Refresh(TournamentParticipant participant, Color teamColor)`

**Purpose:** Refreshes the display or cache of `refresh`.

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**Purpose:** Executes the `open encyclopedia` operation or workflow.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

## Usage Example

```csharp
var value = new TournamentParticipantVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
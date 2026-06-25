---
title: "TournamentPlayerState"
description: "Auto-generated class reference for TournamentPlayerState."
---
# TournamentPlayerState

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public enum TournamentPlayerState`
**Base:** none
**File:** `SandBox.ViewModelCollection/Tournament/TournamentParticipantVM.cs`

## Overview

`TournamentPlayerState` lives in `SandBox.ViewModelCollection.Tournament` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tournament` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
TournamentPlayerState instance = ...;
```

## See Also

- [Area Index](../)
---
title: "TournamentMatchState"
description: "Auto-generated class reference for TournamentMatchState."
---
# TournamentMatchState

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public enum TournamentMatchState`
**Base:** none
**File:** `SandBox.ViewModelCollection/Tournament/TournamentMatchVM.cs`

## Overview

`TournamentMatchState` lives in `SandBox.ViewModelCollection.Tournament` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tournament` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
TournamentMatchState instance = ...;
```

## See Also

- [Area Index](../)
---
title: "TournamentRewardVM"
description: "Auto-generated class reference for TournamentRewardVM."
---
# TournamentRewardVM

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentRewardVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/TournamentRewardVM.cs`

## Overview

`TournamentRewardVM` lives in `SandBox.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |
| `GotImageIdentifier` | `public bool GotImageIdentifier { get; set; }` |
| `ImageIdentifier` | `public ItemImageIdentifierVM ImageIdentifier { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
TournamentRewardVM instance = ...;
```

## See Also

- [Area Index](../)
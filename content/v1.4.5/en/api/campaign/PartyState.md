---
title: "PartyState"
description: "Auto-generated class reference for PartyState."
---
# PartyState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyState : PlayerGameState`
**Base:** `PlayerGameState`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/PartyState.cs`

## Overview

`PartyState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic { get; set; }` |
| `PartyScreenMode` | `public PartyScreenHelper.PartyScreenMode PartyScreenMode { get; set; }` |
| `IsDonating` | `public bool IsDonating { get; set; }` |
| `Handler` | `public IPartyScreenLogicHandler Handler { get; set; }` |

## Key Methods

### RequestUserInput
`public void RequestUserInput(string text, Action accept, Action cancel)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PartyState from the subsystem API first
PartyState partyState = ...;
partyState.RequestUserInput("example", accept, cancel);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyState partyState = ...;
partyState.RequestUserInput("example", accept, cancel);
```

## See Also

- [Area Index](../)
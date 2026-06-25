---
title: "GauntletPartyScreen"
description: "Auto-generated class reference for GauntletPartyScreen."
---
# GauntletPartyScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletPartyScreen : ScreenBase, IGameStateListener, IChangeableScreen, IPartyScreenLogicHandler, IPartyScreenPrisonHandler, IPartyScreenTroopHandler`
**Base:** `ScreenBase`
**File:** `SandBox.GauntletUI/GauntletPartyScreen.cs`

## Overview

`GauntletPartyScreen` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTroopUpgradesDisabled` | `public bool IsTroopUpgradesDisabled { get; }` |

## Key Methods

### RequestUserInput
`public void RequestUserInput(string text, Action accept, Action cancel)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GauntletPartyScreen from the subsystem API first
GauntletPartyScreen gauntletPartyScreen = ...;
gauntletPartyScreen.RequestUserInput("example", accept, cancel);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletPartyScreen gauntletPartyScreen = ...;
gauntletPartyScreen.RequestUserInput("example", accept, cancel);
```

## See Also

- [Area Index](../)
---
title: "GauntletPartyScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletPartyScreen`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletPartyScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletPartyScreen : ScreenBase, IGameStateListener, IChangeableScreen, IPartyScreenLogicHandler, IPartyScreenPrisonHandler, IPartyScreenTroopHandler`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI/GauntletPartyScreen.cs`

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

**Purpose:** Handles logic related to `request user input`.

## Usage Example

```csharp
var value = new GauntletPartyScreen();
value.RequestUserInput("example", accept, cancel);
```

## See Also

- [Complete Class Catalog](../catalog)
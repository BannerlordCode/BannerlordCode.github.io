---
title: "GamepadNavigationHelper"
description: "GamepadNavigationHelper — class in TaleWorlds.GauntletUI.GamepadNavigation. No public members of its own."
---

<!-- v147-skeleton -->
# GamepadNavigationHelper

**Namespace:** `TaleWorlds.GauntletUI.GamepadNavigation`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `internal static class GamepadNavigationHelper`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationHelper.cs`

## Overview

`GamepadNavigationHelper` is an internal class in TaleWorlds.GauntletUI.GamepadNavigation. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`GamepadNavigationHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on GamepadNavigationHelper itself in `TaleWorlds.GauntletUI.GamepadNavigation`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// GamepadNavigationHelper is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
// It exposes no public members.
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GamepadNavigationScope](../GamepadNavigationScope/) — `TaleWorlds.GauntletUI.GamepadNavigation`.
- [GamepadNavigationTypes](../GamepadNavigationTypes/) — `TaleWorlds.GauntletUI.GamepadNavigation`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/gui/](../) — the other types in this bucket.

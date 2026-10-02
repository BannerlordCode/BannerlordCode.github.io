---
title: "EngineInputManager"
description: "EngineInputManager — class in TaleWorlds.Engine.InputSystem. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# EngineInputManager

**Namespace:** `TaleWorlds.Engine.InputSystem`  
**Module:** `TaleWorlds.Engine`  
**Type:** `public class EngineInputManager : IInputManager`  
**Base:** `IInputManager`  
**Source:** `TaleWorlds.Engine/InputSystem/EngineInputManager.cs`

## Overview

`EngineInputManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends IInputManager, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Instance members** (5): `SetRumbleEffect`, `SetTriggerFeedback`, `SetTriggerWeaponEffect`, `SetTriggerVibration`, `SetLightbarColor`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SetLightbarColor` | method | Instance entry point. Takes 3 arguments: `float red`, `float green`, `float blue`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetRumbleEffect` | method | Instance entry point. Takes 6 arguments: `float[] lowFrequencyLevels`, `float[] lowFrequencyDurations`, `int numLowFrequencyElements`, `float[] highFrequencyLevels`, …. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetTriggerFeedback` | method | Instance entry point. Takes 4 arguments: `byte leftTriggerPosition`, `byte leftTriggerStrength`, `byte rightTriggerPosition`, `byte rightTriggerStrength`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetTriggerVibration` | method | Instance entry point. Takes 8 arguments: `float[] leftTriggerAmplitudes`, `float[] leftTriggerFrequencies`, `float[] leftTriggerDurations`, `int numLeftTriggerElements`, …. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetTriggerWeaponEffect` | method | Instance entry point. Takes 6 arguments: `byte leftStartPosition`, `byte leftEnd_position`, `byte leftStrength`, `byte rightStartPosition`, …. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// EngineInputManager exposes no accessor; the engine passes the instance to its callbacks.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.Engine/InputSystem/EngineInputManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/engine/](../) — the other types in this bucket.

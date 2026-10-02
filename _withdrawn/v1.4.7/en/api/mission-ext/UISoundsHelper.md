---
title: "UISoundsHelper"
description: "UISoundsHelper — class in TaleWorlds.MountAndBlade.View. 15 public members (15 static)."
---

<!-- v147-skeleton -->
# UISoundsHelper

**Namespace:** `TaleWorlds.MountAndBlade.View`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public static class UISoundsHelper`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/UISoundsHelper.cs`

## Overview

`UISoundsHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (15): `PlayUISound`, `DefaultSounds`, `PanelSounds`, `SiegeSounds`, `InventorySounds`, `PartySounds`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CampaignSounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `CraftingSounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `DefaultSounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `EndgameSounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `InventorySounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `KingdomSounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `MissionSounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `MultiplayerSounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `NotificationSounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `OrderOfBattleSounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `PanelSounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `PartySounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `PlayUISound` | method (static) | Static entry point. Takes 1 argument: `string soundName`. |
| `PortSounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `SiegeSounds` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// Static entry points on UISoundsHelper:
UISoundsHelper.PlayUISound(soundName);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/UISoundsHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.

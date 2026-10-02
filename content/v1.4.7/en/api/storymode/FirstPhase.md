---
title: "FirstPhase"
description: "FirstPhase — class in StoryMode.StoryModePhases. 8 public members (1 static)."
---

<!-- v147-skeleton -->
# FirstPhase

**Namespace:** `StoryMode.StoryModePhases`  
**Module:** `StoryMode`  
**Type:** `public class FirstPhase`  
**Source:** `StoryMode/StoryModePhases/FirstPhase.cs`

## Overview

`FirstPhase` is a named type in the StoryMode.StoryModePhases namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `FirstPhase`.
- **Static entry points** (1): `Instance`.
- **Instance members** (4): `FirstPhaseEndTime`, `AllPiecesCollected`, `CollectBannerPiece`, `MergeDragonBanner`.
- **Data and constants** (2): `NeededBannerPieceCount`, `FirstPhaseDurationAsYears`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Instance` | property (static) | Static entry point `FirstPhase` property. Read it for current state; a declared setter writes that state in place. |
| `AllPiecesCollected` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `CollectBannerPiece` | method | Instance entry point. Takes no arguments. |
| `FirstPhaseEndTime` | property | Instance entry point `CampaignTime` property. Read it for current state; a declared setter writes that state in place. |
| `MergeDragonBanner` | method | Instance entry point. Takes no arguments. |
| `FirstPhaseDurationAsYears` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `NeededBannerPieceCount` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `FirstPhase` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public FirstPhase()`.

## Usage Example

```csharp
var firstPhase = new FirstPhase();
firstPhase.CollectBannerPiece();
// Read current state through firstPhase.FirstPhaseEndTime.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `StoryMode/StoryModePhases/FirstPhase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ItemRoster](../../campaign/ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.

Section: [api/storymode/](../) — the other types in this bucket.

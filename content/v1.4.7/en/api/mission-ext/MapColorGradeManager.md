---
title: "MapColorGradeManager"
description: "MapColorGradeManager — class in TaleWorlds.MountAndBlade.View.Scripts. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# MapColorGradeManager

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class MapColorGradeManager : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/MapColorGradeManager.cs`

## Overview

`MapColorGradeManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends ScriptComponentBehavior, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Instance members** (8): `OnInit`, `OnEditorInit`, `GetTickRequirement`, `OnTick`, `OnEditorTick`, `OnEditorVariableChanged`, ….
- **Extension points** (6): `OnInit`, `OnEditorInit`, `GetTickRequirement`, `OnTick`, `OnEditorTick`, `OnEditorVariableChanged`.
- **Data and constants** (4): `ColorGradeEnabled`, `AtmosphereSimulationEnabled`, `TimeOfDay`, `SeasonTimeFactor`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetTickRequirement` | method (override) | Overrides the base member. Takes no arguments. Returns `ScriptComponentBehavior.TickRequirement`. Read path: prefer it over reaching for the backing store. |
| `OnEditorInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorVariableChanged` | method (override) | Overrides the base member. Takes 1 argument: `string variableName`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ApplyAtmosphere` | method | Instance entry point. Takes 1 argument: `bool forceLoadTextures`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ApplyColorGrade` | method | Instance entry point. Takes 1 argument: `float dt`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `AtmosphereSimulationEnabled` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `ColorGradeEnabled` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `SeasonTimeFactor` | field | Instance entry point `float` field — direct storage with no validation or notification. |
| `TimeOfDay` | field | Instance entry point `float` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// MapColorGradeManager exposes no accessor; the engine passes the instance to its callbacks.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/MapColorGradeManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/mission-ext/](../) — the other types in this bucket.

---
title: "HideoutBossFightBehavior"
description: "HideoutBossFightBehavior — class in SandBox.Objects.Cinematics. 18 public members (0 static)."
---

<!-- v147-skeleton -->
# HideoutBossFightBehavior

**Namespace:** `SandBox.Objects.Cinematics`  
**Module:** `SandBox`  
**Type:** `public class HideoutBossFightBehavior : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs`

## Overview

`HideoutBossFightBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends ScriptComponentBehavior, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Instance members** (15): `PerturbSeed`, `GetPlayerFrames`, `GetBossFrames`, `GetAllyFrames`, `GetBanditFrames`, `GetAlliesInitialFrame`, ….
- **Extension points** (3): `OnEditorVariableChanged`, `OnEditorTick`, `OnRemoved`.
- **Data and constants** (3): `MaxCameraHeight`, `MaxCameraWidth`, `ShowPreview`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnEditorTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorVariableChanged` | method (override) | Overrides the base member. Takes 1 argument: `string variableName`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRemoved` | method (override) | Overrides the base member. Takes 1 argument: `int removeReason`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ClampWorldPointToCameraVolume` | method | Instance entry point. Takes 2 arguments: `in Vec3 worldPoint`, `out Vec3 clampedPoint`. Returns `bool`. |
| `GetAlliesInitialFrame` | method | Instance entry point. Takes 1 argument: `out MatrixFrame frame`. Read path: prefer it over reaching for the backing store. |
| `GetAllyFrames` | method | Instance entry point. Takes 5 arguments: `out List<MatrixFrame> initialFrames`, `out List<MatrixFrame> targetFrames`, `int agentCount`, `float agentOffsetAngle`, …. Read path: prefer it over reaching for the backing store. |
| `GetBanditFrames` | method | Instance entry point. Takes 5 arguments: `out List<MatrixFrame> initialFrames`, `out List<MatrixFrame> targetFrames`, `int agentCount`, `float agentOffsetAngle`, …. Read path: prefer it over reaching for the backing store. |
| `GetBanditsInitialFrame` | method | Instance entry point. Takes 1 argument: `out MatrixFrame frame`. Read path: prefer it over reaching for the backing store. |
| `GetBossFrames` | method | Instance entry point. Takes 3 arguments: `out MatrixFrame initialFrame`, `out MatrixFrame targetFrame`, `float perturbAmount`. Read path: prefer it over reaching for the backing store. |
| `GetPlayerFrames` | method | Instance entry point. Takes 3 arguments: `out MatrixFrame initialFrame`, `out MatrixFrame targetFrame`, `float perturbAmount`. Read path: prefer it over reaching for the backing store. |
| `InnerRadius` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `IsWorldPointInsideCameraVolume` | method | Instance entry point. Takes 1 argument: `in Vec3 worldPoint`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OuterRadius` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `PerturbSeed` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `WalkDistance` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `MaxCameraHeight` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `MaxCameraWidth` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `ShowPreview` | field | Instance entry point `bool` field — direct storage with no validation or notification. |

## Usage Example

```csharp
public class MyHideoutBossFightBehavior : ScriptComponentBehavior
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyHideoutBossFightBehavior());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.

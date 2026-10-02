---
title: "SettlementPositionScript"
description: "SettlementPositionScript — class in SandBox.View.Map. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# SettlementPositionScript

**Namespace:** `SandBox.View.Map`  
**Module:** `SandBox.View`  
**Type:** `public class SettlementPositionScript : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `SandBox.View/Map/SettlementPositionScript.cs`

## Overview

`SettlementPositionScript` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScriptComponentBehavior, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (5): `OnInit`, `OnEditorInit`, `OnEditorVariableChanged`, `OnSceneSave`, `IsOnlyVisual`.
- **Extension points** (5): `OnInit`, `OnEditorInit`, `OnEditorVariableChanged`, `OnSceneSave`, `IsOnlyVisual`.
- **Data and constants** (3): `CheckPositions`, `SavePositions`, `ComputeAndSaveSettlementDistanceCache`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsOnlyVisual` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnEditorInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorVariableChanged` | method (override) | Overrides the base member. Takes 1 argument: `string variableName`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSceneSave` | method (override) | Overrides the base member. Takes 1 argument: `string saveFolder`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CheckPositions` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |
| `ComputeAndSaveSettlementDistanceCache` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |
| `SavePositions` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScriptComponentBehavior.

// Lifecycle hooks this type declares:
//   protected override void OnInit()
//   protected override void OnEditorInit()
//   protected override void OnEditorVariableChanged(string variableName)
//   protected override void OnSceneSave(string saveFolder)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/SettlementPositionScript.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ModuleHelper](../../modulemanager/ModuleHelper/) — `TaleWorlds.ModuleManager`.
- [Error](../../core-extra/Error/) — `TaleWorlds.LinQuick`.
- [SandBoxNavigationCache](../../campaign/SandBoxNavigationCache/) — `TaleWorlds.CampaignSystem.Map.DistanceCache`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ModuleInfo](../../modulemanager/ModuleInfo/) — `TaleWorlds.ModuleManager`.
- [SandBoxHelpers](../SandBoxHelpers/) — `SandBox`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [ISettlementDataHolder](../../campaign/ISettlementDataHolder/) — `TaleWorlds.CampaignSystem.Map.DistanceCache`.
- [NavigationCache](../../campaign/NavigationCache/) — `TaleWorlds.CampaignSystem.Map.DistanceCache`.

Section: [api/sandbox/](../) — the other types in this bucket.

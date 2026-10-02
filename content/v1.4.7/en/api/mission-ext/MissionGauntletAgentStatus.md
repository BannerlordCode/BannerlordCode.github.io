---
title: "MissionGauntletAgentStatus"
description: "MissionGauntletAgentStatus — class in TaleWorlds.MountAndBlade.GauntletUI.Mission. 28 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionGauntletAgentStatus

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class MissionGauntletAgentStatus : MissionAgentStatusUIHandler`  
**Base:** `MissionAgentStatusUIHandler`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletAgentStatus.cs`

## Overview

`MissionGauntletAgentStatus` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionAgentStatusUIHandler, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (22): `DataSource`, `AddInteractionMessage`, `RemoveInteractionMessage`, `HasInteractionMessage`, `OnMissionStateActivated`, `EarlyStart`, ….
- **Extension points** (21): `AddInteractionMessage`, `RemoveInteractionMessage`, `HasInteractionMessage`, `OnMissionStateActivated`, `EarlyStart`, `OnCreateView`, ….
- **Data and constants** (6): `_gauntletLayer`, `_dataSource`, `_missionMainAgentController`, `_missionMainAgentEquipmentControllerView`, `_missionHintLogic`, `_isInDeployment`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddInteractionMessage` | method (override) | Overrides the base member. Takes 1 argument: `MissionInteractionItemBaseVM message`. Adds to the collection or relation this type owns. |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `EarlyStart` | method (override) | Overrides the base member. Takes no arguments. |
| `HasInteractionMessage` | method (override) | Overrides the base member. Takes 1 argument: `MissionInteractionItemBaseVM message`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnAgentDeleted` | method (override) | Overrides the base member. Takes 1 argument: `Agent affectedAgent`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentInteraction` | method (override) | Overrides the base member. Takes 3 arguments: `Agent userAgent`, `Agent agent`, `sbyte agentBoneIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow killingBlow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeploymentFinished` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFocusGained` | method (override) | Overrides the base member. Takes 3 arguments: `Agent mainAgent`, `IFocusable focusableObject`, `bool isInteractable`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFocusLost` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `IFocusable focusableObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionStateActivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeActivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeDeactivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RemoveInteractionMessage` | method (override) | Overrides the base member. Takes 1 argument: `MissionInteractionItemBaseVM message`. Removes from or clears the collection this type owns. |
| `OnCreateView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDestroyView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnResumeView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSuspendView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `DataSource` | property | Instance entry point `MissionAgentStatusVM` property. Read it for current state; a declared setter writes that state in place. |
| `_dataSource` | field | Protected — for subclasses only `MissionAgentStatusVM` field — direct storage with no validation or notification. |
| `_gauntletLayer` | field | Protected — for subclasses only `GauntletLayer` field — direct storage with no validation or notification. |

4 further public members follow the same patterns.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionAgentStatusUIHandler.

// Lifecycle hooks this type declares:
//   public override void AddInteractionMessage(MissionInteractionItemBaseVM message)
//   public override void RemoveInteractionMessage(MissionInteractionItemBaseVM message)
//   public override bool HasInteractionMessage(MissionInteractionItemBaseVM message)
//   public override void OnMissionStateActivated()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 21 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletAgentStatus.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler/) — `TaleWorlds.MountAndBlade.View.MissionViews`.
- [MissionAgentStatusVM](../../viewmodel/MissionAgentStatusVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection`.
- [MissionInteractionItemBaseVM](../../viewmodel/MissionInteractionItemBaseVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`.
- [MissionHintLogic](../MissionHintLogic/) — `TaleWorlds.MountAndBlade.Missions.MissionLogics`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.

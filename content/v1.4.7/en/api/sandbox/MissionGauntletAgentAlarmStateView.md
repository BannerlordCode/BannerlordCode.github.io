---
title: "MissionGauntletAgentAlarmStateView"
description: "MissionGauntletAgentAlarmStateView — class in SandBox.GauntletUI.Missions. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionGauntletAgentAlarmStateView

**Namespace:** `SandBox.GauntletUI.Missions`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class MissionGauntletAgentAlarmStateView : MissionAgentAlarmStateView`  
**Base:** `MissionAgentAlarmStateView`  
**Source:** `SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs`

## Overview

`MissionGauntletAgentAlarmStateView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionAgentAlarmStateView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionGauntletAgentAlarmStateView`.
- **Instance members** (8): `OnMissionScreenInitialize`, `OnMissionScreenFinalize`, `OnAgentBuild`, `OnAgentTeamChanged`, `OnAgentRemoved`, `OnMissionScreenTick`, ….
- **Extension points** (8): `OnMissionScreenInitialize`, `OnMissionScreenFinalize`, `OnAgentBuild`, `OnAgentTeamChanged`, `OnAgentRemoved`, `OnMissionScreenTick`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnAgentBuild` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `Banner banner`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow blow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentTeamChanged` | method (override) | Overrides the base member. Takes 3 arguments: `Team prevTeam`, `Team newTeam`, `Agent agent`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnResumeView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSuspendView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MissionGauntletAgentAlarmStateView` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MissionGauntletAgentAlarmStateView()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionAgentAlarmStateView.
var missionGauntletAgentAlarmStateView = new MissionGauntletAgentAlarmStateView();

// Lifecycle hooks this type declares:
//   public override void OnMissionScreenInitialize()
//   public override void OnMissionScreenFinalize()
//   public override void OnAgentBuild(Agent agent, Banner banner)
//   public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionAgentAlarmStateView](../MissionAgentAlarmStateView/) — `SandBox.View.Missions`.
- [MissionAgentAlarmStateVM](../MissionAgentAlarmStateVM/) — `SandBox.ViewModelCollection.Missions`.

Section: [api/sandbox/](../) — the other types in this bucket.

---
title: "MissionAgentLabelView"
description: "MissionAgentLabelView — class in TaleWorlds.MountAndBlade.View.MissionViews. 16 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionAgentLabelView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class MissionAgentLabelView : MissionView`  
**Base:** `MissionView`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentLabelView.cs`

## Overview

`MissionAgentLabelView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionAgentLabelView`.
- **Instance members** (15): `OnBehaviorInitialize`, `AfterStart`, `OnMissionTick`, `OnRemoveBehavior`, `OnMissionScreenFinalize`, `OnAgentRemoved`, ….
- **Extension points** (15): `OnBehaviorInitialize`, `AfterStart`, `OnMissionTick`, `OnRemoveBehavior`, `OnMissionScreenFinalize`, `OnAgentRemoved`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentBuild` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `Banner banner`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow killingBlow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentTeamChanged` | method (override) | Overrides the base member. Takes 3 arguments: `Team prevTeam`, `Team newTeam`, `Agent agent`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAssignPlayerAsSergeantOfFormation` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnClearScene` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionModeChange` | method (override) | Overrides the base member. Takes 2 arguments: `MissionMode oldMissionMode`, `bool atStart`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeActivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeDeactivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRemoveBehavior` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnResumeView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSuspendView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MissionAgentLabelView` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MissionAgentLabelView()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionView.
var missionAgentLabelView = new MissionAgentLabelView();

// Lifecycle hooks this type declares:
//   public override void OnBehaviorInitialize()
//   public override void AfterStart()
//   public override void OnMissionTick(float dt)
//   public override void OnRemoveBehavior()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 15 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentLabelView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AgentVisuals](../AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [BannerDebugInfo](../BannerDebugInfo/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.
- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [OrderFlag](../OrderFlag/) — `TaleWorlds.MountAndBlade.View.MissionViews.Order`.

Section: [api/mission-ext/](../) — the other types in this bucket.

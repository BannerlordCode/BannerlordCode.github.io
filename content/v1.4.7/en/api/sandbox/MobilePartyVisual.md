---
title: "MobilePartyVisual"
description: "MobilePartyVisual — class in SandBox.View.Map.Visuals. 22 public members (1 static)."
---

<!-- v147-skeleton -->
# MobilePartyVisual

**Namespace:** `SandBox.View.Map.Visuals`  
**Module:** `SandBox.View`  
**Type:** `public class MobilePartyVisual : MapEntityVisual<PartyBase>`  
**Base:** `MapEntityVisual`  
**Source:** `SandBox.View/Map/Visuals/MobilePartyVisual.cs`

## Overview

`MobilePartyVisual` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MapEntityVisual, so the members it does not redeclare are inherited from there. 9 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MobilePartyVisual`.
- **Static entry points** (1): `GetBannerOfCharacter`.
- **Instance members** (20): `BearingRotation`, `AttachedTo`, `InteractionPositionForPlayer`, `IsMobileEntity`, `IsMainEntity`, `StrategicEntity`, ….
- **Extension points** (15): `BearingRotation`, `AttachedTo`, `InteractionPositionForPlayer`, `IsMobileEntity`, `IsMainEntity`, `IsEnemyOf`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AttachedTo` | property (override) | Overrides the base member `MapEntityVisual` property. Read it for current state; a declared setter writes that state in place. |
| `BearingRotation` | property (override) | Overrides the base member `float` property. Read it for current state; a declared setter writes that state in place. |
| `GetBannerOfCharacter` | method (static) | Static entry point. Takes 2 arguments: `Banner banner`, `string bannerMeshName`. Returns `MetaMesh`. Read path: prefer it over reaching for the backing store. |
| `GetVisualPosition` | method (override) | Overrides the base member. Takes no arguments. Returns `Vec3`. Read path: prefer it over reaching for the backing store. |
| `InteractionPositionForPlayer` | property (override) | Overrides the base member `CampaignVec2` property. Read it for current state; a declared setter writes that state in place. |
| `IsAllyOf` | method (override) | Overrides the base member. Takes 1 argument: `IFaction faction`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsEnemyOf` | method (override) | Overrides the base member. Takes 1 argument: `IFaction faction`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInSameFaction` | method (override) | Overrides the base member. Takes 1 argument: `IFaction faction`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsMainEntity` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsMobileEntity` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsVisibleOrFadingOut` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnHover` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapClick` | method (override) | Overrides the base member. Takes 1 argument: `bool followModifierUsed`. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnOpenEncyclopedia` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTrackAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ReleaseResources` | method (override) | Overrides the base member. Takes no arguments. |
| `AddTentEntityForParty` | method | Instance entry point. Takes 3 arguments: `GameEntity strategicEntity`, `PartyBase party`, `ref bool clearBannerComponentCache`. Adds to the collection or relation this type owns. |
| `CaravanMountAgentVisuals` | property | Instance entry point `AgentVisuals` property. Read it for current state; a declared setter writes that state in place. |
| `HumanAgentVisuals` | property | Instance entry point `AgentVisuals` property. Read it for current state; a declared setter writes that state in place. |
| `MountAgentVisuals` | property | Instance entry point `AgentVisuals` property. Read it for current state; a declared setter writes that state in place. |
| `StrategicEntity` | property | Instance entry point `GameEntity` property. Read it for current state; a declared setter writes that state in place. |
| `MobilePartyVisual` | ctor | Instance entry point. Takes 1 argument: `PartyBase partyBase`. Returns ``. |

- Constructed as `public MobilePartyVisual(PartyBase partyBase)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MapEntityVisual.
var mobilePartyVisual = new MobilePartyVisual(partyBase);
MobilePartyVisual.GetBannerOfCharacter(banner, bannerMeshName);

// Lifecycle hooks this type declares:
//   public override float BearingRotation
//   public override MapEntityVisual AttachedTo
//   public override CampaignVec2 InteractionPositionForPlayer
//   public override bool IsMobileEntity
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 15 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/Visuals/MobilePartyVisual.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MapEntityVisual](../MapEntityVisual/) — `SandBox.View.Map.Visuals`.
- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [MobilePartyVisualManager](../MobilePartyVisualManager/) — `SandBox.View.Map.Managers`.
- [IInteractablePoint](../../campaign/IInteractablePoint/) — `TaleWorlds.CampaignSystem.Map`.
- [AgentVisuals](../../mission-ext/AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [SiegeEvent](../../campaign/SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/sandbox/](../) — the other types in this bucket.

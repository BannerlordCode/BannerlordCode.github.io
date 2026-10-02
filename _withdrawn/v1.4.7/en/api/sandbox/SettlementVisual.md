---
title: "SettlementVisual"
description: "SettlementVisual — class in SandBox.View.Map.Visuals. 20 public members (0 static)."
---

<!-- v147-skeleton -->
# SettlementVisual

**Namespace:** `SandBox.View.Map.Visuals`  
**Module:** `SandBox.View`  
**Type:** `public class SettlementVisual : MapEntityVisual<PartyBase>`  
**Base:** `MapEntityVisual`  
**Source:** `SandBox.View/Map/Visuals/SettlementVisual.cs`

## Overview

`SettlementVisual` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MapEntityVisual, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SettlementVisual`.
- **Instance members** (19): `AttachedTo`, `InteractionPositionForPlayer`, `StrategicEntity`, `IsEnemyOf`, `IsInSameFaction`, `IsAllyOf`, ….
- **Extension points** (12): `AttachedTo`, `InteractionPositionForPlayer`, `IsEnemyOf`, `IsInSameFaction`, `IsAllyOf`, `GetVisualPosition`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AttachedTo` | property (override) | Overrides the base member `MapEntityVisual` property. Read it for current state; a declared setter writes that state in place. |
| `GetVisualPosition` | method (override) | Overrides the base member. Takes no arguments. Returns `Vec3`. Read path: prefer it over reaching for the backing store. |
| `InteractionPositionForPlayer` | property (override) | Overrides the base member `CampaignVec2` property. Read it for current state; a declared setter writes that state in place. |
| `IsAllyOf` | method (override) | Overrides the base member. Takes 1 argument: `IFaction faction`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsEnemyOf` | method (override) | Overrides the base member. Takes 1 argument: `IFaction faction`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInSameFaction` | method (override) | Overrides the base member. Takes 1 argument: `IFaction faction`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsVisibleOrFadingOut` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnHover` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapClick` | method (override) | Overrides the base member. Takes 1 argument: `bool followModifierUsed`. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnOpenEncyclopedia` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTrackAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ReleaseResources` | method (override) | Overrides the base member. Takes no arguments. |
| `GetAttackerBatteringRamSiegeEngineFrames` | method | Instance entry point. Takes no arguments. Returns `MatrixFrame[]`. Read path: prefer it over reaching for the backing store. |
| `GetAttackerRangedSiegeEngineFrames` | method | Instance entry point. Takes no arguments. Returns `MatrixFrame[]`. Read path: prefer it over reaching for the backing store. |
| `GetAttackerTowerSiegeEngineFrames` | method | Instance entry point. Takes no arguments. Returns `MatrixFrame[]`. Read path: prefer it over reaching for the backing store. |
| `GetBannerPositionForParty` | method | Instance entry point. Takes 1 argument: `MobileParty mobileParty`. Returns `Vec3`. Read path: prefer it over reaching for the backing store. |
| `GetBreachableWallFrames` | method | Instance entry point. Takes no arguments. Returns `MatrixFrame[]`. Read path: prefer it over reaching for the backing store. |
| `GetDefenderRangedSiegeEngineFrames` | method | Instance entry point. Takes no arguments. Returns `MatrixFrame[]`. Read path: prefer it over reaching for the backing store. |
| `StrategicEntity` | property | Instance entry point `GameEntity` property. Read it for current state; a declared setter writes that state in place. |
| `SettlementVisual` | ctor | Instance entry point. Takes 1 argument: `PartyBase entity`. Returns ``. |

- Constructed as `public SettlementVisual(PartyBase entity)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MapEntityVisual.
var settlementVisual = new SettlementVisual(entity);

// Lifecycle hooks this type declares:
//   public override MapEntityVisual AttachedTo
//   public override CampaignVec2 InteractionPositionForPlayer
//   public override bool IsEnemyOf(IFaction faction)
//   public override bool IsInSameFaction(IFaction faction)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 12 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/Visuals/SettlementVisual.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MapEntityVisual](../MapEntityVisual/) — `SandBox.View.Map.Visuals`.
- [IInteractablePoint](../../campaign/IInteractablePoint/) — `TaleWorlds.CampaignSystem.Map`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [MapScreen](../MapScreen/) — `SandBox.View.Map`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [SiegeEvent](../../campaign/SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [IMapScene](../../campaign/IMapScene/) — `TaleWorlds.CampaignSystem.Map`.
- [ISiegeEventSide](../../campaign/ISiegeEventSide/) — `TaleWorlds.CampaignSystem.Siege`.

Section: [api/sandbox/](../) — the other types in this bucket.

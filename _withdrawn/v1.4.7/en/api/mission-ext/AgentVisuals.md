---
title: "AgentVisuals"
description: "AgentVisuals — class in TaleWorlds.MountAndBlade.View. 50 public members (4 static)."
---

<!-- v147-skeleton -->
# AgentVisuals

**Namespace:** `TaleWorlds.MountAndBlade.View`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class AgentVisuals : IAgentVisual`  
**Base:** `IAgentVisual`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisuals.cs`

## Overview

`AgentVisuals` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends IAgentVisual, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Static entry points** (4): `Create`, `GetRandomGlossFactor`, `GetRandomClothingColors`, `AddTeamColorToMesh`.
- **Instance members** (39): `IsFemale`, `GetVisuals`, `Reset`, `ResetNextFrame`, `GetFrame`, `GetBodyProperties`, ….
- **Data and constants** (7): `RandomGlossinessRange`, `RandomClothingColor1HueRange`, `RandomClothingColor1SaturationRange`, `RandomClothingColor1BrightnessRange`, `RandomClothingColor2HueRange`, `RandomClothingColor2SaturationRange`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddTeamColorToMesh` | method (static) | Static entry point. Takes 3 arguments: `MetaMesh metaMesh`, `uint color1`, `uint color2`. Adds to the collection or relation this type owns. |
| `Create` | method (static) | Static entry point. Takes 5 arguments: `AgentVisualsData data`, `string name`, `bool isRandomProgress`, `bool needBatchedVersionForWeaponMeshes`, …. Returns `AgentVisuals`. |
| `GetRandomClothingColors` | method (static) | Static entry point. Takes 5 arguments: `int seed`, `Color inputColor1`, `Color inputColor2`, `out Color color1`, …. Read path: prefer it over reaching for the backing store. |
| `GetRandomGlossFactor` | method (static) | Static entry point. Takes 1 argument: `Random randomGenerator`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `AddArmorMultiMeshesToAgentEntity` | method | Instance entry point. Takes 2 arguments: `uint teamColor1`, `uint teamColor2`. Adds to the collection or relation this type owns. |
| `AddPrefabToAgentVisualBoneByBoneType` | method | Instance entry point. Takes 2 arguments: `string prefabName`, `HumanBone boneType`. Returns `CompositeComponent`. Adds to the collection or relation this type owns. |
| `AddPrefabToAgentVisualBoneByRealBoneIndex` | method | Instance entry point. Takes 2 arguments: `string prefabName`, `sbyte realBoneIndex`. Returns `CompositeComponent`. Adds to the collection or relation this type owns. |
| `DoesActionContinueWithCurrentAction` | method | Instance entry point. Takes 1 argument: `in ActionIndexCache actionIndex`. Returns `bool`. |
| `GetAnimationParameterAtChannel` | method | Instance entry point. Takes 1 argument: `int channelIndex`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetBodyProperties` | method | Instance entry point. Takes no arguments. Returns `BodyProperties`. Read path: prefer it over reaching for the backing store. |
| `GetCharacterObjectID` | method | Instance entry point. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetClothingColors` | method | Instance entry point. Takes 2 arguments: `out uint color1`, `out uint color2`. Read path: prefer it over reaching for the backing store. |
| `GetCopyAgentVisualsData` | method | Instance entry point. Takes no arguments. Returns `AgentVisualsData`. Read path: prefer it over reaching for the backing store. |
| `GetEntity` | method | Instance entry point. Takes no arguments. Returns `GameEntity`. Read path: prefer it over reaching for the backing store. |
| `GetEquipment` | method | Instance entry point. Takes no arguments. Returns `Equipment`. Read path: prefer it over reaching for the backing store. |
| `GetFrame` | method | Instance entry point. Takes no arguments. Returns `MatrixFrame`. Read path: prefer it over reaching for the backing store. |
| `GetGlobalStableEyePoint` | method | Instance entry point. Takes 1 argument: `bool isHumanoid`. Returns `Vec3`. Read path: prefer it over reaching for the backing store. |
| `GetGlobalStableNeckPoint` | method | Instance entry point. Takes 1 argument: `bool isHumanoid`. Returns `Vec3`. Read path: prefer it over reaching for the backing store. |
| `GetIsFemale` | method | Instance entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetScale` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetVisuals` | method | Instance entry point. Takes no arguments. Returns `MBAgentVisuals`. Read path: prefer it over reaching for the backing store. |
| `GetWeakEntity` | method | Instance entry point. Takes no arguments. Returns `WeakGameEntity`. Read path: prefer it over reaching for the backing store. |
| `IsFemale` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MakeRandomVoiceForFacegen` | method | Instance entry point. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |

26 further public members follow the same patterns.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: IAgentVisual.
AgentVisuals.Create(data, name, isRandomProgress, needBatchedVersionForWeaponMeshes, forceUseFaceCache);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisuals.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerVisual](../BannerVisual/) — `TaleWorlds.MountAndBlade.View`.
- [BannerDebugInfo](../BannerDebugInfo/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.
- [SkinVoiceManager](../SkinVoiceManager/) — `TaleWorlds.MountAndBlade`.

Section: [api/mission-ext/](../) — the other types in this bucket.

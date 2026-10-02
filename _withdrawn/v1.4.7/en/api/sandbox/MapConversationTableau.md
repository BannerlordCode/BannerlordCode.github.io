---
title: "MapConversationTableau"
description: "MapConversationTableau — class in SandBox.View.Map. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# MapConversationTableau

**Namespace:** `SandBox.View.Map`  
**Module:** `SandBox.View`  
**Type:** `public class MapConversationTableau`  
**Source:** `SandBox.View/Map/MapConversationTableau.cs`

## Overview

`MapConversationTableau` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapConversationTableau`.
- **Instance members** (9): `Texture`, `SetEnabled`, `SetData`, `SetTargetSize`, `OnFinalize`, `OnTick`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnConversationPlay` | method | Instance entry point. Takes 5 arguments: `string idleActionId`, `string idleFaceAnimId`, `string reactionId`, `string reactionFaceAnimId`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFinalize` | method | Instance entry point. Takes 1 argument: `bool clearNextFrame`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method | Instance entry point. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RemovePreviousAgentsSoundEvent` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetData` | method | Instance entry point. Takes 1 argument: `object data`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetEnabled` | method | Instance entry point. Takes 1 argument: `bool enabled`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetTargetSize` | method | Instance entry point. Takes 2 arguments: `int width`, `int height`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `StopConversationSoundEvent` | method | Instance entry point. Takes no arguments. |
| `Texture` | property | Instance entry point `Texture` property. Read it for current state; a declared setter writes that state in place. |
| `MapConversationTableau` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MapConversationTableau()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
var mapConversationTableau = new MapConversationTableau();

// Lifecycle hooks this type declares:
//   public void OnFinalize(bool clearNextFrame)
//   public void OnTick(float dt)
//   public void OnConversationPlay(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `SandBox.View/Map/MapConversationTableau.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AgentVisuals](../../mission-ext/AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [SandBoxViewSubModule](../SandBoxViewSubModule/) — `SandBox.View`.
- [MapScreen](../MapScreen/) — `SandBox.View.Map`.
- [MapConversationView](../MapConversationView/) — `SandBox.View.Map`.
- [ConversationMission](../ConversationMission/) — `SandBox.Conversation`.
- [TroopRoster](../../campaign/TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [FlattenedTroopRosterElement](../../campaign/FlattenedTroopRosterElement/) — `TaleWorlds.CampaignSystem.Roster`.
- [UserData](../../mission-ext/UserData/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.

Section: [api/sandbox/](../) — the other types in this bucket.

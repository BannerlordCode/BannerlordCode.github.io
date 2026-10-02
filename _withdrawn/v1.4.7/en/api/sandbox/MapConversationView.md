---
title: "MapConversationView"
description: "MapConversationView — class in SandBox.View.Map. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# MapConversationView

**Namespace:** `SandBox.View.Map`  
**Module:** `SandBox.View`  
**Type:** `public class MapConversationView : MapView`  
**Base:** `MapView`  
**Source:** `SandBox.View/Map/MapConversationView.cs`

## Overview

`MapConversationView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MapView, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (6): `IsConversationActive`, `InitializeConversation`, `OnFinalize`, `FinalizeConversation`, `CreateConversationMissionIfMissing`, `DestroyConversationMission`.
- **Data and constants** (1): `ConversationMission`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsConversationActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CreateConversationMissionIfMissing` | method | Protected — for subclasses only. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `DestroyConversationMission` | method | Protected — for subclasses only. Takes no arguments. |
| `FinalizeConversation` | method | Protected — for subclasses only. Takes no arguments. Returns `internal virtual void`. |
| `InitializeConversation` | method | Protected — for subclasses only. Takes 2 arguments: `ConversationCharacterData playerCharacterData`, `ConversationCharacterData conversationPartnerData`. Returns `internal virtual void`. |
| `OnFinalize` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ConversationMission` | field | Instance entry point `MapConversationView.MapConversationMission` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MapView.

// Lifecycle hooks this type declares:
//   protected internal override void OnFinalize()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `SandBox.View/Map/MapConversationView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ConversationCharacterData](../../campaign-ext/ConversationCharacterData/) — `TaleWorlds.CampaignSystem.Conversation`.
- [ConversationMission](../ConversationMission/) — `SandBox.Conversation`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [Alley](../../campaign/Alley/) — `TaleWorlds.CampaignSystem.Settlements`.
- [MapConversationTableau](../MapConversationTableau/) — `SandBox.View.Map`.
- [LocationCharacter](../../campaign/LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.

Section: [api/sandbox/](../) — the other types in this bucket.

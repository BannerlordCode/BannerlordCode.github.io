---
title: "StoryModePermissionsSystem"
description: "StoryModePermissionsSystem — class in StoryMode.View.Permissions. 1 public member (1 static)."
---

<!-- v147-skeleton -->
# StoryModePermissionsSystem

**Namespace:** `StoryMode.View.Permissions`  
**Module:** `StoryMode.View`  
**Type:** `public class StoryModePermissionsSystem`  
**Source:** `StoryMode.View/Permissions/StoryModePermissionsSystem.cs`

## Overview

`StoryModePermissionsSystem` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `OnInitialize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnInitialize` | method (static) | Static entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
StoryModePermissionsSystem.OnInitialize();

// Lifecycle hooks this type declares:
//   public static void OnInitialize()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `StoryMode.View/Permissions/StoryModePermissionsSystem.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [PartyScreenCharacterTalkPermissionEvent](../../viewmodel/PartyScreenCharacterTalkPermissionEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events`.
- [TutorialPhase](../TutorialPhase/) — `StoryMode.StoryModePhases`.
- [ClanScreenPermissionEvent](../../sandbox/ClanScreenPermissionEvent/) — `SandBox.View.Map.Navigation.NavigationElements`.
- [SettlementOverlayTalkPermissionEvent](../../viewmodel/SettlementOverlayTalkPermissionEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events`.
- [TutorialQuestPhase](../TutorialQuestPhase/) — `StoryMode.StoryModePhases`.
- [SettlementOverylayQuickTalkPermissionEvent](../../viewmodel/SettlementOverylayQuickTalkPermissionEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events`.
- [SettlementOverlayLeaveCharacterPermissionEvent](../../viewmodel/SettlementOverlayLeaveCharacterPermissionEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events`.
- [LeaveKingdomPermissionEvent](../../viewmodel/LeaveKingdomPermissionEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/storymode/](../) — the other types in this bucket.

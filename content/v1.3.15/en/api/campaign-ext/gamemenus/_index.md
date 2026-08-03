---
title: "GameMenus Family"
description: "Campaign menu registration, option conditions, consequences, overlays, and handoff to actions or missions."
---

# GameMenus Family

**One-sentence role:** Game-menu APIs define campaign screens and options whose conditions read state and whose consequences invoke the correct action, quest, or mission transition.

## Mental model and reading order

Read [GameMenu](../GameMenu), [GameMenuOption](../GameMenuOption), and [GameMenuManager](../GameMenuManager). Then inspect [GameMenuCallbackManager](../GameMenuCallbackManager) and [EncounterGameMenuModel](../EncounterGameMenuModel) for dynamic menus.

## When to use

Use a game menu for campaign navigation and player choice. Keep option conditions pure and put world changes in an action or consequence callback. Do not use a menu as a replacement for a long-lived quest or a per-frame mission UI.

## Dependency map

- Upstream: campaign behaviors, settlement/party state, and `CampaignGameStarter`.
- Downstream: [Actions](../actions), [Quests](../quests), conversations, and Mission handoff.
- Siblings: [Dialogs](../dialogs), [MapEvents](../mapevents), and [Models](../models).

## Real entry points

```csharp
starter.AddGameMenu("my_menu", "My menu", init, GameOverlays.MenuOverlay, 0f, null);
```

Use the actual versioned overload and ensure the menu is registered once during campaign startup.

## Risk boundaries

Conditions can be evaluated repeatedly and consequences can be revisited after save/load. Guard one-shot actions, validate participants again, and return to a valid menu after a mission transition.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Dialogs](../dialogs) · [Actions](../actions)
- [Related: MapEvents](../mapevents)

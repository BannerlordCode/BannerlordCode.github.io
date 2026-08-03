---
title: "GameMenus Family"
description: "Campaign menu registration, option conditions, consequences, overlays, and handoff to actions or missions."
---

# GameMenus Family

**One-sentence role:** Game-menu APIs define campaign screens and options whose conditions read state and whose consequences invoke the correct action, quest, or mission transition.

## Mental Model

### Reading order

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

## GameMenu entries

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.GameMenus | [GameMenu](../GameMenu) | Owns a campaign menu id, text, options, and overlay configuration. | After CampaignGameStarter registration |
| TaleWorlds.CampaignSystem.GameMenus | [GameMenuManager](../GameMenuManager) | Registers, resolves, and drives the active campaign menu. | Campaign start and menu transitions |
| TaleWorlds.CampaignSystem.GameMenus | [GameMenuOption](../GameMenuOption) | Stores option text, conditions, type, and consequence callbacks. | Re-evaluated while menu is open |
| TaleWorlds.CampaignSystem.GameMenus | [MenuCallbackArgs](../MenuCallbackArgs) | Supplies participants, menu, and visibility context to callbacks. | Every condition/consequence call |
| TaleWorlds.CampaignSystem.GameMenus | [GameMenuCallbackManager](../GameMenuCallbackManager) | Maintains callback registration and dispatch for the current menu. | Registration and runtime |
| TaleWorlds.CampaignSystem.GameMenus | [GameMenuEventHandler](../GameMenuEventHandler) | Represents enter, leave, and selection event callbacks. | Menu state transitions |
| TaleWorlds.CampaignSystem.GameMenus | [GameMenuInitializationHandler](../GameMenuInitializationHandler) | Fills dynamic state and options while a menu is created. | First menu entry |
| TaleWorlds.CampaignSystem.GameMenus | [EventType](../EventType) | Identifies which menu event category is being dispatched. | Menu event dispatch |
| TaleWorlds.CampaignSystem.GameMenus | [MenuFlags](../MenuFlags) | Controls leave behavior, overlay visibility, and menu affordances. | Menu initialization |
| TaleWorlds.CampaignSystem.GameMenus | [MenuOverlayType](../MenuOverlayType) | Selects the visual overlay for town and encounter menus. | Menu open |
| TaleWorlds.CampaignSystem.GameMenus | [MenuAndOptionType](../MenuAndOptionType) | Distinguishes menu, option, and wait-menu registration shapes. | `CampaignGameStarter` registration |
| TaleWorlds.CampaignSystem.GameMenus | [WaitMenuOption](../WaitMenuOption) | Represents progress and interruption options for a wait menu. | Wait-menu ticks |
| TaleWorlds.CampaignSystem.GameMenus | [LeaveType](../LeaveType) | Records how a consequence exits and what state it targets. | Consequence return |
| TaleWorlds.CampaignSystem.GameMenus | [IssueQuestFlags](../IssueQuestFlags) | Marks issue/quest option visibility and resolution branches. | Issue menu condition evaluation |
| TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers | [DefaultEncounter](../DefaultEncounter) | Initializes participants and options for a normal encounter menu. | Encounter-to-menu transition |
| TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers | [PlayerTownVisit](../PlayerTownVisit) | Initializes menu state and entry options when the player visits a town. | After entering a settlement |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [EncounterGameMenuBehavior](../EncounterGameMenuBehavior) | Connects encounter state to menu registration and exit flow. | Encounter create/end |
| TaleWorlds.CampaignSystem.ComponentInterfaces | [EncounterGameMenuModel](../EncounterGameMenuModel) | Calculates encounter-menu eligibility and option outcomes. | Menu conditions/model queries |

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Dialogs](../dialogs) · [Actions](../actions)
- [Related: MapEvents](../mapevents)

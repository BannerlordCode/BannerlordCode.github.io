---
title: "GameMenuManager"
description: "GameMenuManager: a public class in TaleWorlds.CampaignSystem.GameMenus; 33 exposed members (28 methods, 2 properties, 2 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuManager

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameMenuManager`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

GameMenuManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs. It is a public class; the inheritance chain is GameMenuManager. It exposes 33 public/protected members: 28 methods, 2 properties, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuManager lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameMenus`, inheritance chain GameMenuManager. The surface is method-led (methods 28/33, properties 2/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NextGameMenuId` | `public string NextGameMenuId` | property |
| `GameMenuManager` | `public GameMenuManager()` | constructor |
| `NextMenu` | `public GameMenu NextMenu` | property |
| `SetNextMenu` | `public void SetNextMenu(string name)` | method |
| `ExitToLast` | `public void ExitToLast()` | method |
| `SetCurrentRepeatableIndex` | `public void SetCurrentRepeatableIndex(MenuContext menuContext, int index)` | method |
| `GetMenuOptionConditionsHold` | `public bool GetMenuOptionConditionsHold(MenuContext menuContext, int menuItemNumber)` | method |
| `RefreshMenuOptions` | `public void RefreshMenuOptions(MenuContext menuContext)` | method |
| `RefreshMenuOptionConditions` | `public void RefreshMenuOptionConditions(MenuContext menuContext)` | method |
| `GetMenuOptionIdString` | `public string GetMenuOptionIdString(MenuContext menuContext, int menuItemNumber)` | method |
| `RunConsequencesOfMenuOption` | `public void RunConsequencesOfMenuOption(MenuContext menuContext, int menuItemNumber)` | method |
| `GetVirtualMenuOptionTooltip` | `public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)` | method |
| `GetMenuOverlayType` | `public GameMenu.MenuOverlayType GetMenuOverlayType(MenuContext menuContext)` | method |
| `GetVirtualMenuOptionText` | `public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)` | method |
| `GetVirtualGameMenuOption` | `public GameMenuOption GetVirtualGameMenuOption(MenuContext menuContext, int virtualMenuItemIndex)` | method |
| `GetVirtualMenuOptionText2` | `public TextObject GetVirtualMenuOptionText2(MenuContext menuContext, int virtualMenuItemIndex)` | method |
| `GetVirtualMenuProgress` | `public float GetVirtualMenuProgress(MenuContext menuContext)` | method |
| `GetVirtualMenuAndOptionType` | `public GameMenu.MenuAndOptionType GetVirtualMenuAndOptionType(MenuContext menuContext)` | method |
| `GetVirtualMenuIsWaitActive` | `public bool GetVirtualMenuIsWaitActive(MenuContext menuContext)` | method |
| `GetVirtualMenuTargetWaitHours` | `public float GetVirtualMenuTargetWaitHours(MenuContext menuContext)` | method |
| `GetVirtualMenuOptionIsEnabled` | `public bool GetVirtualMenuOptionIsEnabled(MenuContext menuContext, int virtualMenuItemIndex)` | method |
| `GetVirtualMenuOptionAmount` | `public int GetVirtualMenuOptionAmount(MenuContext menuContext)` | method |
| `GetVirtualMenuOptionIsLeave` | `public bool GetVirtualMenuOptionIsLeave(MenuContext menuContext, int virtualMenuItemIndex)` | method |
| `GetLeaveMenuOption` | `public GameMenuOption GetLeaveMenuOption(MenuContext menuContext)` | method |
| `GetVirtualMenuOptionConditionsHold` | `public bool GetVirtualMenuOptionConditionsHold(MenuContext menuContext, int virtualMenuItemIndex)` | method |
| `OnFrameTick` | `public void OnFrameTick(MenuContext menuContext, float dt)` | method |
| `GetMenuText` | `public TextObject GetMenuText(MenuContext menuContext)` | method |
| `AddGameMenu` | `public void AddGameMenu(GameMenu gameMenu)` | method |
| `RemoveRelatedGameMenus` | `public void RemoveRelatedGameMenus(object relatedObject)` | method |
| `RemoveRelatedGameMenuOptions` | `public void RemoveRelatedGameMenuOptions(object relatedObject)` | method |
| `GetGameMenu` | `public GameMenu GetGameMenu(string menuId)` | method |
| `PreviouslySelectedGameMenuItem` | `public int PreviouslySelectedGameMenuItem` | field |
| `List` | `public List<Location>MenuLocations` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameMenu](../GameMenu/)
- [same namespace GameMenuCallbackManager](../GameMenuCallbackManager/)
- [same namespace GameMenuEventHandler](../GameMenuEventHandler/)
- [same namespace GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate/)

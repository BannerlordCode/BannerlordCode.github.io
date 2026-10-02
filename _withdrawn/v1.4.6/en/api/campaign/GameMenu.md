---
title: "GameMenu"
description: "GameMenu: a public class in TaleWorlds.CampaignSystem.GameMenus; 50 exposed members (24 methods, 23 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenu

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameMenu`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

GameMenu lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs. It is a public class; the inheritance chain is GameMenu. It exposes 50 public/protected members: 24 methods, 23 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenu lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameMenus`, inheritance chain GameMenu. The surface is method-led (methods 24/50, properties 23/50), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Type` | `public GameMenu.MenuAndOptionType Type` | property |
| `StringId` | `public string StringId` | property |
| `RelatedObject` | `public object RelatedObject` | property |
| `MenuTitle` | `public TextObject MenuTitle` | property |
| `OverlayType` | `public GameMenu.MenuOverlayType OverlayType` | property |
| `IsReady` | `public bool IsReady` | property |
| `MenuItemAmount` | `public int MenuItemAmount` | property |
| `List` | `public List<object>MenuRepeatObjects` | property |
| `CurrentRepeatableObject` | `public object CurrentRepeatableObject` | property |
| `IsWaitMenu` | `public bool IsWaitMenu` | property |
| `IsWaitActive` | `public bool IsWaitActive` | property |
| `IsEmpty` | `public bool IsEmpty` | property |
| `Progress` | `public float Progress` | property |
| `TargetWaitHours` | `public float TargetWaitHours` | property |
| `OnTick` | `public OnTickDelegate OnTick` | property |
| `OnCondition` | `public OnConditionDelegate OnCondition` | property |
| `OnConsequence` | `public OnConsequenceDelegate OnConsequence` | property |
| `CurrentRepeatableIndex` | `public int CurrentRepeatableIndex` | property |
| `IEnumerable` | `public IEnumerable<GameMenuOption>MenuOptions` | property |
| `SetMenuRepeatObjects` | `public void SetMenuRepeatObjects(IEnumerable<object>list)` | method |
| `GetMenuOptionConditionsHold` | `public bool GetMenuOptionConditionsHold(Game game, MenuContext menuContext, int menuItemNumber)` | method |
| `GetMenuOptionText` | `public TextObject GetMenuOptionText(int menuItemNumber)` | method |
| `GetGameMenuOption` | `public GameMenuOption GetGameMenuOption(int menuItemNumber)` | method |
| `GetMenuOptionText2` | `public TextObject GetMenuOptionText2(int menuItemNumber)` | method |
| `GetMenuOptionIdString` | `public string GetMenuOptionIdString(int menuItemNumber)` | method |
| `GetMenuOptionTooltip` | `public TextObject GetMenuOptionTooltip(int menuItemNumber)` | method |
| `GetMenuOptionIsLeave` | `public bool GetMenuOptionIsLeave(int menuItemNumber)` | method |
| `SetProgressOfWaitingInMenu` | `public void SetProgressOfWaitingInMenu(float progress)` | method |
| `SetTargetedWaitingTimeAndInitialProgress` | `public void SetTargetedWaitingTimeAndInitialProgress(float targetedWaitingTime, float initialProgress)` | method |
| `GetLeaveMenuOption` | `public GameMenuOption GetLeaveMenuOption(Game game, MenuContext menuContext)` | method |
| `RunOnTick` | `public void RunOnTick(MenuContext menuContext, float dt)` | method |
| `RunWaitMenuCondition` | `public bool RunWaitMenuCondition(MenuContext menuContext)` | method |
| `RunWaitMenuConsequence` | `public void RunWaitMenuConsequence(MenuContext menuContext)` | method |
| `RunMenuOptionConsequence` | `public void RunMenuOptionConsequence(MenuContext menuContext, int menuItemNumber)` | method |
| `StartWait` | `public void StartWait()` | method |
| `EndWait` | `public void EndWait()` | method |
| `RunOnInit` | `public void RunOnInit(Game game, MenuContext menuContext)` | method |
| `PreInit` | `public void PreInit(MenuContext menuContext)` | method |
| `AfterInit` | `public void AfterInit(MenuContext menuContext)` | method |
| `GetText` | `public TextObject GetText()` | method |
| `AutoSelectFirst` | `public bool AutoSelectFirst` | property |
| `ActivateGameMenu` | `public static void ActivateGameMenu(string menuId)` | method |
| `SwitchToMenu` | `public static void SwitchToMenu(string menuId)` | method |
| `ExitToLast` | `public static void ExitToLast()` | method |
| `MenuOverlayType` | `public enum MenuOverlayType` | property |
| `MenuFlags` | `public enum MenuFlags` | property |
| `MenuAndOptionType` | `public enum MenuAndOptionType` | property |
| `MenuOverlayType` | `public enum MenuOverlayType` | nested type |
| `MenuFlags` | `public enum MenuFlags` | nested type |
| `MenuAndOptionType` | `public enum MenuAndOptionType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameMenuCallbackManager](../GameMenuCallbackManager/)
- [same namespace GameMenuEventHandler](../GameMenuEventHandler/)
- [same namespace GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate/)
- [same namespace GameMenuInitDelegate](../GameMenuInitDelegate/)

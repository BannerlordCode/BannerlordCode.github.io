---
title: "GameMenuCallbackManager"
description: "GameMenuCallbackManager: a public class in TaleWorlds.CampaignSystem; 9 exposed members (7 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameMenus/GameMenuCallbackManager.cs."
---
# GameMenuCallbackManager

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameMenuCallbackManager`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuCallbackManager.cs`

## Overview

GameMenuCallbackManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameMenus/GameMenuCallbackManager.cs. It is a public class; the inheritance chain is GameMenuCallbackManager. It exposes 9 public/protected members: 7 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuCallbackManager is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameMenus) the module directory; inheritance chain GameMenuCallbackManager. The surface is method-led (methods 7/9, properties 1/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameMenus/GameMenuCallbackManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static GameMenuCallbackManager Instance` | property |
| `GameMenuCallbackManager` | `public GameMenuCallbackManager()` | constructor |
| `OnGameLoad` | `public void OnGameLoad()` | method |
| `InitializeState` | `public void InitializeState(string menuId, MenuContext state)` | method |
| `OnConsequence` | `public void OnConsequence(string menuId, GameMenuOption gameMenuOption, MenuContext state)` | method |
| `GetMenuOptionTooltip` | `public TextObject GetMenuOptionTooltip(MenuContext menuContext, int menuItemNumber)` | method |
| `GetVirtualMenuOptionTooltip` | `public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)` | method |
| `GetVirtualMenuOptionText` | `public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)` | method |
| `GetMenuOptionText` | `public TextObject GetMenuOptionText(MenuContext menuContext, int menuItemNumber)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameMenu](../GameMenu)
- [same namespace GameMenuEventHandler](../GameMenuEventHandler)
- [same namespace GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate)
- [same namespace GameMenuInitDelegate](../GameMenuInitDelegate)

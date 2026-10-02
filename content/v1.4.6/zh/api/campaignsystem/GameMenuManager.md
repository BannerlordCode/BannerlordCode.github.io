---
title: "GameMenuManager"
description: "GameMenuManager：TaleWorlds.CampaignSystem 的 public 类；公开成员 33 个（方法 28、属性 2、字段 2）。源文件 TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs。"
---
# GameMenuManager

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameMenuManager`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs`

## 概述

GameMenuManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs。它是一个 public 类，继承链为 GameMenuManager。public/protected 成员共 33 个：28 方法、2 属性、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuManager 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameMenus），继承链 GameMenuManager。成员构成以方法为主（方法 28/33，属性 2/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NextGameMenuId` | `public string NextGameMenuId` | 属性 |
| `GameMenuManager` | `public GameMenuManager()` | 构造函数 |
| `NextMenu` | `public GameMenu NextMenu` | 属性 |
| `SetNextMenu` | `public void SetNextMenu(string name)` | 方法 |
| `ExitToLast` | `public void ExitToLast()` | 方法 |
| `SetCurrentRepeatableIndex` | `public void SetCurrentRepeatableIndex(MenuContext menuContext, int index)` | 方法 |
| `GetMenuOptionConditionsHold` | `public bool GetMenuOptionConditionsHold(MenuContext menuContext, int menuItemNumber)` | 方法 |
| `RefreshMenuOptions` | `public void RefreshMenuOptions(MenuContext menuContext)` | 方法 |
| `RefreshMenuOptionConditions` | `public void RefreshMenuOptionConditions(MenuContext menuContext)` | 方法 |
| `GetMenuOptionIdString` | `public string GetMenuOptionIdString(MenuContext menuContext, int menuItemNumber)` | 方法 |
| `RunConsequencesOfMenuOption` | `public void RunConsequencesOfMenuOption(MenuContext menuContext, int menuItemNumber)` | 方法 |
| `GetVirtualMenuOptionTooltip` | `public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)` | 方法 |
| `GetMenuOverlayType` | `public GameMenu.MenuOverlayType GetMenuOverlayType(MenuContext menuContext)` | 方法 |
| `GetVirtualMenuOptionText` | `public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)` | 方法 |
| `GetVirtualGameMenuOption` | `public GameMenuOption GetVirtualGameMenuOption(MenuContext menuContext, int virtualMenuItemIndex)` | 方法 |
| `GetVirtualMenuOptionText2` | `public TextObject GetVirtualMenuOptionText2(MenuContext menuContext, int virtualMenuItemIndex)` | 方法 |
| `GetVirtualMenuProgress` | `public float GetVirtualMenuProgress(MenuContext menuContext)` | 方法 |
| `GetVirtualMenuAndOptionType` | `public GameMenu.MenuAndOptionType GetVirtualMenuAndOptionType(MenuContext menuContext)` | 方法 |
| `GetVirtualMenuIsWaitActive` | `public bool GetVirtualMenuIsWaitActive(MenuContext menuContext)` | 方法 |
| `GetVirtualMenuTargetWaitHours` | `public float GetVirtualMenuTargetWaitHours(MenuContext menuContext)` | 方法 |
| `GetVirtualMenuOptionIsEnabled` | `public bool GetVirtualMenuOptionIsEnabled(MenuContext menuContext, int virtualMenuItemIndex)` | 方法 |
| `GetVirtualMenuOptionAmount` | `public int GetVirtualMenuOptionAmount(MenuContext menuContext)` | 方法 |
| `GetVirtualMenuOptionIsLeave` | `public bool GetVirtualMenuOptionIsLeave(MenuContext menuContext, int virtualMenuItemIndex)` | 方法 |
| `GetLeaveMenuOption` | `public GameMenuOption GetLeaveMenuOption(MenuContext menuContext)` | 方法 |
| `GetVirtualMenuOptionConditionsHold` | `public bool GetVirtualMenuOptionConditionsHold(MenuContext menuContext, int virtualMenuItemIndex)` | 方法 |
| `OnFrameTick` | `public void OnFrameTick(MenuContext menuContext, float dt)` | 方法 |
| `GetMenuText` | `public TextObject GetMenuText(MenuContext menuContext)` | 方法 |
| `AddGameMenu` | `public void AddGameMenu(GameMenu gameMenu)` | 方法 |
| `RemoveRelatedGameMenus` | `public void RemoveRelatedGameMenus(object relatedObject)` | 方法 |
| `RemoveRelatedGameMenuOptions` | `public void RemoveRelatedGameMenuOptions(object relatedObject)` | 方法 |
| `GetGameMenu` | `public GameMenu GetGameMenu(string menuId)` | 方法 |
| `PreviouslySelectedGameMenuItem` | `public int PreviouslySelectedGameMenuItem` | 字段 |
| `List` | `public List<Location>MenuLocations` | 字段 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GameMenu](../GameMenu)
- [同命名空间 GameMenuCallbackManager](../GameMenuCallbackManager)
- [同命名空间 GameMenuEventHandler](../GameMenuEventHandler)
- [同命名空间 GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate)

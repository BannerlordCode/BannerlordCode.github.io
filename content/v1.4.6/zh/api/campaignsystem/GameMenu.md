---
title: "GameMenu"
description: "GameMenu：TaleWorlds.CampaignSystem 的 public 类；公开成员 50 个（方法 24、属性 23、字段 0）。源文件 TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs。"
---
# GameMenu

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameMenu`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs`

## 概述

GameMenu 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs。它是一个 public 类，继承链为 GameMenu。public/protected 成员共 50 个：24 方法、23 属性、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenu 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameMenus），继承链 GameMenu。成员构成以方法为主（方法 24/50，属性 23/50），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Type` | `public GameMenu.MenuAndOptionType Type` | 属性 |
| `StringId` | `public string StringId` | 属性 |
| `RelatedObject` | `public object RelatedObject` | 属性 |
| `MenuTitle` | `public TextObject MenuTitle` | 属性 |
| `OverlayType` | `public GameMenu.MenuOverlayType OverlayType` | 属性 |
| `IsReady` | `public bool IsReady` | 属性 |
| `MenuItemAmount` | `public int MenuItemAmount` | 属性 |
| `List` | `public List<object>MenuRepeatObjects` | 属性 |
| `CurrentRepeatableObject` | `public object CurrentRepeatableObject` | 属性 |
| `IsWaitMenu` | `public bool IsWaitMenu` | 属性 |
| `IsWaitActive` | `public bool IsWaitActive` | 属性 |
| `IsEmpty` | `public bool IsEmpty` | 属性 |
| `Progress` | `public float Progress` | 属性 |
| `TargetWaitHours` | `public float TargetWaitHours` | 属性 |
| `OnTick` | `public OnTickDelegate OnTick` | 属性 |
| `OnCondition` | `public OnConditionDelegate OnCondition` | 属性 |
| `OnConsequence` | `public OnConsequenceDelegate OnConsequence` | 属性 |
| `CurrentRepeatableIndex` | `public int CurrentRepeatableIndex` | 属性 |
| `IEnumerable` | `public IEnumerable<GameMenuOption>MenuOptions` | 属性 |
| `SetMenuRepeatObjects` | `public void SetMenuRepeatObjects(IEnumerable<object>list)` | 方法 |
| `GetMenuOptionConditionsHold` | `public bool GetMenuOptionConditionsHold(Game game, MenuContext menuContext, int menuItemNumber)` | 方法 |
| `GetMenuOptionText` | `public TextObject GetMenuOptionText(int menuItemNumber)` | 方法 |
| `GetGameMenuOption` | `public GameMenuOption GetGameMenuOption(int menuItemNumber)` | 方法 |
| `GetMenuOptionText2` | `public TextObject GetMenuOptionText2(int menuItemNumber)` | 方法 |
| `GetMenuOptionIdString` | `public string GetMenuOptionIdString(int menuItemNumber)` | 方法 |
| `GetMenuOptionTooltip` | `public TextObject GetMenuOptionTooltip(int menuItemNumber)` | 方法 |
| `GetMenuOptionIsLeave` | `public bool GetMenuOptionIsLeave(int menuItemNumber)` | 方法 |
| `SetProgressOfWaitingInMenu` | `public void SetProgressOfWaitingInMenu(float progress)` | 方法 |
| `SetTargetedWaitingTimeAndInitialProgress` | `public void SetTargetedWaitingTimeAndInitialProgress(float targetedWaitingTime, float initialProgress)` | 方法 |
| `GetLeaveMenuOption` | `public GameMenuOption GetLeaveMenuOption(Game game, MenuContext menuContext)` | 方法 |
| `RunOnTick` | `public void RunOnTick(MenuContext menuContext, float dt)` | 方法 |
| `RunWaitMenuCondition` | `public bool RunWaitMenuCondition(MenuContext menuContext)` | 方法 |
| `RunWaitMenuConsequence` | `public void RunWaitMenuConsequence(MenuContext menuContext)` | 方法 |
| `RunMenuOptionConsequence` | `public void RunMenuOptionConsequence(MenuContext menuContext, int menuItemNumber)` | 方法 |
| `StartWait` | `public void StartWait()` | 方法 |
| `EndWait` | `public void EndWait()` | 方法 |
| `RunOnInit` | `public void RunOnInit(Game game, MenuContext menuContext)` | 方法 |
| `PreInit` | `public void PreInit(MenuContext menuContext)` | 方法 |
| `AfterInit` | `public void AfterInit(MenuContext menuContext)` | 方法 |
| `GetText` | `public TextObject GetText()` | 方法 |
| `AutoSelectFirst` | `public bool AutoSelectFirst` | 属性 |
| `ActivateGameMenu` | `public static void ActivateGameMenu(string menuId)` | 方法 |
| `SwitchToMenu` | `public static void SwitchToMenu(string menuId)` | 方法 |
| `ExitToLast` | `public static void ExitToLast()` | 方法 |
| `MenuOverlayType` | `public enum MenuOverlayType` | 属性 |
| `MenuFlags` | `public enum MenuFlags` | 属性 |
| `MenuAndOptionType` | `public enum MenuAndOptionType` | 属性 |
| `MenuOverlayType` | `public enum MenuOverlayType` | 嵌套类型 |
| `MenuFlags` | `public enum MenuFlags` | 嵌套类型 |
| `MenuAndOptionType` | `public enum MenuAndOptionType` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GameMenuCallbackManager](../GameMenuCallbackManager)
- [同命名空间 GameMenuEventHandler](../GameMenuEventHandler)
- [同命名空间 GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate)
- [同命名空间 GameMenuInitDelegate](../GameMenuInitDelegate)

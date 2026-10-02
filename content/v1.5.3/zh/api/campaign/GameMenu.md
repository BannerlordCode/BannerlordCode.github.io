---
title: "GameMenu"
description: "GameMenu 的自动生成类参考。"
---
# GameMenu

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenu `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs

## 概述

`GameMenu` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetMenuRepeatObjects
`public void SetMenuRepeatObjects(IEnumerable<object> list) `

### GetMenuOptionConditionsHold
`public bool GetMenuOptionConditionsHold(Game game,MenuContext menuContext,int menuItemNumber) `

### GetMenuOptionText
`public TextObject GetMenuOptionText(int menuItemNumber) `

### GetGameMenuOption
`public GameMenuOption GetGameMenuOption(int menuItemNumber) `

### GetMenuOptionText2
`public TextObject GetMenuOptionText2(int menuItemNumber) `

### GetMenuOptionIdString
`public string GetMenuOptionIdString(int menuItemNumber) `

### GetMenuOptionTooltip
`public TextObject GetMenuOptionTooltip(int menuItemNumber) `

### GetMenuOptionIsLeave
`public bool GetMenuOptionIsLeave(int menuItemNumber) `

### SetProgressOfWaitingInMenu
`public void SetProgressOfWaitingInMenu(float progress) `

### SetTargetedWaitingTimeAndInitialProgress
`public void SetTargetedWaitingTimeAndInitialProgress(float targetedWaitingTime,float initialProgress) `

### GetLeaveMenuOption
`public GameMenuOption GetLeaveMenuOption(Game game,MenuContext menuContext) `

### GetLeaveMenuOptionIndex
`public int GetLeaveMenuOptionIndex(Game game,MenuContext menuContext) `

### RunOnTick
`public void RunOnTick(MenuContext menuContext,float dt) `

### RunWaitMenuCondition
`public bool RunWaitMenuCondition(MenuContext menuContext) `

### RunWaitMenuConsequence
`public void RunWaitMenuConsequence(MenuContext menuContext) `

### RunMenuOptionConsequence
`public void RunMenuOptionConsequence(MenuContext menuContext,int menuItemNumber) `

### StartWait
`public void StartWait() `

### EndWait
`public void EndWait() `

### RunOnInit
`public void RunOnInit(Game game,MenuContext menuContext) `

### PreInit
`public void PreInit(MenuContext menuContext) `

### AfterInit
`public void AfterInit(MenuContext menuContext) `

### GetText
`public TextObject GetText() `

### ActivateGameMenu
`public static void ActivateGameMenu(string menuId) `

### SwitchToMenu
`public static void SwitchToMenu(string menuId) `

### ExitToLast
`public static void ExitToLast() `

## 参见

- [本区域目录](../)
- [API 参考](../../)

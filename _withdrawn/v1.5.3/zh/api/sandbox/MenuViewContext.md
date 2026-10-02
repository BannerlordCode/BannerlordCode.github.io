---
title: "MenuViewContext"
description: "MenuViewContext 的自动生成类参考。"
---
# MenuViewContext

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuViewContext : IMenuContextHandler `
**Base:** IMenuContextHandler
**Source:** SandBox.View/Menu/MenuViewContext.cs

## 概述

`MenuViewContext` 的自动生成类参考页面。声明来自 `SandBox.View/Menu/MenuViewContext.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### UpdateMenuContext
`public void UpdateMenuContext(MenuContext menuContext) `

### AddLayer
`public void AddLayer(ScreenLayer layer) `

### RemoveLayer
`public void RemoveLayer(ScreenLayer layer) `

### OnFrameTick
`public void OnFrameTick(float dt) `

### OnResume
`public void OnResume() `

### OnHourlyTick
`public void OnHourlyTick() `

### OnActivate
`public void OnActivate() `

### OnDeactivate
`public void OnDeactivate() `

### OnInitialize
`public void OnInitialize() `

### OnFinalize
`public void OnFinalize() `

### StopAllSounds
`public void StopAllSounds() `

### OnMapConversationActivated
`public void OnMapConversationActivated() `

### OnMapConversationDeactivated
`public void OnMapConversationDeactivated() `

### OnGameStateDeactivate
`public void OnGameStateDeactivate() `

### OnGameStateInitialize
`public void OnGameStateInitialize() `

### OnGameStateFinalize
`public void OnGameStateFinalize() `

### CloseCharacterDeveloper
`public void CloseCharacterDeveloper() `

### RemoveMenuView
`public void RemoveMenuView(MenuView menuView) `

### CloseTownManagement
`public void CloseTownManagement() `

### CloseRecruitVolunteers
`public void CloseRecruitVolunteers() `

### CloseTournamentLeaderboard
`public void CloseTournamentLeaderboard() `

### CloseTroopSelection
`public void CloseTroopSelection() `

### CreateTroopSelectionView
`protected virtual MenuView CreateTroopSelectionView(TroopRoster fullRoster,TroopRoster initialSelections,Func<CharacterObject,bool> canChangeStatusOfTroop,Action<TroopRoster> onDone,int maxSelectableTroopCount,int minSelectableTroopCount) `

### CreateNavalTroopSelectionView
`protected virtual MenuView CreateNavalTroopSelectionView(TroopRoster fullRoster,TroopRoster initialTroopSelections,List<Ship> eligibleShips,List<Ship> initialShipSelections,Func<CharacterObject,bool> canChangeStatusOfTroop,Action<TroopRoster,List<Ship>> onDone,int minSelectableTroopCount,int minSelectableShipCount,int maxSelectableShipCount,bool anyOtherPartiesOnPlayerSide) `

## 参见

- [本区域目录](../)
- [API 参考](../../)

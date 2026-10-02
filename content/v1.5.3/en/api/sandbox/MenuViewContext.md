---
title: "MenuViewContext"
description: "Auto-generated class reference for MenuViewContext."
---
# MenuViewContext

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuViewContext : IMenuContextHandler `
**Base:** IMenuContextHandler
**Source:** SandBox.View/Menu/MenuViewContext.cs

## Overview

Auto-generated stub for `MenuViewContext`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### UpdateMenuContext
`public void UpdateMenuContext(MenuContext menuContext)`

### AddLayer
`public void AddLayer(ScreenLayer layer)`

### RemoveLayer
`public void RemoveLayer(ScreenLayer layer)`

### OnFrameTick
`public void OnFrameTick(float dt)`

### OnResume
`public void OnResume()`

### OnHourlyTick
`public void OnHourlyTick()`

### OnActivate
`public void OnActivate()`

### OnDeactivate
`public void OnDeactivate()`

### OnInitialize
`public void OnInitialize()`

### OnFinalize
`public void OnFinalize()`

### StopAllSounds
`public void StopAllSounds()`

### OnMapConversationActivated
`public void OnMapConversationActivated()`

### OnMapConversationDeactivated
`public void OnMapConversationDeactivated()`

### OnGameStateDeactivate
`public void OnGameStateDeactivate()`

### OnGameStateInitialize
`public void OnGameStateInitialize()`

### OnGameStateFinalize
`public void OnGameStateFinalize()`

### CloseCharacterDeveloper
`public void CloseCharacterDeveloper()`

### RemoveMenuView
`public void RemoveMenuView(MenuView menuView)`

### CloseTownManagement
`public void CloseTownManagement()`

### CloseRecruitVolunteers
`public void CloseRecruitVolunteers()`

### CloseTournamentLeaderboard
`public void CloseTournamentLeaderboard()`

### CloseTroopSelection
`public void CloseTroopSelection()`

### CreateTroopSelectionView
`protected virtual MenuView CreateTroopSelectionView(TroopRoster fullRoster,TroopRoster initialSelections,Func<CharacterObject,bool> canChangeStatusOfTroop,Action<TroopRoster> onDone,int maxSelectableTroopCount,int minSelectableTroopCount)`

### CreateNavalTroopSelectionView
`protected virtual MenuView CreateNavalTroopSelectionView(TroopRoster fullRoster,TroopRoster initialTroopSelections,List<Ship> eligibleShips,List<Ship> initialShipSelections,Func<CharacterObject,bool> canChangeStatusOfTroop,Action<TroopRoster,List<Ship>> onDone,int minSelectableTroopCount,int minSelectableShipCount,int maxSelectableShipCount,bool anyOtherPartiesOnPlayerSide)`

## See Also

- [Section index](../)

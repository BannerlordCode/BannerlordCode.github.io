---
title: "GameStateManager"
description: "Auto-generated class reference for GameStateManager."
---
# GameStateManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameStateManager `
**Base:** System.Object
**Source:** TaleWorlds.Core/GameStateManager.cs

## Overview

Auto-generated stub for `GameStateManager`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RegisterListener
`public bool RegisterListener(IGameStateManagerListener listener)`

### UnregisterListener
`public bool UnregisterListener(IGameStateManagerListener listener)`

### RegisterActiveStateDisableRequest
`public void RegisterActiveStateDisableRequest(object requestingInstance)`

### UnregisterActiveStateDisableRequest
`public void UnregisterActiveStateDisableRequest(object requestingInstance)`

### OnSavedGameLoadFinished
`public void OnSavedGameLoadFinished()`

### OnTick
`public void OnTick(float dt)`

### PushState
`public void PushState(GameState gameState,int level = 0)`

### PopState
`public void PopState(int level = 0)`

### CleanAndPushState
`public void CleanAndPushState(GameState gameState,int level = 0)`

### CleanStates
`public void CleanStates(int level = 0)`

## See Also

- [Section index](../)

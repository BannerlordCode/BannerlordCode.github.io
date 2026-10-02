---
title: "GameStateManager"
description: "GameStateManager 的自动生成类参考。"
---
# GameStateManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameStateManager `
**Base:** System.Object
**Source:** TaleWorlds.Core/GameStateManager.cs

## 概述

`GameStateManager` 的自动生成类参考页面。声明来自 `TaleWorlds.Core/GameStateManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RegisterListener
`public bool RegisterListener(IGameStateManagerListener listener) `

### UnregisterListener
`public bool UnregisterListener(IGameStateManagerListener listener) `

### RegisterActiveStateDisableRequest
`public void RegisterActiveStateDisableRequest(object requestingInstance) `

### UnregisterActiveStateDisableRequest
`public void UnregisterActiveStateDisableRequest(object requestingInstance) `

### OnSavedGameLoadFinished
`public void OnSavedGameLoadFinished() `

### OnTick
`public void OnTick(float dt) `

### PushState
`public void PushState(GameState gameState,int level = 0) `

### PopState
`public void PopState(int level = 0) `

### CleanAndPushState
`public void CleanAndPushState(GameState gameState,int level = 0) `

### CleanStates
`public void CleanStates(int level = 0) `

## 参见

- [本区域目录](../)
- [API 参考](../../)

---
title: "GameState"
description: "GameState 的自动生成类参考。"
---
# GameState

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameState : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameState.cs`

## 概述

`GameState` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |
| `GameStateManager` | `public GameStateManager GameStateManager { get; }` |
| `Activated` | `public bool Activated { get; }` |

## 主要方法

### RegisterListener
`public bool RegisterListener(IGameStateListener listener)`

**用途 / Purpose:** 将listener注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 GameState 实例
GameState gameState = ...;
var result = gameState.RegisterListener(listener);
```

### UnregisterListener
`public bool UnregisterListener(IGameStateListener listener)`

**用途 / Purpose:** 从当前系统中注销listener。

```csharp
// 先通过子系统 API 拿到 GameState 实例
GameState gameState = ...;
var result = gameState.UnregisterListener(listener);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GameState instance = ...;
```

## 参见

- [本区域目录](../)
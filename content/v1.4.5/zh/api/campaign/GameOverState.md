---
title: "GameOverState"
description: "GameOverState 的自动生成类参考。"
---
# GameOverState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameOverState : TaleWorlds.Core.GameState`
**Base:** `TaleWorlds.Core.GameState`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/GameOverState.cs`

## 概述

`GameOverState` 位于 `TaleWorlds.CampaignSystem.GameState`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameState` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Handler` | `public IGameOverStateHandler Handler { get; }` |
| `Reason` | `public GameOverReason Reason { get; }` |

## 主要方法

### CreateForVictory
`public static GameOverState CreateForVictory()`

**用途 / Purpose:** 构建一个新的 for victory 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameOverState.CreateForVictory();
```

### CreateForRetirement
`public static GameOverState CreateForRetirement()`

**用途 / Purpose:** 构建一个新的 for retirement 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameOverState.CreateForRetirement();
```

### CreateForClanDestroyed
`public static GameOverState CreateForClanDestroyed()`

**用途 / Purpose:** 构建一个新的 for clan destroyed 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameOverState.CreateForClanDestroyed();
```

## 使用示例

```csharp
GameOverState.CreateForVictory();
```

## 参见

- [本区域目录](../)
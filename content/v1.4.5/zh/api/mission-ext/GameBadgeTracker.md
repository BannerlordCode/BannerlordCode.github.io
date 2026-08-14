---
title: "GameBadgeTracker"
description: "GameBadgeTracker 的自动生成类参考。"
---
# GameBadgeTracker

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GameBadgeTracker`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/GameBadgeTracker.cs`

## 概述

`GameBadgeTracker` 位于 `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnPlayerJoin
`public virtual void OnPlayerJoin(PlayerData playerData)`

**用途 / Purpose:** 在 player join 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameBadgeTracker 实例
GameBadgeTracker gameBadgeTracker = ...;
gameBadgeTracker.OnPlayerJoin(playerData);
```

### OnKill
`public virtual void OnKill(KillData killData)`

**用途 / Purpose:** 在 kill 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameBadgeTracker 实例
GameBadgeTracker gameBadgeTracker = ...;
gameBadgeTracker.OnKill(killData);
```

### OnStartingNextBattle
`public virtual void OnStartingNextBattle()`

**用途 / Purpose:** 在 starting next battle 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameBadgeTracker 实例
GameBadgeTracker gameBadgeTracker = ...;
gameBadgeTracker.OnStartingNextBattle();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GameBadgeTracker instance = ...;
```

## 参见

- [本区域目录](../)
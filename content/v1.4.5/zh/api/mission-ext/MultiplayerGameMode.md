---
title: "MultiplayerGameMode"
description: "MultiplayerGameMode 的自动生成类参考。"
---
# MultiplayerGameMode

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerGameMode`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerGameMode.cs`

## 概述

`MultiplayerGameMode` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## 主要方法

### JoinCustomGame
`public abstract void JoinCustomGame(JoinGameData joinGameData)`

**用途 / Purpose:** 把若干「custom game」连接成一个整体。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameMode 实例
MultiplayerGameMode multiplayerGameMode = ...;
multiplayerGameMode.JoinCustomGame(joinGameData);
```

### StartMultiplayerGame
`public abstract void StartMultiplayerGame(string scene)`

**用途 / Purpose:** 启动「multiplayer game」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameMode 实例
MultiplayerGameMode multiplayerGameMode = ...;
multiplayerGameMode.StartMultiplayerGame("example");
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MultiplayerGameMode instance = ...;
```

## 参见

- [本区域目录](../)
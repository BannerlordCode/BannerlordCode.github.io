---
title: "MissionBasedMultiplayerGameMode"
description: "MissionBasedMultiplayerGameMode 的自动生成类参考。"
---
# MissionBasedMultiplayerGameMode

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBasedMultiplayerGameMode : MultiplayerGameMode`
**Base:** `MultiplayerGameMode`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MissionBasedMultiplayerGameMode.cs`

## 概述

`MissionBasedMultiplayerGameMode` 位于 `TaleWorlds.MountAndBlade.Multiplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### JoinCustomGame
`public override void JoinCustomGame(JoinGameData joinGameData)`

**用途 / Purpose:** **用途 / Purpose:** 把若干custom game连接成一个整体。

```csharp
// 先通过子系统 API 拿到 MissionBasedMultiplayerGameMode 实例
MissionBasedMultiplayerGameMode missionBasedMultiplayerGameMode = ...;
missionBasedMultiplayerGameMode.JoinCustomGame(joinGameData);
```

### StartMultiplayerGame
`public override void StartMultiplayerGame(string scene)`

**用途 / Purpose:** **用途 / Purpose:** 启动multiplayer game流程或状态机。

```csharp
// 先通过子系统 API 拿到 MissionBasedMultiplayerGameMode 实例
MissionBasedMultiplayerGameMode missionBasedMultiplayerGameMode = ...;
missionBasedMultiplayerGameMode.StartMultiplayerGame("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionBasedMultiplayerGameMode missionBasedMultiplayerGameMode = ...;
missionBasedMultiplayerGameMode.JoinCustomGame(joinGameData);
```

## 参见

- [本区域目录](../)
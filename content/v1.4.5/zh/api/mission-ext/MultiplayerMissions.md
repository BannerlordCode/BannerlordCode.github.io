---
title: "MultiplayerMissions"
description: "MultiplayerMissions 的自动生成类参考。"
---
# MultiplayerMissions

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerMissions`
**Base:** 无
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MultiplayerMissions.cs`

## 概述

`MultiplayerMissions` 位于 `TaleWorlds.MountAndBlade.Multiplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenTeamDeathmatchMission
`public static void OpenTeamDeathmatchMission(string scene)`

**用途 / Purpose:** 打开team deathmatch mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerMissions.OpenTeamDeathmatchMission("example");
```

### OpenDuelMission
`public static void OpenDuelMission(string scene)`

**用途 / Purpose:** 打开duel mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerMissions.OpenDuelMission("example");
```

### OpenSiegeMission
`public static void OpenSiegeMission(string scene)`

**用途 / Purpose:** 打开siege mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerMissions.OpenSiegeMission("example");
```

### OpenBattleMission
`public static void OpenBattleMission(string scene)`

**用途 / Purpose:** 打开battle mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerMissions.OpenBattleMission("example");
```

### OpenCaptainMission
`public static void OpenCaptainMission(string scene)`

**用途 / Purpose:** 打开captain mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerMissions.OpenCaptainMission("example");
```

### OpenSkirmishMission
`public static void OpenSkirmishMission(string scene)`

**用途 / Purpose:** 打开skirmish mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerMissions.OpenSkirmishMission("example");
```

## 使用示例

```csharp
MultiplayerMissions.OpenTeamDeathmatchMission("example");
```

## 参见

- [本区域目录](../)
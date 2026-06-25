---
title: "GameServerEntry"
description: "GameServerEntry 的自动生成类参考。"
---
# GameServerEntry

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameServerEntry`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/GameServerEntry.cs`

## 概述

`GameServerEntry` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public CustomBattleId Id { get; }` |
| `Address` | `public string Address { get; }` |
| `Port` | `public int Port { get; }` |
| `Region` | `public string Region { get; }` |
| `PlayerCount` | `public int PlayerCount { get; }` |
| `MaxPlayerCount` | `public int MaxPlayerCount { get; }` |
| `ServerName` | `public string ServerName { get; }` |
| `GameModule` | `public string GameModule { get; }` |
| `GameType` | `public string GameType { get; }` |
| `Map` | `public string Map { get; }` |
| `UniqueMapId` | `public string UniqueMapId { get; }` |
| `Ping` | `public int Ping { get; }` |
| `IsOfficial` | `public bool IsOfficial { get; }` |
| `ByOfficialProvider` | `public bool ByOfficialProvider { get; }` |
| `PasswordProtected` | `public bool PasswordProtected { get; }` |
| `Permission` | `public int Permission { get; }` |
| `CrossplayEnabled` | `public bool CrossplayEnabled { get; }` |
| `HostId` | `public PlayerId HostId { get; }` |
| `HostName` | `public string HostName { get; }` |
| `LoadedModules` | `public List<ModuleInfoModel> LoadedModules { get; }` |
| `AllowsOptionalModules` | `public bool AllowsOptionalModules { get; }` |

## 主要方法

### FilterGameServerEntriesBasedOnCrossplay
`public static void FilterGameServerEntriesBasedOnCrossplay(ref List<GameServerEntry> serverList, bool hasCrossplayPrivilege)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FilterGameServerEntriesBasedOnCrossplay 对应的操作。

```csharp
// 静态调用，不需要实例
GameServerEntry.FilterGameServerEntriesBasedOnCrossplay(serverList, false);
```

## 使用示例

```csharp
GameServerEntry.FilterGameServerEntriesBasedOnCrossplay(serverList, false);
```

## 参见

- [本区域目录](../)
---
title: "MBMultiplayerData"
description: "MBMultiplayerData 的自动生成类参考。"
---
# MBMultiplayerData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMultiplayerData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBMultiplayerData.cs`

## 概述

`MBMultiplayerData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MBMultiplayerData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ServerId` | `public static Guid ServerId { get; set; }` |

## 主要方法

### GetServerId
`public static string GetServerId()`

**用途 / Purpose:** 读取并返回当前对象中 「server id」 的结果。

```csharp
// 静态调用，不需要实例
MBMultiplayerData.GetServerId();
```

### GetServerName
`public static string GetServerName()`

**用途 / Purpose:** 读取并返回当前对象中 「server name」 的结果。

```csharp
// 静态调用，不需要实例
MBMultiplayerData.GetServerName();
```

### GetGameModule
`public static string GetGameModule()`

**用途 / Purpose:** 读取并返回当前对象中 「game module」 的结果。

```csharp
// 静态调用，不需要实例
MBMultiplayerData.GetGameModule();
```

### GetGameType
`public static string GetGameType()`

**用途 / Purpose:** 读取并返回当前对象中 「game type」 的结果。

```csharp
// 静态调用，不需要实例
MBMultiplayerData.GetGameType();
```

### GetMap
`public static string GetMap()`

**用途 / Purpose:** 读取并返回当前对象中 「map」 的结果。

```csharp
// 静态调用，不需要实例
MBMultiplayerData.GetMap();
```

### GetCurrentPlayerCount
`public static int GetCurrentPlayerCount()`

**用途 / Purpose:** 读取并返回当前对象中 「current player count」 的结果。

```csharp
// 静态调用，不需要实例
MBMultiplayerData.GetCurrentPlayerCount();
```

### GetPlayerCountLimit
`public static int GetPlayerCountLimit()`

**用途 / Purpose:** 读取并返回当前对象中 「player count limit」 的结果。

```csharp
// 静态调用，不需要实例
MBMultiplayerData.GetPlayerCountLimit();
```

### UpdateGameServerInfo
`public static void UpdateGameServerInfo(string id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)`

**用途 / Purpose:** 重新计算并更新 「game server info」 的最新表示。

```csharp
// 静态调用，不需要实例
MBMultiplayerData.UpdateGameServerInfo("example", "example", "example", "example", "example", 0, 0, "example", 0);
```

### GameServerInfoReceivedDelegate
`public delegate void GameServerInfoReceivedDelegate(CustomBattleId id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)`

**用途 / Purpose:** 处理与 「game server info received delegate」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBMultiplayerData 实例
MBMultiplayerData mBMultiplayerData = ...;
mBMultiplayerData.GameServerInfoReceivedDelegate(id, "example", "example", "example", "example", 0, 0, "example", 0);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
MBMultiplayerData entry = ...;
```

## 参见

- [本区域目录](../)
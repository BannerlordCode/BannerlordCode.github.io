<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBMultiplayerData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBMultiplayerData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMultiplayerData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBMultiplayerData.cs`

## 概述

`MBMultiplayerData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MBMultiplayerData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ServerId` | `public static Guid ServerId { get; set; }` |

## 主要方法

### GameServerInfoReceivedDelegate
`public delegate void GameServerInfoReceivedDelegate(CustomBattleId id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)`

**用途 / Purpose:** 处理 `game server info received delegate` 相关逻辑。

### GetServerId
`public static string GetServerId()`

**用途 / Purpose:** 获取 `server id` 的当前值。

### GetServerName
`public static string GetServerName()`

**用途 / Purpose:** 获取 `server name` 的当前值。

### GetGameModule
`public static string GetGameModule()`

**用途 / Purpose:** 获取 `game module` 的当前值。

### GetGameType
`public static string GetGameType()`

**用途 / Purpose:** 获取 `game type` 的当前值。

### GetMap
`public static string GetMap()`

**用途 / Purpose:** 获取 `map` 的当前值。

### GetCurrentPlayerCount
`public static int GetCurrentPlayerCount()`

**用途 / Purpose:** 获取 `current player count` 的当前值。

### GetPlayerCountLimit
`public static int GetPlayerCountLimit()`

**用途 / Purpose:** 获取 `player count limit` 的当前值。

### UpdateGameServerInfo
`public static void UpdateGameServerInfo(string id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)`

**用途 / Purpose:** 更新 `game server info` 的状态或数据。

## 使用示例

```csharp
var value = new MBMultiplayerData();
```

## 参见

- [完整类目录](../catalog)
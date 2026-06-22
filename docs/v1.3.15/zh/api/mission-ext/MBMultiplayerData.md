<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBMultiplayerData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBMultiplayerData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMultiplayerData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBMultiplayerData.cs`

## 概述

`MBMultiplayerData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `ServerId` | `public static Guid ServerId { get; set; }` |

## 主要方法

### GetServerId
```csharp
public static string GetServerId()
```

### GetServerName
```csharp
public static string GetServerName()
```

### GetGameModule
```csharp
public static string GetGameModule()
```

### GetGameType
```csharp
public static string GetGameType()
```

### GetMap
```csharp
public static string GetMap()
```

### GetCurrentPlayerCount
```csharp
public static int GetCurrentPlayerCount()
```

### GetPlayerCountLimit
```csharp
public static int GetPlayerCountLimit()
```

### UpdateGameServerInfo
```csharp
public static void UpdateGameServerInfo(string id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)
```

### GameServerInfoReceivedDelegate
```csharp
public delegate void GameServerInfoReceivedDelegate(CustomBattleId id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)
```

## 使用示例

```csharp
// MBMultiplayerData (Data) 的典型用法
new MBMultiplayerData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)
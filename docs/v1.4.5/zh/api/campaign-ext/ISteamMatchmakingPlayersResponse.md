<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ISteamMatchmakingPlayersResponse`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ISteamMatchmakingPlayersResponse

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public class ISteamMatchmakingPlayersResponse`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/ISteamMatchmakingPlayersResponse.cs`

## 概述

`ISteamMatchmakingPlayersResponse` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddPlayerToList
`public delegate void AddPlayerToList(string pchName, int nScore, float flTimePlayed)`

**用途 / Purpose:** 向当前集合/状态中添加 `player to list`。

### PlayersFailedToRespond
`public delegate void PlayersFailedToRespond()`

**用途 / Purpose:** 处理 `players failed to respond` 相关逻辑。

### PlayersRefreshComplete
`public delegate void PlayersRefreshComplete()`

**用途 / Purpose:** 处理 `players refresh complete` 相关逻辑。

### InternalAddPlayerToList
`public delegate void InternalAddPlayerToList(IntPtr thisptr, IntPtr pchName, int nScore, float flTimePlayed)`

**用途 / Purpose:** 处理 `internal add player to list` 相关逻辑。

### InternalPlayersFailedToRespond
`public delegate void InternalPlayersFailedToRespond(IntPtr thisptr)`

**用途 / Purpose:** 处理 `internal players failed to respond` 相关逻辑。

### InternalPlayersRefreshComplete
`public delegate void InternalPlayersRefreshComplete(IntPtr thisptr)`

**用途 / Purpose:** 处理 `internal players refresh complete` 相关逻辑。

### IntPtr
`public static explicit operator IntPtr(ISteamMatchmakingPlayersResponse that)`

**用途 / Purpose:** 处理 `int ptr` 相关逻辑。

## 使用示例

```csharp
var value = new ISteamMatchmakingPlayersResponse();
value.AddPlayerToList("example", 0, 0);
```

## 参见

- [完整类目录](../catalog)
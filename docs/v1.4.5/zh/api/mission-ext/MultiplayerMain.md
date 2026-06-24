<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerMain`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerMain

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class MultiplayerMain`
**领域:** mission-ext

## 概述

`MultiplayerMain` 位于 `TaleWorlds.MountAndBlade.Multiplayer`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public static bool IsInitialized { get; }` |

## 主要方法

### Initialize
`public static void Initialize(IGameNetworkHandler gameNetworkHandler)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### InitializeAsDedicatedServer
`public static void InitializeAsDedicatedServer(IGameNetworkHandler gameNetworkHandler)`

**用途 / Purpose:** 初始化 `as dedicated server` 的状态、资源或绑定。

### GetAvailableRankedGameModes
`public static MultiplayerGameType GetAvailableRankedGameModes()`

**用途 / Purpose:** 获取 `available ranked game modes` 的当前值。

### GetAvailableCustomGameModes
`public static MultiplayerGameType GetAvailableCustomGameModes()`

**用途 / Purpose:** 获取 `available custom game modes` 的当前值。

### GetAvailableQuickPlayGameModes
`public static MultiplayerGameType GetAvailableQuickPlayGameModes()`

**用途 / Purpose:** 获取 `available quick play game modes` 的当前值。

### GetAvailableMatchmakerRegions
`public static string GetAvailableMatchmakerRegions()`

**用途 / Purpose:** 获取 `available matchmaker regions` 的当前值。

### GetUserDefaultRegion
`public static string GetUserDefaultRegion()`

**用途 / Purpose:** 获取 `user default region` 的当前值。

### GetUserCurrentRegion
`public static string GetUserCurrentRegion()`

**用途 / Purpose:** 获取 `user current region` 的当前值。

### GetUserSelectedGameTypes
`public static string GetUserSelectedGameTypes()`

**用途 / Purpose:** 获取 `user selected game types` 的当前值。

### GetDedicatedCustomServerAuthToken
`public static string GetDedicatedCustomServerAuthToken(List<string> strings)`

**用途 / Purpose:** 获取 `dedicated custom server auth token` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MultiplayerMain.Initialize(gameNetworkHandler);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

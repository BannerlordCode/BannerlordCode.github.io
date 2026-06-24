---
title: GameServerEntry
description: GameServerEntry - 多人游戏服务器列表条目
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameServerEntry`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameServerEntry
**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade.Diamond
**类型:** class（`[Serializable]`，无基类）

## 概述

`GameServerEntry` 是多人游戏服务器浏览列表中的一个条目。它是一个纯数据对象（POCO），所有属性都通过 `[JsonProperty]` 标注，用于从官方服务器列表 API 反序列化。每个条目包含服务器地址、端口、玩家数、地图、游戏模式、模块信息、是否官方、是否跨平台等元数据。

类有两个构造函数：无参的（用于 JSON 反序列化）和带 21 个参数的完整构造函数（用于在客户端手动构造一个条目，比如从 LAN 广播解析）。所有属性都是 `{ get; private set; }`，外部只能读不能改——要修改必须通过反射或重新构造。

`FilterGameServerEntriesBasedOnCrossplay` 是唯一的静态方法，根据当前平台和跨平台权限过滤服务器列表：GDK 桌面平台无跨平台权限时移除所有跨平台服务器，其他平台移除所有非跨平台服务器。

## 心智模型

这个类的设计是"反序列化友好"的——所有 setter 都是 `private`，但 JSON.NET（Newtonsoft.Json）能通过反射写入。`LoadedModules` 是 `List&lt;ModuleInfoModel&gt;`，记录服务器加载的所有模块，客户端用它和本地模块列表比对来决定能否加入。`Permission` 是个 int 位标志，表示服务器权限设置（如是否需要密码、是否仅限好友等）。

跨平台过滤的逻辑很关键：Steam/PC 玩家只能看到非跨平台服务器，GDK（Xbox）玩家有跨平台权限才能看到跨平台服务器。这是平台政策约束，不是技术限制。

## 主要属性

\| 属性 \| 类型 \| 说明 \|
\|------\|------\|------\|
\| `Id` \| `CustomBattleId` \| 服务器唯一标识 \|
\| `Address` \| `string` \| 服务器 IP 地址 \|
\| `Port` \| `int` \| 服务器端口 \|
\| `Region` \| `string` \| 服务器所在地区代码 \|
\| `PlayerCount` \| `int` \| 当前在线玩家数 \|
\| `MaxPlayerCount` \| `int` \| 最大玩家数 \|
\| `ServerName` \| `string` \| 显示名称 \|
\| `GameModule` \| `string` \| 主游戏模块 ID \|
\| `GameType` \| `string` \| 游戏模式（如 "Siege" / "Skirmish"） \|
\| `Map` \| `string` \| 当前地图 ID \|
\| `UniqueMapId` \| `string` \| 地图唯一实例 ID \|
\| `Ping` \| `int` \| 客户端测得的延迟（毫秒） \|
\| `IsOfficial` \| `bool` \| 是否为官方服务器 \|
\| `ByOfficialProvider` \| `bool` \| 是否由官方提供商托管 \|
\| `PasswordProtected` \| `bool` \| 是否需要密码 \|
\| `Permission` \| `int` \| 权限位标志 \|
\| `CrossplayEnabled` \| `bool` \| 是否启用跨平台 \|
\| `HostId` \| `PlayerId` \| 房主的 PlayerId \|
\| `HostName` \| `string` \| 房主显示名 \|
\| `LoadedModules` \| `List&lt;ModuleInfoModel&gt;` \| 服务器加载的模块列表 \|
\| `AllowsOptionalModules` \| `bool` \| 是否允许可选模块 \|

## 主要方法

### GameServerEntry（无参）
```csharp
public GameServerEntry()
```
空构造函数，仅供 JSON 反序列化使用。

### GameServerEntry（完整）
```csharp
public GameServerEntry(CustomBattleId id, string serverName, string address, int port,
    string region, string gameModule, string gameType, string map, string uniqueMapId,
    int playerCount, int maxPlayerCount, bool isOfficial, bool byOfficialProvider,
    bool crossplayEnabled, PlayerId hostId, string hostName,
    List<ModuleInfoModel> loadedModules, bool allowsOptionalModules,
    bool passwordProtected = false, int permission = 0)
```
完整构造函数，按参数顺序赋值给所有属性。

### FilterGameServerEntriesBasedOnCrossplay
```csharp
public static void FilterGameServerEntriesBasedOnCrossplay(
    ref List<GameServerEntry> serverList, bool hasCrossplayPrivilege)
```
原地过滤服务器列表（`ref` 传递，直接 `RemoveAll`）。
- 当前平台是 `GDKDesktop`（Xbox 桌面版）：
  - 无跨平台权限 → 移除所有 `CrossplayEnabled` 为 `true` 的服务器
  - 有跨平台权限 → 不过滤
- 其他平台（Steam 等）：
  - 移除所有 `CrossplayEnabled` 为 `false` 的服务器

## 使用示例

### 示例: 自定义服务器列表过滤

**场景**: mod 想在服务器浏览器中只显示 ping &lt; 100 的服务器。

```csharp
// 1. 从官方 API 拿到原始列表
List<GameServerEntry> allServers = await GetServerListFromApi();

// 2. 应用跨平台过滤
GameServerEntry.FilterGameServerEntriesBasedOnCrossplay(
    ref allServers, hasCrossplayPrivilege: true);

// 3. 自定义过滤：只保留 ping < 100 的
var lowPingServers = allServers
    .Where(s => s.Ping >= 0 && s.Ping < 100)
    .OrderBy(s => s.Ping)
    .ToList();

// 4. 检查模块兼容性
foreach (var server in lowPingServers)
{
    bool compatible = server.LoadedModules.All(
        sm => LocalModules.Any(lm => lm.Id == sm.Id && lm.Version == sm.Version));
    if (!compatible) continue;
    // 加入显示列表
}
```

**要点**: `Ping` 可能为 `-1`（未测过），过滤时要排除；`LoadedModules` 的版本匹配很关键，版本不符会导致加入后立即被踢；`Permission` 的位含义没有公开文档，需要通过反编译服务器端代码确认。

## 参见

- [完整类目录](../catalog.md)
- [本领域目录](../catalog-engine.md)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview.md)

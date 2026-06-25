---
title: "GameStartupInfo"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameStartupInfo`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameStartupInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameStartupInfo`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameStartupInfo.cs`

## 概述

`GameStartupInfo` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StartupType` | `public GameStartupType StartupType { get; set; }` |
| `DedicatedServerType` | `public DedicatedServerType DedicatedServerType { get; set; }` |
| `PlayerHostedDedicatedServer` | `public bool PlayerHostedDedicatedServer { get; set; }` |
| `IsSinglePlatformServer` | `public bool IsSinglePlatformServer { get; set; }` |
| `CustomServerHostIP` | `public string CustomServerHostIP { get; set; }` |
| `ServerPort` | `public int ServerPort { get; set; }` |
| `ServerRegion` | `public string ServerRegion { get; set; }` |
| `ServerPriority` | `public sbyte ServerPriority { get; set; }` |
| `ServerGameMode` | `public string ServerGameMode { get; set; }` |
| `CustomGameServerConfigFile` | `public string CustomGameServerConfigFile { get; set; }` |
| `CustomGameServerNameOverride` | `public string CustomGameServerNameOverride { get; set; }` |
| `CustomGameServerPasswordOverride` | `public string CustomGameServerPasswordOverride { get; set; }` |
| `CustomGameServerAuthToken` | `public string CustomGameServerAuthToken { get; set; }` |
| `CustomGameServerAllowsOptionalModules` | `public bool CustomGameServerAllowsOptionalModules { get; set; }` |
| `OverridenUserName` | `public string OverridenUserName { get; set; }` |
| `PremadeGameType` | `public string PremadeGameType { get; set; }` |
| `Permission` | `public int Permission { get; set; }` |
| `PlatformInterface` | `public string PlatformInterface { get; set; }` |
| `EpicUserId` | `public string EpicUserId { get; set; }` |
| `EpicUserName` | `public string EpicUserName { get; set; }` |
| `IsContinueGame` | `public bool IsContinueGame { get; set; }` |
| `ServerBandwidthLimitInMbps` | `public double ServerBandwidthLimitInMbps { get; set; }` |
| `ServerTickRate` | `public int ServerTickRate { get; set; }` |

## 使用示例

```csharp
var example = new GameStartupInfo();
```

## 参见

- [完整类目录](../catalog)
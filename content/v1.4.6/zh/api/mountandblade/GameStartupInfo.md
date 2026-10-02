---
title: "GameStartupInfo"
description: "GameStartupInfo：TaleWorlds.MountAndBlade 的 public 类；公开成员 23 个（方法 0、属性 23、字段 0）。源文件 TaleWorlds.MountAndBlade/GameStartupInfo.cs。"
---
# GameStartupInfo

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class GameStartupInfo`
**File:** `TaleWorlds.MountAndBlade/GameStartupInfo.cs`

## 概述

GameStartupInfo 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/GameStartupInfo.cs。它是一个 public 类，继承链为 GameStartupInfo。public/protected 成员共 23 个：23 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameStartupInfo 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 GameStartupInfo。成员构成以属性为主（属性 23/23，方法 0/23），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/GameStartupInfo.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StartupType` | `public GameStartupType StartupType` | 属性 |
| `DedicatedServerType` | `public DedicatedServerType DedicatedServerType` | 属性 |
| `PlayerHostedDedicatedServer` | `public bool PlayerHostedDedicatedServer` | 属性 |
| `IsSinglePlatformServer` | `public bool IsSinglePlatformServer` | 属性 |
| `CustomServerHostIP` | `public string CustomServerHostIP` | 属性 |
| `ServerPort` | `public int ServerPort` | 属性 |
| `ServerRegion` | `public string ServerRegion` | 属性 |
| `ServerPriority` | `public sbyte ServerPriority` | 属性 |
| `ServerGameMode` | `public string ServerGameMode` | 属性 |
| `CustomGameServerConfigFile` | `public string CustomGameServerConfigFile` | 属性 |
| `CustomGameServerNameOverride` | `public string CustomGameServerNameOverride` | 属性 |
| `CustomGameServerPasswordOverride` | `public string CustomGameServerPasswordOverride` | 属性 |
| `CustomGameServerAuthToken` | `public string CustomGameServerAuthToken` | 属性 |
| `CustomGameServerAllowsOptionalModules` | `public bool CustomGameServerAllowsOptionalModules` | 属性 |
| `OverridenUserName` | `public string OverridenUserName` | 属性 |
| `PremadeGameType` | `public string PremadeGameType` | 属性 |
| `Permission` | `public int Permission` | 属性 |
| `PlatformInterface` | `public string PlatformInterface` | 属性 |
| `EpicUserId` | `public string EpicUserId` | 属性 |
| `EpicUserName` | `public string EpicUserName` | 属性 |
| `IsContinueGame` | `public bool IsContinueGame` | 属性 |
| `ServerBandwidthLimitInMbps` | `public double ServerBandwidthLimitInMbps` | 属性 |
| `ServerTickRate` | `public int ServerTickRate` | 属性 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)

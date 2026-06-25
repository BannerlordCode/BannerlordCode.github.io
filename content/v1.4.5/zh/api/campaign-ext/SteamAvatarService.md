---
title: "SteamAvatarService"
description: "SteamAvatarService 的自动生成类参考。"
---
# SteamAvatarService

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public class SteamAvatarService : ApiAvatarServiceBase`
**Base:** `ApiAvatarServiceBase`
**File:** `bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices.Avatar/SteamAvatarService.cs`

## 概述

`SteamAvatarService` 位于 `TaleWorlds.PlayerServices.Avatar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlayerServices.Avatar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `response` | `public SteamPlayers response { get; set; }` |
| `players` | `public SteamPlayerSummary players { get; set; }` |
| `avatar` | `public string avatar { get; set; }` |
| `avatarfull` | `public string avatarfull { get; set; }` |
| `avatarmedium` | `public string avatarmedium { get; set; }` |
| `communityvisibilitystate` | `public int communityvisibilitystate { get; set; }` |
| `lastlogoff` | `public int lastlogoff { get; set; }` |
| `personaname` | `public string personaname { get; set; }` |
| `personastate` | `public int personastate { get; set; }` |
| `personastateflags` | `public int personastateflags { get; set; }` |
| `primaryclanid` | `public string primaryclanid { get; set; }` |
| `profilestate` | `public int profilestate { get; set; }` |
| `profileurl` | `public string profileurl { get; set; }` |
| `realname` | `public string realname { get; set; }` |
| `steamid` | `public string steamid { get; set; }` |
| `timecreated` | `public int timecreated { get; set; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
SteamAvatarService instance = ...;
```

## 参见

- [本区域目录](../)
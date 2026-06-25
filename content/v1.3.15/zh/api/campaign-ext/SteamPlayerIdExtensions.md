---
title: "SteamPlayerIdExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamPlayerIdExtensions`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SteamPlayerIdExtensions

**命名空间:** TaleWorlds.PlatformService.GOG
**模块:** TaleWorlds.PlatformService
**类型:** `public static class SteamPlayerIdExtensions`
**领域:** campaign-ext

## 概述

`SteamPlayerIdExtensions` 位于 `TaleWorlds.PlatformService.GOG`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService.GOG` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ToPlayerId
`public static PlayerId ToPlayerId(this GalaxyID galaxyID)`

**用途 / Purpose:** 处理 `to player id` 相关逻辑。

### ToGOGID
`public static GalaxyID ToGOGID(this PlayerId playerId)`

**用途 / Purpose:** 处理 `to g o g i d` 相关逻辑。

### IsValidGOGId
`public static bool IsValidGOGId(this PlayerId playerId)`

**用途 / Purpose:** 处理 `is valid g o g id` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
SteamPlayerIdExtensions.ToPlayerId(galaxyID);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)

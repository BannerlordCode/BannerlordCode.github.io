---
title: "ClanHomeInfo"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanHomeInfo`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClanHomeInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanHomeInfo`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ClanHomeInfo.cs`

## 概述

`ClanHomeInfo` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInClan` | `public bool IsInClan { get; }` |
| `CanCreateClan` | `public bool CanCreateClan { get; }` |
| `ClanInfo` | `public ClanInfo ClanInfo { get; }` |
| `NotEnoughPlayersInfo` | `public NotEnoughPlayersInfo NotEnoughPlayersInfo { get; }` |
| `PlayerNotEligibleInfos` | `public PlayerNotEligibleInfo PlayerNotEligibleInfos { get; }` |
| `ClanPlayerInfos` | `public ClanPlayerInfo ClanPlayerInfos { get; }` |

## 主要方法

### CreateInClanInfo
`public static ClanHomeInfo CreateInClanInfo(ClanInfo clanInfo, ClanPlayerInfo clanPlayerInfos)`

**用途 / Purpose:** 创建一个 `in clan info` 实例或对象。

### CreateCanCreateClanInfo
`public static ClanHomeInfo CreateCanCreateClanInfo()`

**用途 / Purpose:** 创建一个 `can create clan info` 实例或对象。

### CreateCantCreateClanInfo
`public static ClanHomeInfo CreateCantCreateClanInfo(NotEnoughPlayersInfo notEnoughPlayersInfo, PlayerNotEligibleInfo playerNotEligibleInfos)`

**用途 / Purpose:** 创建一个 `cant create clan info` 实例或对象。

### CreateInvalidStateClanInfo
`public static ClanHomeInfo CreateInvalidStateClanInfo()`

**用途 / Purpose:** 创建一个 `invalid state clan info` 实例或对象。

## 使用示例

```csharp
ClanHomeInfo.CreateInClanInfo(clanInfo, clanPlayerInfos);
```

## 参见

- [完整类目录](../catalog)
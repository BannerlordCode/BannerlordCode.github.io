<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanHomeInfo`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanHomeInfo

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class ClanHomeInfo`
**领域:** mission-ext

## 概述

`ClanHomeInfo` 位于 `TaleWorlds.MountAndBlade.Diamond`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
ClanHomeInfo.CreateInClanInfo(clanInfo, clanPlayerInfos);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

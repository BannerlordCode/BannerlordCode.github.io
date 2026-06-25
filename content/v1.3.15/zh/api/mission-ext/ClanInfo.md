---
title: "ClanInfo"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanInfo`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanInfo

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class ClanInfo`
**领域:** mission-ext

## 概述

`ClanInfo` 位于 `TaleWorlds.MountAndBlade.Diamond`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClanId` | `public Guid ClanId { get; }` |
| `Name` | `public string Name { get; }` |
| `Tag` | `public string Tag { get; }` |
| `Faction` | `public string Faction { get; }` |
| `Sigil` | `public string Sigil { get; }` |
| `InformationText` | `public string InformationText { get; }` |
| `Players` | `public ClanPlayer Players { get; }` |
| `Announcements` | `public ClanAnnouncement Announcements { get; }` |

## 主要方法

### CreateUnavailableClanInfo
`public static ClanInfo CreateUnavailableClanInfo()`

**用途 / Purpose:** 创建一个 `unavailable clan info` 实例或对象。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
ClanInfo.CreateUnavailableClanInfo();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

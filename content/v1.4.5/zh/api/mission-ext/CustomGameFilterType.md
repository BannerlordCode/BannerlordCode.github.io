---
title: "CustomGameFilterType"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomGameFilterType`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomGameFilterType

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**模块:** TaleWorlds.MountAndBlade
**类型:** `public enum CustomGameFilterType`
**领域:** mission-ext

## 概述

`CustomGameFilterType` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `Name` |
| `NotFull` |
| `HasPlayers` |
| `HasPasswordProtection` |
| `IsOfficial` |
| `ModuleCompatible` |

## 使用示例

```csharp
CustomGameFilterType example = CustomGameFilterType.Name;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

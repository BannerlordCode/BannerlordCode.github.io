---
title: "MultiplayerMissionViews"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerMissionViews`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerMissionViews

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class MultiplayerMissionViews`
**领域:** mission-ext

## 概述

`MultiplayerMissionViews` 位于 `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenTeamDeathmatchMission
`public static MissionView OpenTeamDeathmatchMission(Mission mission)`

**用途 / Purpose:** 处理 `open team deathmatch mission` 相关逻辑。

### OpenDuelMission
`public static MissionView OpenDuelMission(Mission mission)`

**用途 / Purpose:** 处理 `open duel mission` 相关逻辑。

### OpenSiegeMission
`public static MissionView OpenSiegeMission(Mission mission)`

**用途 / Purpose:** 处理 `open siege mission` 相关逻辑。

### OpenBattle
`public static MissionView OpenBattle(Mission mission)`

**用途 / Purpose:** 处理 `open battle` 相关逻辑。

### OpenCaptain
`public static MissionView OpenCaptain(Mission mission)`

**用途 / Purpose:** 处理 `open captain` 相关逻辑。

### OpenSkirmish
`public static MissionView OpenSkirmish(Mission mission)`

**用途 / Purpose:** 处理 `open skirmish` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MultiplayerMissionViews.OpenTeamDeathmatchMission(mission);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

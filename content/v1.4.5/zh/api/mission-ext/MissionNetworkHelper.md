---
title: "MissionNetworkHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionNetworkHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionNetworkHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionNetworkHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

## 概述

`MissionNetworkHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MissionNetworkHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAgentFromIndex
`public static Agent GetAgentFromIndex(int agentIndex, bool canBeNull = false)`

**用途 / Purpose:** 获取 `agent from index` 的当前值。

### GetMBTeamFromTeamIndex
`public static MBTeam GetMBTeamFromTeamIndex(int teamIndex)`

**用途 / Purpose:** 获取 `m b team from team index` 的当前值。

### GetTeamFromTeamIndex
`public static Team GetTeamFromTeamIndex(int teamIndex)`

**用途 / Purpose:** 获取 `team from team index` 的当前值。

### GetMissionObjectFromMissionObjectId
`public static MissionObject GetMissionObjectFromMissionObjectId(MissionObjectId missionObjectId)`

**用途 / Purpose:** 获取 `mission object from mission object id` 的当前值。

### GetCombatLogDataForCombatLogNetworkMessage
`public static CombatLogData GetCombatLogDataForCombatLogNetworkMessage(CombatLogNetworkMessage message)`

**用途 / Purpose:** 获取 `combat log data for combat log network message` 的当前值。

## 使用示例

```csharp
MissionNetworkHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)
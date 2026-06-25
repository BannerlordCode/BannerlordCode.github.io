---
title: "MissionNetworkHelper"
description: "MissionNetworkHelper 的自动生成类参考。"
---
# MissionNetworkHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionNetworkHelper`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

## 概述

`MissionNetworkHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MissionNetworkHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAgentFromIndex
`public static Agent GetAgentFromIndex(int agentIndex, bool canBeNull = false)`

**用途 / Purpose:** 读取并返回当前对象中 agent from index 的结果。

```csharp
// 静态调用，不需要实例
MissionNetworkHelper.GetAgentFromIndex(0, false);
```

### GetMBTeamFromTeamIndex
`public static MBTeam GetMBTeamFromTeamIndex(int teamIndex)`

**用途 / Purpose:** 读取并返回当前对象中 m b team from team index 的结果。

```csharp
// 静态调用，不需要实例
MissionNetworkHelper.GetMBTeamFromTeamIndex(0);
```

### GetTeamFromTeamIndex
`public static Team GetTeamFromTeamIndex(int teamIndex)`

**用途 / Purpose:** 读取并返回当前对象中 team from team index 的结果。

```csharp
// 静态调用，不需要实例
MissionNetworkHelper.GetTeamFromTeamIndex(0);
```

### GetMissionObjectFromMissionObjectId
`public static MissionObject GetMissionObjectFromMissionObjectId(MissionObjectId missionObjectId)`

**用途 / Purpose:** 读取并返回当前对象中 mission object from mission object id 的结果。

```csharp
// 静态调用，不需要实例
MissionNetworkHelper.GetMissionObjectFromMissionObjectId(missionObjectId);
```

### GetCombatLogDataForCombatLogNetworkMessage
`public static CombatLogData GetCombatLogDataForCombatLogNetworkMessage(CombatLogNetworkMessage message)`

**用途 / Purpose:** 读取并返回当前对象中 combat log data for combat log network message 的结果。

```csharp
// 静态调用，不需要实例
MissionNetworkHelper.GetCombatLogDataForCombatLogNetworkMessage(message);
```

## 使用示例

```csharp
MissionNetworkHelper.Initialize();
```

## 参见

- [本区域目录](../)
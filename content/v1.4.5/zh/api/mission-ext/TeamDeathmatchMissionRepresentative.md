---
title: "TeamDeathmatchMissionRepresentative"
description: "TeamDeathmatchMissionRepresentative 的自动生成类参考。"
---
# TeamDeathmatchMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamDeathmatchMissionRepresentative : MissionRepresentativeBase`
**Base:** `MissionRepresentativeBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.MissionRepresentatives/TeamDeathmatchMissionRepresentative.cs`

## 概述

`TeamDeathmatchMissionRepresentative` 位于 `TaleWorlds.MountAndBlade.MissionRepresentatives`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.MissionRepresentatives` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnAgentSpawned
`public override void OnAgentSpawned()`

**用途 / Purpose:** 在 「agent spawned」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TeamDeathmatchMissionRepresentative 实例
TeamDeathmatchMissionRepresentative teamDeathmatchMissionRepresentative = ...;
teamDeathmatchMissionRepresentative.OnAgentSpawned();
```

### GetGoldGainsFromKillDataAndUpdateFlags
`public int GetGoldGainsFromKillDataAndUpdateFlags(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isRanged, bool isFriendly)`

**用途 / Purpose:** 读取并返回当前对象中 「gold gains from kill data and update flags」 的结果。

```csharp
// 先通过子系统 API 拿到 TeamDeathmatchMissionRepresentative 实例
TeamDeathmatchMissionRepresentative teamDeathmatchMissionRepresentative = ...;
var result = teamDeathmatchMissionRepresentative.GetGoldGainsFromKillDataAndUpdateFlags(killerPerkHandler, assistingHitterPerkHandler, victimClass, false, false, false);
```

### GetGoldGainsFromAllyDeathReward
`public int GetGoldGainsFromAllyDeathReward(int baseAmount)`

**用途 / Purpose:** 读取并返回当前对象中 「gold gains from ally death reward」 的结果。

```csharp
// 先通过子系统 API 拿到 TeamDeathmatchMissionRepresentative 实例
TeamDeathmatchMissionRepresentative teamDeathmatchMissionRepresentative = ...;
var result = teamDeathmatchMissionRepresentative.GetGoldGainsFromAllyDeathReward(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TeamDeathmatchMissionRepresentative teamDeathmatchMissionRepresentative = ...;
teamDeathmatchMissionRepresentative.OnAgentSpawned();
```

## 参见

- [本区域目录](../)
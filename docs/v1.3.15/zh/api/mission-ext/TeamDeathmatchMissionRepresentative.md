<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeamDeathmatchMissionRepresentative`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeamDeathmatchMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamDeathmatchMissionRepresentative : MissionRepresentativeBase`
**Base:** `MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/TeamDeathmatchMissionRepresentative.cs`

## 概述

`TeamDeathmatchMissionRepresentative` 位于 `TaleWorlds.MountAndBlade.MissionRepresentatives`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.MissionRepresentatives` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnAgentSpawned
`public override void OnAgentSpawned()`

**用途 / Purpose:** 当 `agent spawned` 事件触发时调用此方法。

### GetGoldGainsFromKillDataAndUpdateFlags
`public int GetGoldGainsFromKillDataAndUpdateFlags(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isRanged, bool isFriendly)`

**用途 / Purpose:** 获取 `gold gains from kill data and update flags` 的当前值。

### GetGoldGainsFromAllyDeathReward
`public int GetGoldGainsFromAllyDeathReward(int baseAmount)`

**用途 / Purpose:** 获取 `gold gains from ally death reward` 的当前值。

## 使用示例

```csharp
var value = new TeamDeathmatchMissionRepresentative();
value.OnAgentSpawned();
```

## 参见

- [完整类目录](../catalog)
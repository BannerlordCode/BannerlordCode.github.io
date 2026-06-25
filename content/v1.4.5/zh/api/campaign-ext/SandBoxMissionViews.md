---
title: "SandBoxMissionViews"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxMissionViews`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxMissionViews

**命名空间:** SandBox.View.Missions
**模块:** SandBox.View
**类型:** `public class SandBoxMissionViews`
**领域:** campaign-ext

## 概述

`SandBoxMissionViews` 位于 `SandBox.View.Missions`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.View.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenTownCenterMission
`public static MissionView OpenTownCenterMission(Mission mission)`

**用途 / Purpose:** 处理 `open town center mission` 相关逻辑。

### OpenFacialAnimationTest
`public static MissionView OpenFacialAnimationTest(Mission mission)`

**用途 / Purpose:** 处理 `open facial animation test` 相关逻辑。

### OpenTavernMission
`public static MissionView OpenTavernMission(Mission mission)`

**用途 / Purpose:** 处理 `open tavern mission` 相关逻辑。

### OpenPrisonBreakMission
`public static MissionView OpenPrisonBreakMission(Mission mission)`

**用途 / Purpose:** 处理 `open prison break mission` 相关逻辑。

### OpenVillageMission
`public static MissionView OpenVillageMission(Mission mission)`

**用途 / Purpose:** 处理 `open village mission` 相关逻辑。

### OpenRetirementMission
`public static MissionView OpenRetirementMission(Mission mission)`

**用途 / Purpose:** 处理 `open retirement mission` 相关逻辑。

### OpenArenaStartMission
`public static MissionView OpenArenaStartMission(Mission mission)`

**用途 / Purpose:** 处理 `open arena start mission` 相关逻辑。

### OpenArenaDuelMission
`public static MissionView OpenArenaDuelMission(Mission mission)`

**用途 / Purpose:** 处理 `open arena duel mission` 相关逻辑。

### OpenTownMerchantMission
`public static MissionView OpenTownMerchantMission(Mission mission)`

**用途 / Purpose:** 处理 `open town merchant mission` 相关逻辑。

### OpenAlleyMission
`public static MissionView OpenAlleyMission(Mission mission)`

**用途 / Purpose:** 处理 `open alley mission` 相关逻辑。

### OpenSneakTeam3Mission
`public static MissionView OpenSneakTeam3Mission(Mission mission)`

**用途 / Purpose:** 处理 `open sneak team3 mission` 相关逻辑。

### OpenSimpleMountedPlayerMission
`public static MissionView OpenSimpleMountedPlayerMission(Mission mission)`

**用途 / Purpose:** 处理 `open simple mounted player mission` 相关逻辑。

### OpenBattleMission
`public static MissionView OpenBattleMission(Mission mission)`

**用途 / Purpose:** 处理 `open battle mission` 相关逻辑。

### OpenAlleyFightMission
`public static MissionView OpenAlleyFightMission(Mission mission)`

**用途 / Purpose:** 处理 `open alley fight mission` 相关逻辑。

### OpenHideoutBattleMission
`public static MissionView OpenHideoutBattleMission(Mission mission)`

**用途 / Purpose:** 处理 `open hideout battle mission` 相关逻辑。

### OpenHideoutAmbushMission
`public static MissionView OpenHideoutAmbushMission(Mission mission)`

**用途 / Purpose:** 处理 `open hideout ambush mission` 相关逻辑。

### OpenBattleMissionWhileEnteringSettlement
`public static MissionView OpenBattleMissionWhileEnteringSettlement(Mission mission)`

**用途 / Purpose:** 处理 `open battle mission while entering settlement` 相关逻辑。

### OpenCombatMissionWithDialogue
`public static MissionView OpenCombatMissionWithDialogue(Mission mission)`

**用途 / Purpose:** 处理 `open combat mission with dialogue` 相关逻辑。

### OpenTestSiegeEngineMission
`public static MissionView OpenTestSiegeEngineMission(Mission mission)`

**用途 / Purpose:** 处理 `open test siege engine mission` 相关逻辑。

### OpenCustomCameraMission
`public static MissionView OpenCustomCameraMission(Mission mission)`

**用途 / Purpose:** 处理 `open custom camera mission` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
SandBoxMissionViews.OpenTownCenterMission(mission);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)

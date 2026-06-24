<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxMissionViews`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxMissionViews

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class SandBoxMissionViews`
**Base:** 无
**File:** `SandBox.View/Missions/SandBoxMissionViews.cs`

## 概述

`SandBoxMissionViews` 位于 `SandBox.View.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

### OpenAmbushBattleMission
`public static MissionView OpenAmbushBattleMission(Mission mission)`

**用途 / Purpose:** 处理 `open ambush battle mission` 相关逻辑。

### OpenCampMission
`public static MissionView OpenCampMission(Mission mission)`

**用途 / Purpose:** 处理 `open camp mission` 相关逻辑。

### OpenSiegeMissionWithDeployment
`public static MissionView OpenSiegeMissionWithDeployment(Mission mission)`

**用途 / Purpose:** 处理 `open siege mission with deployment` 相关逻辑。

### OpenSiegeMissionNoDeployment
`public static MissionView OpenSiegeMissionNoDeployment(Mission mission)`

**用途 / Purpose:** 处理 `open siege mission no deployment` 相关逻辑。

### OpenSiegeLordsHallFightMission
`public static MissionView OpenSiegeLordsHallFightMission(Mission mission)`

**用途 / Purpose:** 处理 `open siege lords hall fight mission` 相关逻辑。

### OpenSiegeMission
`public static MissionView OpenSiegeMission(Mission mission)`

**用途 / Purpose:** 处理 `open siege mission` 相关逻辑。

### OpenSiegeMissionForTutorial
`public static MissionView OpenSiegeMissionForTutorial(Mission mission)`

**用途 / Purpose:** 处理 `open siege mission for tutorial` 相关逻辑。

### OpenFormationTestMission
`public static MissionView OpenFormationTestMission(Mission mission)`

**用途 / Purpose:** 处理 `open formation test mission` 相关逻辑。

### OpenVillageBattleMission
`public static MissionView OpenVillageBattleMission(Mission mission)`

**用途 / Purpose:** 处理 `open village battle mission` 相关逻辑。

### OpenSettlementTestMission
`public static MissionView OpenSettlementTestMission(Mission mission)`

**用途 / Purpose:** 处理 `open settlement test mission` 相关逻辑。

### OpenEquipmentTestMission
`public static MissionView OpenEquipmentTestMission(Mission mission)`

**用途 / Purpose:** 处理 `open equipment test mission` 相关逻辑。

### OpenFacialAnimTestMission
`public static MissionView OpenFacialAnimTestMission(Mission mission)`

**用途 / Purpose:** 处理 `open facial anim test mission` 相关逻辑。

### OpenEquipItemToolMission
`public static MissionView OpenEquipItemToolMission(Mission mission)`

**用途 / Purpose:** 处理 `open equip item tool mission` 相关逻辑。

### OpenConversationMission
`public static MissionView OpenConversationMission(Mission mission)`

**用途 / Purpose:** 处理 `open conversation mission` 相关逻辑。

### OpenShadowingATargetMission
`public static MissionView OpenShadowingATargetMission(Mission mission)`

**用途 / Purpose:** 处理 `open shadowing a target mission` 相关逻辑。

### OpenDisguiseMission
`public static MissionView OpenDisguiseMission(Mission mission)`

**用途 / Purpose:** 处理 `open disguise mission` 相关逻辑。

## 使用示例

```csharp
SandBoxMissionViews.OpenTownCenterMission(mission);
```

## 参见

- [完整类目录](../catalog)
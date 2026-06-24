<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionReinforcementsHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionReinforcementsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionReinforcementsHelper`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## 概述

`MissionReinforcementsHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MissionReinforcementsHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionStart
`public static void OnMissionStart()`

**用途 / Purpose:** 当 `mission start` 事件触发时调用此方法。

### GetReinforcementAssignments
`public unsafe static List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**用途 / Purpose:** 获取 `reinforcement assignments` 的当前值。

### OnMissionEnd
`public static void OnMissionEnd()`

**用途 / Purpose:** 当 `mission end` 事件触发时调用此方法。

### Compare
`public int Compare(MissionReinforcementsHelper.ReinforcementFormationPriority left, MissionReinforcementsHelper.ReinforcementFormationPriority right)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Initialize
`public void Initialize(Formation formation, uint initTime)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### AddProspectiveTroop
`public void AddProspectiveTroop(FormationClass troopClass)`

**用途 / Purpose:** 向当前集合/状态中添加 `prospective troop`。

### IsInitialized
`public bool IsInitialized(uint initTime)`

**用途 / Purpose:** 处理 `is initialized` 相关逻辑。

### GetPriority
`public MissionReinforcementsHelper.ReinforcementFormationPriority GetPriority(FormationClass troopClass)`

**用途 / Purpose:** 获取 `priority` 的当前值。

## 使用示例

```csharp
MissionReinforcementsHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)
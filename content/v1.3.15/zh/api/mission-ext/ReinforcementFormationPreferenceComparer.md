---
title: "ReinforcementFormationPreferenceComparer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ReinforcementFormationPreferenceComparer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ReinforcementFormationPreferenceComparer

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class ReinforcementFormationPreferenceComparer : IComparer<MissionReinforcementsHelper.ReinforcementFormationPriority>`
**Base:** `IComparer<MissionReinforcementsHelper.ReinforcementFormationPriority>`
**领域:** mission-ext

## 概述

`ReinforcementFormationPreferenceComparer` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
ReinforcementFormationPreferenceComparer.OnMissionStart();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

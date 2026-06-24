<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentComponentExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentComponentExtensions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class AgentComponentExtensions`
**领域:** mission-ext

## 概述

`AgentComponentExtensions` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetMorale
`public static float GetMorale(this Agent agent)`

**用途 / Purpose:** 获取 `morale` 的当前值。

### SetMorale
`public static void SetMorale(this Agent agent, float morale)`

**用途 / Purpose:** 设置 `morale` 的值或状态。

### ChangeMorale
`public static void ChangeMorale(this Agent agent, float delta)`

**用途 / Purpose:** 处理 `change morale` 相关逻辑。

### IsRetreating
`public static bool IsRetreating(this Agent agent, bool isComponentAssured = true)`

**用途 / Purpose:** 处理 `is retreating` 相关逻辑。

### Retreat
`public static void Retreat(this Agent agent, bool useCachingSystem = false)`

**用途 / Purpose:** 处理 `retreat` 相关逻辑。

### StopRetreatingMoraleComponent
`public static void StopRetreatingMoraleComponent(this Agent agent)`

**用途 / Purpose:** 处理 `stop retreating morale component` 相关逻辑。

### SetBehaviorValueSet
`public static void SetBehaviorValueSet(this Agent agent, HumanAIComponent.BehaviorValueSet behaviorValueSet)`

**用途 / Purpose:** 设置 `behavior value set` 的值或状态。

### RefreshBehaviorValues
`public static void RefreshBehaviorValues(this Agent agent, MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)`

**用途 / Purpose:** 刷新 `behavior values` 的显示或缓存。

### SetAIBehaviorValues
`public static void SetAIBehaviorValues(this Agent agent, HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**用途 / Purpose:** 设置 `a i behavior values` 的值或状态。

### AIMoveToGameObjectEnable
`public static void AIMoveToGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)`

**用途 / Purpose:** 处理 `a i move to game object enable` 相关逻辑。

### AIMoveToGameObjectDisable
`public static void AIMoveToGameObjectDisable(this Agent agent)`

**用途 / Purpose:** 处理 `a i move to game object disable` 相关逻辑。

### AIMoveToGameObjectIsEnabled
`public static bool AIMoveToGameObjectIsEnabled(this Agent agent)`

**用途 / Purpose:** 处理 `a i move to game object is enabled` 相关逻辑。

### AIDefendGameObjectEnable
`public static void AIDefendGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment)`

**用途 / Purpose:** 处理 `a i defend game object enable` 相关逻辑。

### AIDefendGameObjectDisable
`public static void AIDefendGameObjectDisable(this Agent agent)`

**用途 / Purpose:** 处理 `a i defend game object disable` 相关逻辑。

### AIDefendGameObjectIsEnabled
`public static bool AIDefendGameObjectIsEnabled(this Agent agent)`

**用途 / Purpose:** 处理 `a i defend game object is enabled` 相关逻辑。

### AIInterestedInAnyGameObject
`public static bool AIInterestedInAnyGameObject(this Agent agent)`

**用途 / Purpose:** 处理 `a i interested in any game object` 相关逻辑。

### AIInterestedInGameObject
`public static bool AIInterestedInGameObject(this Agent agent, UsableMissionObject usableMissionObject)`

**用途 / Purpose:** 处理 `a i interested in game object` 相关逻辑。

### AIUseGameObjectEnable
`public static void AIUseGameObjectEnable(this Agent agent)`

**用途 / Purpose:** 处理 `a i use game object enable` 相关逻辑。

### AIUseGameObjectDisable
`public static void AIUseGameObjectDisable(this Agent agent)`

**用途 / Purpose:** 处理 `a i use game object disable` 相关逻辑。

### AIUseGameObjectIsEnabled
`public static bool AIUseGameObjectIsEnabled(this Agent agent)`

**用途 / Purpose:** 处理 `a i use game object is enabled` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
AgentComponentExtensions.GetMorale(agent);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

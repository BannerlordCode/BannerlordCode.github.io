<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentComponentExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentComponentExtensions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`AgentComponentExtensions` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### GetMorale

```csharp
public static float GetMorale(this Agent agent)
```

### SetMorale

```csharp
public static void SetMorale(this Agent agent, float morale)
```

### ChangeMorale

```csharp
public static void ChangeMorale(this Agent agent, float delta)
```

### IsRetreating

```csharp
public static bool IsRetreating(this Agent agent, bool isComponentAssured = true)
```

### Retreat

```csharp
public static void Retreat(this Agent agent, bool useCachingSystem = false)
```

### StopRetreatingMoraleComponent

```csharp
public static void StopRetreatingMoraleComponent(this Agent agent)
```

### SetBehaviorValueSet

```csharp
public static void SetBehaviorValueSet(this Agent agent, HumanAIComponent.BehaviorValueSet behaviorValueSet)
```

### RefreshBehaviorValues

```csharp
public static void RefreshBehaviorValues(this Agent agent, MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)
```

### SetAIBehaviorValues

```csharp
public static void SetAIBehaviorValues(this Agent agent, HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)
```

### AIMoveToGameObjectEnable

```csharp
public static void AIMoveToGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)
```

### AIMoveToGameObjectDisable

```csharp
public static void AIMoveToGameObjectDisable(this Agent agent)
```

### AIMoveToGameObjectIsEnabled

```csharp
public static bool AIMoveToGameObjectIsEnabled(this Agent agent)
```

### AIDefendGameObjectEnable

```csharp
public static void AIDefendGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment)
```

### AIDefendGameObjectDisable

```csharp
public static void AIDefendGameObjectDisable(this Agent agent)
```

### AIDefendGameObjectIsEnabled

```csharp
public static bool AIDefendGameObjectIsEnabled(this Agent agent)
```

### AIInterestedInAnyGameObject

```csharp
public static bool AIInterestedInAnyGameObject(this Agent agent)
```

### AIInterestedInGameObject

```csharp
public static bool AIInterestedInGameObject(this Agent agent, UsableMissionObject usableMissionObject)
```

### AIUseGameObjectEnable

```csharp
public static void AIUseGameObjectEnable(this Agent agent)
```

### AIUseGameObjectDisable

```csharp
public static void AIUseGameObjectDisable(this Agent agent)
```

### AIUseGameObjectIsEnabled

```csharp
public static bool AIUseGameObjectIsEnabled(this Agent agent)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
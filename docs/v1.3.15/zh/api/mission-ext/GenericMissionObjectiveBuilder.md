<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GenericMissionObjectiveBuilder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenericMissionObjectiveBuilder

**命名空间:** TaleWorlds.MountAndBlade.Missions.Objectives
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`GenericMissionObjectiveBuilder` 是 `TaleWorlds.MountAndBlade.Missions.Objectives` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `UniqueId` | `public abstract string UniqueId { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `Description` | `public abstract TextObject Description { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsStarted` | `public bool IsStarted { get; }` |
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `Mission` | `public Mission Mission { get; }` |
| `ObjectiveGiver` | `public BasicCharacterObject ObjectiveGiver { get; }` |


## 主要方法

### GetCurrentProgress

```csharp
public virtual MissionObjectiveProgressInfo GetCurrentProgress()
```

### SetObjectiveGiver

```csharp
public void SetObjectiveGiver(BasicCharacterObject objectiveGiver)
```

### AddTarget

```csharp
public void AddTarget(MissionObjectiveTarget target)
```

### RemoveTarget

```csharp
public void RemoveTarget(MissionObjectiveTarget target)
```

### ClearTargets

```csharp
public void ClearTargets()
```

### GetTargetsCopy

```csharp
public MBReadOnlyList<MissionObjectiveTarget> GetTargetsCopy()
```

### CreateGenericObjectiveBuilder

```csharp
public static MissionObjective.GenericMissionObjectiveBuilder CreateGenericObjectiveBuilder(Mission mission, string id, TextObject name = null, TextObject description = null)
```

### SetName

```csharp
public MissionObjective.GenericMissionObjectiveBuilder SetName(TextObject name)
```

### SetDescription

```csharp
public MissionObjective.GenericMissionObjectiveBuilder SetDescription(TextObject description)
```

### SetObjectiveGiver

```csharp
public MissionObjective.GenericMissionObjectiveBuilder SetObjectiveGiver(BasicCharacterObject objectiveGiver)
```

### SetInitialTargets

```csharp
public MissionObjective.GenericMissionObjectiveBuilder SetInitialTargets(params MissionObjectiveTarget targets)
```

### SetIsActivationRequirementsMetCallback

```csharp
public MissionObjective.GenericMissionObjectiveBuilder SetIsActivationRequirementsMetCallback(Func<MissionObjective, bool> callback)
```

### SetIsCompletionRequirementsMetCallback

```csharp
public MissionObjective.GenericMissionObjectiveBuilder SetIsCompletionRequirementsMetCallback(Func<MissionObjective, bool> callback)
```

### SetOnStartCallback

```csharp
public MissionObjective.GenericMissionObjectiveBuilder SetOnStartCallback(Action<MissionObjective> callback)
```

### SetOnCompleteCallback

```csharp
public MissionObjective.GenericMissionObjectiveBuilder SetOnCompleteCallback(Action<MissionObjective> callback)
```

### SetOnTickCallback

```csharp
public MissionObjective.GenericMissionObjectiveBuilder SetOnTickCallback(Action<MissionObjective, float> callback)
```

### SetProgressCallback

```csharp
public MissionObjective.GenericMissionObjectiveBuilder SetProgressCallback(Func<MissionObjective, MissionObjectiveProgressInfo> callback)
```

### Build

```csharp
public MissionObjective Build()
```

### SetIsActiveCallback

```csharp
public MissionObjective.GenericMissionObjectiveTargetBuilder<T> SetIsActiveCallback(Func<T, bool> callback)
```

### SetGetGlobalPositionCallback

```csharp
public MissionObjective.GenericMissionObjectiveTargetBuilder<T> SetGetGlobalPositionCallback(Func<T, Vec3> callback)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericMissionObjectiveBuilder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenericMissionObjectiveBuilder

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `GenericMissionObjectiveBuilder` is a struct in the `TaleWorlds.MountAndBlade.Missions.Objectives` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
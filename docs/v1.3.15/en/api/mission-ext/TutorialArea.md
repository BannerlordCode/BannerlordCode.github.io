<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialArea`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialArea

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `TutorialArea` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TrainingIconsReadOnly` | `public MBReadOnlyList<TrainingIcon> TrainingIconsReadOnly { get; }` |
| `TypeOfTraining` | `public TutorialArea.TrainingType TypeOfTraining { get; }` |


## Key Methods

### AfterMissionStart

```csharp
public override void AfterMissionStart()
```

### MarkTrainingIcons

```csharp
public void MarkTrainingIcons(bool mark)
```

### GetActiveTrainingIcon

```csharp
public TrainingIcon GetActiveTrainingIcon()
```

### GetIndexFromTag

```csharp
public int GetIndexFromTag(string tag)
```

### GetSubTrainingTags

```csharp
public List<string> GetSubTrainingTags()
```

### ActivateTaggedWeapons

```csharp
public void ActivateTaggedWeapons(int index)
```

### EquipWeaponsToPlayer

```csharp
public void EquipWeaponsToPlayer(int index)
```

### DeactivateAllWeapons

```csharp
public void DeactivateAllWeapons(bool resetDestructibles)
```

### ActivateBoundaries

```csharp
public void ActivateBoundaries()
```

### HideBoundaries

```csharp
public void HideBoundaries()
```

### GetBreakablesCount

```csharp
public int GetBreakablesCount(int index)
```

### MakeDestructible

```csharp
public void MakeDestructible(int index)
```

### MarkAllTargets

```csharp
public void MarkAllTargets(int index, bool mark)
```

### ResetMarkingTargetTimers

```csharp
public void ResetMarkingTargetTimers(int index)
```

### MakeInDestructible

```csharp
public void MakeInDestructible(int index)
```

### AllBreakablesAreBroken

```csharp
public bool AllBreakablesAreBroken(int index)
```

### GetBrokenBreakableCount

```csharp
public int GetBrokenBreakableCount(int index)
```

### GetUnbrokenBreakableCount

```csharp
public int GetUnbrokenBreakableCount(int index)
```

### ResetBreakables

```csharp
public void ResetBreakables(int index, bool makeIndestructible = true)
```

### HasMainAgentPickedAll

```csharp
public bool HasMainAgentPickedAll(int index)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
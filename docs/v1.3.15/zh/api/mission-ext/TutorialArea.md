<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialArea`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialArea

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`TutorialArea` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TrainingIconsReadOnly` | `public MBReadOnlyList<TrainingIcon> TrainingIconsReadOnly { get; }` |
| `TypeOfTraining` | `public TutorialArea.TrainingType TypeOfTraining { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
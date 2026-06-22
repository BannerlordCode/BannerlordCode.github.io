<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBActionSet`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBActionSet

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MBActionSet` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |


## Key Methods

### Equals

```csharp
public bool Equals(MBActionSet a)
```

### Equals

```csharp
public bool Equals(int index)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### GetName

```csharp
public string GetName()
```

### GetSkeletonName

```csharp
public string GetSkeletonName()
```

### GetAnimationName

```csharp
public string GetAnimationName(in ActionIndexCache actionCode)
```

### AreActionsAlternatives

```csharp
public bool AreActionsAlternatives(in ActionIndexCache actionCode1, in ActionIndexCache actionCode2)
```

### GetNumberOfActionSets

```csharp
public static int GetNumberOfActionSets()
```

### GetNumberOfMonsterUsageSets

```csharp
public static int GetNumberOfMonsterUsageSets()
```

### GetActionSet

```csharp
public static MBActionSet GetActionSet(string objectID)
```

### GetActionSetWithIndex

```csharp
public static MBActionSet GetActionSetWithIndex(int index)
```

### GetBoneIndexWithId

```csharp
public static sbyte GetBoneIndexWithId(string actionSetId, string boneId)
```

### GetBoneHasParentBone

```csharp
public static bool GetBoneHasParentBone(string actionSetId, sbyte boneIndex)
```

### GetActionDisplacementVector

```csharp
public static Vec3 GetActionDisplacementVector(MBActionSet actionSet, in ActionIndexCache actionIndexCache)
```

### GetActionAnimationFlags

```csharp
public static AnimFlags GetActionAnimationFlags(MBActionSet actionSet, in ActionIndexCache actionIndexCache)
```

### CheckActionAnimationClipExists

```csharp
public static bool CheckActionAnimationClipExists(MBActionSet actionSet, in ActionIndexCache actionIndexCache)
```

### GetAnimationIndexOfAction

```csharp
public static int GetAnimationIndexOfAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)
```

### GetActionAnimationName

```csharp
public static string GetActionAnimationName(MBActionSet actionSet, in ActionIndexCache actionIndexCache)
```

### GetActionAnimationDuration

```csharp
public static float GetActionAnimationDuration(MBActionSet actionSet, in ActionIndexCache actionIndexCache)
```

### GetActionAnimationContinueToAction

```csharp
public static ActionIndexCache GetActionAnimationContinueToAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
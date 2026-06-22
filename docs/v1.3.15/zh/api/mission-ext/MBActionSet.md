<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBActionSet`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBActionSet

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MBActionSet` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |


## 主要方法

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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
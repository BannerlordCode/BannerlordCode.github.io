<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBAnimation`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBAnimation

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MBAnimation` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要方法

### Equals

```csharp
public bool Equals(MBAnimation a)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### GetAnimationIndexWithName

```csharp
public static int GetAnimationIndexWithName(string animationName)
```

### GetActionType

```csharp
public static Agent.ActionCodeType GetActionType(ActionIndexCache actionIndex)
```

### PrefetchAnimationClip

```csharp
public static void PrefetchAnimationClip(MBActionSet actionSet, ActionIndexCache actionIndexCache)
```

### GetAnimationDuration

```csharp
public static float GetAnimationDuration(string animationName)
```

### GetAnimationDuration

```csharp
public static float GetAnimationDuration(int animationIndex)
```

### GetAnimationParameter1

```csharp
public static float GetAnimationParameter1(string animationName)
```

### GetAnimationParameter1

```csharp
public static float GetAnimationParameter1(int animationIndex)
```

### GetAnimationParameter2

```csharp
public static float GetAnimationParameter2(string animationName)
```

### GetAnimationParameter2

```csharp
public static float GetAnimationParameter2(int animationIndex)
```

### GetAnimationParameter3

```csharp
public static float GetAnimationParameter3(string animationName)
```

### GetAnimationBlendInPeriod

```csharp
public static float GetAnimationBlendInPeriod(string animationName)
```

### GetAnimationBlendInPeriod

```csharp
public static float GetAnimationBlendInPeriod(int animationIndex)
```

### GetAnimationBlendsWithActionIndex

```csharp
public static int GetAnimationBlendsWithActionIndex(string animationName)
```

### GetAnimationBlendsWithActionIndex

```csharp
public static float GetAnimationBlendsWithActionIndex(int animationIndex)
```

### GetAnimationDisplacementAtProgress

```csharp
public static Vec3 GetAnimationDisplacementAtProgress(string animationName, float progress)
```

### GetAnimationDisplacementAtProgress

```csharp
public static Vec3 GetAnimationDisplacementAtProgress(int animationIndex, float progress)
```

### GetActionCodeWithName

```csharp
public static int GetActionCodeWithName(string name)
```

### GetNumActionCodes

```csharp
public static int GetNumActionCodes()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
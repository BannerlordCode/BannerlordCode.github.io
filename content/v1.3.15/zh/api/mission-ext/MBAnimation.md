---
title: "MBAnimation"
description: "MBAnimation 的自动生成类参考。"
---
# MBAnimation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBAnimation`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBAnimation.cs`

## 概述

`MBAnimation` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Equals
`public bool Equals(MBAnimation a)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MBAnimation 实例
MBAnimation mBAnimation = ...;
var result = mBAnimation.Equals(a);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MBAnimation 实例
MBAnimation mBAnimation = ...;
var result = mBAnimation.GetHashCode();
```

### GetAnimationIndexWithName
`public static int GetAnimationIndexWithName(string animationName)`

**用途 / Purpose:** 读取并返回当前对象中 「animation index with name」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationIndexWithName("example");
```

### GetActionType
`public static Agent.ActionCodeType GetActionType(ActionIndexCache actionIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「action type」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetActionType(actionIndex);
```

### PrefetchAnimationClip
`public static void PrefetchAnimationClip(MBActionSet actionSet, ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 处理与 「prefetch animation clip」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBAnimation.PrefetchAnimationClip(actionSet, actionIndexCache);
```

### GetAnimationDuration
`public static float GetAnimationDuration(string animationName)`

**用途 / Purpose:** 读取并返回当前对象中 「animation duration」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationDuration("example");
```

### GetAnimationDuration
`public static float GetAnimationDuration(int animationIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「animation duration」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationDuration(0);
```

### GetAnimationParameter1
`public static float GetAnimationParameter1(string animationName)`

**用途 / Purpose:** 读取并返回当前对象中 「animation parameter1」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationParameter1("example");
```

### GetAnimationParameter1
`public static float GetAnimationParameter1(int animationIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「animation parameter1」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationParameter1(0);
```

### GetAnimationParameter2
`public static float GetAnimationParameter2(string animationName)`

**用途 / Purpose:** 读取并返回当前对象中 「animation parameter2」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationParameter2("example");
```

### GetAnimationParameter2
`public static float GetAnimationParameter2(int animationIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「animation parameter2」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationParameter2(0);
```

### GetAnimationParameter3
`public static float GetAnimationParameter3(string animationName)`

**用途 / Purpose:** 读取并返回当前对象中 「animation parameter3」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationParameter3("example");
```

### GetAnimationBlendInPeriod
`public static float GetAnimationBlendInPeriod(string animationName)`

**用途 / Purpose:** 读取并返回当前对象中 「animation blend in period」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationBlendInPeriod("example");
```

### GetAnimationBlendInPeriod
`public static float GetAnimationBlendInPeriod(int animationIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「animation blend in period」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationBlendInPeriod(0);
```

### GetAnimationBlendsWithActionIndex
`public static int GetAnimationBlendsWithActionIndex(string animationName)`

**用途 / Purpose:** 读取并返回当前对象中 「animation blends with action index」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationBlendsWithActionIndex("example");
```

### GetAnimationBlendsWithActionIndex
`public static float GetAnimationBlendsWithActionIndex(int animationIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「animation blends with action index」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationBlendsWithActionIndex(0);
```

### GetAnimationDisplacementAtProgress
`public static Vec3 GetAnimationDisplacementAtProgress(string animationName, float progress)`

**用途 / Purpose:** 读取并返回当前对象中 「animation displacement at progress」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationDisplacementAtProgress("example", 0);
```

### GetAnimationDisplacementAtProgress
`public static Vec3 GetAnimationDisplacementAtProgress(int animationIndex, float progress)`

**用途 / Purpose:** 读取并返回当前对象中 「animation displacement at progress」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetAnimationDisplacementAtProgress(0, 0);
```

### GetActionCodeWithName
`public static int GetActionCodeWithName(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「action code with name」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetActionCodeWithName("example");
```

### GetNumActionCodes
`public static int GetNumActionCodes()`

**用途 / Purpose:** 读取并返回当前对象中 「num action codes」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetNumActionCodes();
```

### GetNumAnimations
`public static int GetNumAnimations()`

**用途 / Purpose:** 读取并返回当前对象中 「num animations」 的结果。

```csharp
// 静态调用，不需要实例
MBAnimation.GetNumAnimations();
```

### IsAnyAnimationLoadingFromDisk
`public static bool IsAnyAnimationLoadingFromDisk()`

**用途 / Purpose:** 判断当前对象是否处于 「any animation loading from disk」 状态或条件。

```csharp
// 静态调用，不需要实例
MBAnimation.IsAnyAnimationLoadingFromDisk();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBAnimation mBAnimation = ...;
mBAnimation.Equals(a);
```

## 参见

- [本区域目录](../)
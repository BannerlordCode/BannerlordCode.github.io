<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBAnimation`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### GetAnimationIndexWithName
`public static int GetAnimationIndexWithName(string animationName)`

**用途 / Purpose:** 获取 `animation index with name` 的当前值。

### GetActionType
`public static Agent.ActionCodeType GetActionType(ActionIndexCache actionIndex)`

**用途 / Purpose:** 获取 `action type` 的当前值。

### PrefetchAnimationClip
`public static void PrefetchAnimationClip(MBActionSet actionSet, ActionIndexCache actionIndexCache)`

**用途 / Purpose:** 处理 `prefetch animation clip` 相关逻辑。

### GetAnimationDuration
`public static float GetAnimationDuration(string animationName)`

**用途 / Purpose:** 获取 `animation duration` 的当前值。

### GetAnimationDuration
`public static float GetAnimationDuration(int animationIndex)`

**用途 / Purpose:** 获取 `animation duration` 的当前值。

### GetAnimationParameter1
`public static float GetAnimationParameter1(string animationName)`

**用途 / Purpose:** 获取 `animation parameter1` 的当前值。

### GetAnimationParameter1
`public static float GetAnimationParameter1(int animationIndex)`

**用途 / Purpose:** 获取 `animation parameter1` 的当前值。

### GetAnimationParameter2
`public static float GetAnimationParameter2(string animationName)`

**用途 / Purpose:** 获取 `animation parameter2` 的当前值。

### GetAnimationParameter2
`public static float GetAnimationParameter2(int animationIndex)`

**用途 / Purpose:** 获取 `animation parameter2` 的当前值。

### GetAnimationParameter3
`public static float GetAnimationParameter3(string animationName)`

**用途 / Purpose:** 获取 `animation parameter3` 的当前值。

### GetAnimationBlendInPeriod
`public static float GetAnimationBlendInPeriod(string animationName)`

**用途 / Purpose:** 获取 `animation blend in period` 的当前值。

### GetAnimationBlendInPeriod
`public static float GetAnimationBlendInPeriod(int animationIndex)`

**用途 / Purpose:** 获取 `animation blend in period` 的当前值。

### GetAnimationBlendsWithActionIndex
`public static int GetAnimationBlendsWithActionIndex(string animationName)`

**用途 / Purpose:** 获取 `animation blends with action index` 的当前值。

### GetAnimationBlendsWithActionIndex
`public static float GetAnimationBlendsWithActionIndex(int animationIndex)`

**用途 / Purpose:** 获取 `animation blends with action index` 的当前值。

### GetAnimationDisplacementAtProgress
`public static Vec3 GetAnimationDisplacementAtProgress(string animationName, float progress)`

**用途 / Purpose:** 获取 `animation displacement at progress` 的当前值。

### GetAnimationDisplacementAtProgress
`public static Vec3 GetAnimationDisplacementAtProgress(int animationIndex, float progress)`

**用途 / Purpose:** 获取 `animation displacement at progress` 的当前值。

### GetActionCodeWithName
`public static int GetActionCodeWithName(string name)`

**用途 / Purpose:** 获取 `action code with name` 的当前值。

### GetNumActionCodes
`public static int GetNumActionCodes()`

**用途 / Purpose:** 获取 `num action codes` 的当前值。

### GetNumAnimations
`public static int GetNumAnimations()`

**用途 / Purpose:** 获取 `num animations` 的当前值。

### IsAnyAnimationLoadingFromDisk
`public static bool IsAnyAnimationLoadingFromDisk()`

**用途 / Purpose:** 处理 `is any animation loading from disk` 相关逻辑。

## 使用示例

```csharp
var value = new MBAnimation();
value.Equals(a);
```

## 参见

- [完整类目录](../catalog)
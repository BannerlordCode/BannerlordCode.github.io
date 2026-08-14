---
title: "MonsterExtensions"
description: "MonsterExtensions 的自动生成类参考。"
---
# MonsterExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MonsterExtensions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MonsterExtensions.cs`

## 概述

`MonsterExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FillAnimationSystemData
`public static AnimationSystemData FillAnimationSystemData(this Monster monster, float stepSize, bool hasClippingPlane, bool isFemale)`

**用途 / Purpose:** 调用 FillAnimationSystemData 对应的操作。

```csharp
// 静态调用，不需要实例
MonsterExtensions.FillAnimationSystemData(monster, 0, false, false);
```

### FillAnimationSystemData
`public static AnimationSystemData FillAnimationSystemData(this Monster monster, MBActionSet actionSet, float stepSize, bool hasClippingPlane)`

**用途 / Purpose:** 调用 FillAnimationSystemData 对应的操作。

```csharp
// 静态调用，不需要实例
MonsterExtensions.FillAnimationSystemData(monster, actionSet, 0, false);
```

### FillCapsuleData
`public static AgentCapsuleData FillCapsuleData(this Monster monster)`

**用途 / Purpose:** 调用 FillCapsuleData 对应的操作。

```csharp
// 静态调用，不需要实例
MonsterExtensions.FillCapsuleData(monster);
```

### FillSpawnData
`public static AgentSpawnData FillSpawnData(this Monster monster, ItemObject mountItem)`

**用途 / Purpose:** 调用 FillSpawnData 对应的操作。

```csharp
// 静态调用，不需要实例
MonsterExtensions.FillSpawnData(monster, mountItem);
```

## 使用示例

```csharp
MonsterExtensions.FillAnimationSystemData(monster, 0, false, false);
```

## 参见

- [本区域目录](../)
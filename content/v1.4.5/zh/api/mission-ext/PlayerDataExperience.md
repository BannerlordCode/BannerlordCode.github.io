---
title: "PlayerDataExperience"
description: "PlayerDataExperience 的自动生成类参考。"
---
# PlayerDataExperience

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct PlayerDataExperience`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerDataExperience.cs`

## 概述

`PlayerDataExperience` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Experience` | `public int Experience { get; }` |

## 主要方法

### CalculateLevelFromExperience
`public static int CalculateLevelFromExperience(int experience)`

**用途 / Purpose:** 计算「level from experience」的当前值或结果。

```csharp
// 静态调用，不需要实例
PlayerDataExperience.CalculateLevelFromExperience(0);
```

### CalculateExperienceFromLevel
`public static int CalculateExperienceFromLevel(int level)`

**用途 / Purpose:** 计算「experience from level」的当前值或结果。

```csharp
// 静态调用，不需要实例
PlayerDataExperience.CalculateExperienceFromLevel(0);
```

### ExperienceRequiredForLevel
`public static int ExperienceRequiredForLevel(int level)`

**用途 / Purpose:** 处理与 「experience required for level」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerDataExperience.ExperienceRequiredForLevel(0);
```

## 使用示例

```csharp
PlayerDataExperience.CalculateLevelFromExperience(0);
```

## 参见

- [本区域目录](../)
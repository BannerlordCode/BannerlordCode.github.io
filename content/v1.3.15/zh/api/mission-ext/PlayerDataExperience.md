---
title: "PlayerDataExperience"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerDataExperience`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerDataExperience

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct PlayerDataExperience`
**领域:** mission-ext

## 概述

`PlayerDataExperience` 位于 `TaleWorlds.MountAndBlade.Diamond`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Experience` | `public int Experience { get; }` |
| `Level` | `public int Level { get; }` |
| `ExperienceToNextLevel` | `public int ExperienceToNextLevel { get; }` |
| `ExperienceInCurrentLevel` | `public int ExperienceInCurrentLevel { get; }` |

## 主要方法

### CalculateLevelFromExperience
`public static int CalculateLevelFromExperience(int experience)`

**用途 / Purpose:** 处理 `calculate level from experience` 相关逻辑。

### CalculateExperienceFromLevel
`public static int CalculateExperienceFromLevel(int level)`

**用途 / Purpose:** 处理 `calculate experience from level` 相关逻辑。

### ExperienceRequiredForLevel
`public static int ExperienceRequiredForLevel(int level)`

**用途 / Purpose:** 处理 `experience required for level` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
PlayerDataExperience.CalculateLevelFromExperience(0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

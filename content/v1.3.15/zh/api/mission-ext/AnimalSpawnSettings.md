---
title: "AnimalSpawnSettings"
description: "AnimalSpawnSettings 的自动生成类参考。"
---
# AnimalSpawnSettings

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AnimalSpawnSettings : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Objects/AnimalSpawnSettings.cs`

## 概述

`AnimalSpawnSettings` 位于 `TaleWorlds.MountAndBlade.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CheckAndSetAnimalAgentFlags
`public static void CheckAndSetAnimalAgentFlags(GameEntity spawnEntity, Agent animalAgent)`

**用途 / Purpose:** **用途 / Purpose:** 检查and set animal agent flags在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
AnimalSpawnSettings.CheckAndSetAnimalAgentFlags(spawnEntity, animalAgent);
```

## 使用示例

```csharp
AnimalSpawnSettings.CheckAndSetAnimalAgentFlags(spawnEntity, animalAgent);
```

## 参见

- [本区域目录](../)
---
title: "HeroRelations"
description: "HeroRelations 的自动生成类参考。"
---
# HeroRelations

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class HeroRelations`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterRelationManager.cs`

## 概述

`HeroRelations` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetRelation
`public int GetRelation(Hero hero1, Hero hero2)`

**用途 / Purpose:** 读取并返回当前对象中 relation 的结果。

```csharp
// 先通过子系统 API 拿到 HeroRelations 实例
HeroRelations heroRelations = ...;
var result = heroRelations.GetRelation(hero1, hero2);
```

### SetRelation
`public void SetRelation(Hero hero1, Hero hero2, int value)`

**用途 / Purpose:** 为 relation 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroRelations 实例
HeroRelations heroRelations = ...;
heroRelations.SetRelation(hero1, hero2, 0);
```

### Remove
`public void Remove(Hero hero)`

**用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 HeroRelations 实例
HeroRelations heroRelations = ...;
heroRelations.Remove(hero);
```

### ClearOldData
`public void ClearOldData()`

**用途 / Purpose:** 清空当前对象中的old data。

```csharp
// 先通过子系统 API 拿到 HeroRelations 实例
HeroRelations heroRelations = ...;
heroRelations.ClearOldData();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HeroRelations heroRelations = ...;
heroRelations.GetRelation(hero1, hero2);
```

## 参见

- [本区域目录](../)
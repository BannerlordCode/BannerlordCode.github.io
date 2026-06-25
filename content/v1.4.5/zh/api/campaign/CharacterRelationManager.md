---
title: "CharacterRelationManager"
description: "CharacterRelationManager 的自动生成类参考。"
---
# CharacterRelationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterRelationManager`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CharacterRelationManager.cs`

## 概述

`CharacterRelationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CharacterRelationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRelation
`public int GetRelation(Hero hero1, Hero hero2)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 relation 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterRelationManager 实例
CharacterRelationManager characterRelationManager = ...;
var result = characterRelationManager.GetRelation(hero1, hero2);
```

### SetRelation
`public void SetRelation(Hero hero1, Hero hero2, int value)`

**用途 / Purpose:** **用途 / Purpose:** 为 relation 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterRelationManager 实例
CharacterRelationManager characterRelationManager = ...;
characterRelationManager.SetRelation(hero1, hero2, 0);
```

### Remove
`public void Remove(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 CharacterRelationManager 实例
CharacterRelationManager characterRelationManager = ...;
characterRelationManager.Remove(hero);
```

### ClearOldData
`public void ClearOldData()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的old data。

```csharp
// 先通过子系统 API 拿到 CharacterRelationManager 实例
CharacterRelationManager characterRelationManager = ...;
characterRelationManager.ClearOldData();
```

### GetHeroRelation
`public static int GetHeroRelation(Hero hero1, Hero hero2)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hero relation 的结果。

```csharp
// 静态调用，不需要实例
CharacterRelationManager.GetHeroRelation(hero1, hero2);
```

### SetHeroRelation
`public static void SetHeroRelation(Hero hero1, Hero hero2, int value)`

**用途 / Purpose:** **用途 / Purpose:** 为 hero relation 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
CharacterRelationManager.SetHeroRelation(hero1, hero2, 0);
```

### AfterLoad
`public void AfterLoad()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterLoad 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterRelationManager 实例
CharacterRelationManager characterRelationManager = ...;
characterRelationManager.AfterLoad();
```

### RemoveHero
`public void RemoveHero(Hero deadHero)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 hero。

```csharp
// 先通过子系统 API 拿到 CharacterRelationManager 实例
CharacterRelationManager characterRelationManager = ...;
characterRelationManager.RemoveHero(deadHero);
```

## 使用示例

```csharp
var manager = CharacterRelationManager.Current;
```

## 参见

- [本区域目录](../)
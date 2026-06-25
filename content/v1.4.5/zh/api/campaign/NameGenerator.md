---
title: "NameGenerator"
description: "NameGenerator 的自动生成类参考。"
---
# NameGenerator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NameGenerator`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/NameGenerator.cs`

## 概述

`NameGenerator` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GenerateHeroNameAndHeroFullName
`public void GenerateHeroNameAndHeroFullName(Hero hero, out TextObject firstName, out TextObject fullName, bool useDeterministicValues = true)`

**用途 / Purpose:** 生成「hero name and hero full name」的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 NameGenerator 实例
NameGenerator nameGenerator = ...;
nameGenerator.GenerateHeroNameAndHeroFullName(hero, firstName, fullName, false);
```

### GenerateHeroFirstName
`public TextObject GenerateHeroFirstName(Hero hero)`

**用途 / Purpose:** 生成「hero first name」的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 NameGenerator 实例
NameGenerator nameGenerator = ...;
var result = nameGenerator.GenerateHeroFirstName(hero);
```

### GenerateFirstNameForPlayer
`public TextObject GenerateFirstNameForPlayer(CultureObject culture, bool isFemale)`

**用途 / Purpose:** 生成「first name for player」的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 NameGenerator 实例
NameGenerator nameGenerator = ...;
var result = nameGenerator.GenerateFirstNameForPlayer(culture, false);
```

### GenerateClanName
`public TextObject GenerateClanName(CultureObject culture, Settlement clanOriginSettlement)`

**用途 / Purpose:** 生成「clan name」的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 NameGenerator 实例
NameGenerator nameGenerator = ...;
var result = nameGenerator.GenerateClanName(culture, clanOriginSettlement);
```

### GetNameListForCulture
`public MBReadOnlyList<TextObject> GetNameListForCulture(CultureObject npcCulture, bool isFemale)`

**用途 / Purpose:** 读取并返回当前对象中 「name list for culture」 的结果。

```csharp
// 先通过子系统 API 拿到 NameGenerator 实例
NameGenerator nameGenerator = ...;
var result = nameGenerator.GetNameListForCulture(npcCulture, false);
```

### AddName
`public void AddName(TextObject name)`

**用途 / Purpose:** 将 「name」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 NameGenerator 实例
NameGenerator nameGenerator = ...;
nameGenerator.AddName(name);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NameGenerator nameGenerator = ...;
nameGenerator.GenerateHeroNameAndHeroFullName(hero, firstName, fullName, false);
```

## 参见

- [本区域目录](../)
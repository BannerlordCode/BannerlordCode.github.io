---
title: "CommonTownsfolkCampaignBehavior"
description: "CommonTownsfolkCampaignBehavior 的自动生成类参考。"
---
# CommonTownsfolkCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class CommonTownsfolkCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs`

## 概述

`CommonTownsfolkCampaignBehavior` 位于 `SandBox.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 CommonTownsfolkCampaignBehavior 实例
CommonTownsfolkCampaignBehavior commonTownsfolkCampaignBehavior = ...;
commonTownsfolkCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** **用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 CommonTownsfolkCampaignBehavior 实例
CommonTownsfolkCampaignBehavior commonTownsfolkCampaignBehavior = ...;
commonTownsfolkCampaignBehavior.SyncData(dataStore);
```

### GetActionSetSuffixAndMonsterForItem
`public static string GetActionSetSuffixAndMonsterForItem(string itemId, int race, bool isFemale, out Monster monster)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 action set suffix and monster for item 的结果。

```csharp
// 静态调用，不需要实例
CommonTownsfolkCampaignBehavior.GetActionSetSuffixAndMonsterForItem("example", 0, false, monster);
```

### GetRandomTownsManActionSetAndMonster
`public static Tuple<string, Monster> GetRandomTownsManActionSetAndMonster(int race)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 random towns man action set and monster 的结果。

```csharp
// 静态调用，不需要实例
CommonTownsfolkCampaignBehavior.GetRandomTownsManActionSetAndMonster(0);
```

### GetRandomTownsWomanActionSetAndMonster
`public static Tuple<string, Monster> GetRandomTownsWomanActionSetAndMonster(int race)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 random towns woman action set and monster 的结果。

```csharp
// 静态调用，不需要实例
CommonTownsfolkCampaignBehavior.GetRandomTownsWomanActionSetAndMonster(0);
```

### CreateBroomsWoman
`public static LocationCharacter CreateBroomsWoman(CultureObject culture, CharacterRelations relation)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 brooms woman 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CommonTownsfolkCampaignBehavior.CreateBroomsWoman(culture, relation);
```

### CreateMaleBeggar
`public static LocationCharacter CreateMaleBeggar(CultureObject culture, CharacterRelations relation)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 male beggar 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CommonTownsfolkCampaignBehavior.CreateMaleBeggar(culture, relation);
```

### CreateFemaleBeggar
`public static LocationCharacter CreateFemaleBeggar(CultureObject culture, CharacterRelations relation)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 female beggar 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CommonTownsfolkCampaignBehavior.CreateFemaleBeggar(culture, relation);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CommonTownsfolkCampaignBehavior commonTownsfolkCampaignBehavior = ...;
commonTownsfolkCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)
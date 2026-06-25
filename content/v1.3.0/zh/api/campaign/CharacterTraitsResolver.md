---
title: "CharacterTraitsResolver"
description: "CharacterTraitsResolver 的自动生成类参考。"
---
# CharacterTraitsResolver

**Namespace:** TaleWorlds.CampaignSystem.SaveCompability
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterTraitsResolver : IConflictResolver`
**Base:** `IConflictResolver`
**File:** `TaleWorlds.CampaignSystem/SaveCompability/CharacterTraitsResolver.cs`

## 概述

`CharacterTraitsResolver` 位于 `TaleWorlds.CampaignSystem.SaveCompability`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.SaveCompability` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsApplicable
`public bool IsApplicable(ApplicationVersion version)`

**用途 / Purpose:** 判断当前对象是否处于 applicable 状态或条件。

```csharp
// 先通过子系统 API 拿到 CharacterTraitsResolver 实例
CharacterTraitsResolver characterTraitsResolver = ...;
var result = characterTraitsResolver.IsApplicable(version);
```

### GetFieldMemberWithId
`public MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId)`

**用途 / Purpose:** 读取并返回当前对象中 field member with id 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterTraitsResolver 实例
CharacterTraitsResolver characterTraitsResolver = ...;
var result = characterTraitsResolver.GetFieldMemberWithId(memberTypeId);
```

### GetNewType
`public Type GetNewType()`

**用途 / Purpose:** 读取并返回当前对象中 new type 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterTraitsResolver 实例
CharacterTraitsResolver characterTraitsResolver = ...;
var result = characterTraitsResolver.GetNewType();
```

### GetPropertyMemberWithId
`public MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId)`

**用途 / Purpose:** 读取并返回当前对象中 property member with id 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterTraitsResolver 实例
CharacterTraitsResolver characterTraitsResolver = ...;
var result = characterTraitsResolver.GetPropertyMemberWithId(memberTypeId);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterTraitsResolver characterTraitsResolver = ...;
characterTraitsResolver.IsApplicable(version);
```

## 参见

- [本区域目录](../)
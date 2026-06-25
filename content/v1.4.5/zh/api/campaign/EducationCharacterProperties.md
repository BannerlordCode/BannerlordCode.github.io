---
title: "EducationCharacterProperties"
description: "EducationCharacterProperties 的自动生成类参考。"
---
# EducationCharacterProperties

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct EducationCharacterProperties`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/EducationCampaignBehavior.cs`

## 概述

`EducationCharacterProperties` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### EducationCharacterProperties
`public struct EducationCharacterProperties(CharacterObject character, Equipment equipment, string actionId, string prefabId, bool useOffHand)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EducationCharacterProperties 对应的操作。

```csharp
// 先通过子系统 API 拿到 EducationCharacterProperties 实例
EducationCharacterProperties educationCharacterProperties = ...;
var result = educationCharacterProperties.EducationCharacterProperties(character, equipment, "example", "example", false);
```

### Equals
`public bool Equals(EducationCharacterProperties other)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 EducationCharacterProperties 实例
EducationCharacterProperties educationCharacterProperties = ...;
var result = educationCharacterProperties.Equals(other);
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 EducationCharacterProperties 实例
EducationCharacterProperties educationCharacterProperties = ...;
var result = educationCharacterProperties.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 EducationCharacterProperties 实例
EducationCharacterProperties educationCharacterProperties = ...;
var result = educationCharacterProperties.GetHashCode();
```

### GetUsedHandBoneIndex
`public sbyte GetUsedHandBoneIndex()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 used hand bone index 的结果。

```csharp
// 先通过子系统 API 拿到 EducationCharacterProperties 实例
EducationCharacterProperties educationCharacterProperties = ...;
var result = educationCharacterProperties.GetUsedHandBoneIndex();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EducationCharacterProperties educationCharacterProperties = ...;
educationCharacterProperties.EducationCharacterProperties(character, equipment, "example", "example", false);
```

## 参见

- [本区域目录](../)
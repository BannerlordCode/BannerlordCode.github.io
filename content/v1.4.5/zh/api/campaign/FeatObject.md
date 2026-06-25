---
title: "FeatObject"
description: "FeatObject 的自动生成类参考。"
---
# FeatObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class FeatObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/FeatObject.cs`

## 概述

`FeatObject` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EffectBonus` | `public float EffectBonus { get; }` |
| `IncrementType` | `public AdditionType IncrementType { get; }` |
| `IsPositive` | `public bool IsPositive { get; }` |

## 主要方法

### Initialize
`public void Initialize(string name, string description, float effectBonus, bool isPositiveEffect, AdditionType incrementType)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 FeatObject 实例
FeatObject featObject = ...;
featObject.Initialize("example", "example", 0, false, incrementType);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FeatObject featObject = ...;
featObject.Initialize("example", "example", 0, false, incrementType);
```

## 参见

- [本区域目录](../)
---
title: "SkillEffect"
description: "SkillEffect 的自动生成类参考。"
---
# SkillEffect

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class SkillEffect : PropertyObject`
**Base:** `PropertyObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SkillEffect.cs`

## 概述

`SkillEffect` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Bonus` | `public float Bonus { get; }` |
| `BaseValue` | `public float BaseValue { get; }` |
| `LimitMin` | `public float LimitMin { get; }` |
| `LimitMax` | `public float LimitMax { get; }` |
| `Role` | `public PartyRole Role { get; }` |
| `IncrementType` | `public EffectIncrementType IncrementType { get; }` |
| `EffectedSkill` | `public SkillObject EffectedSkill { get; }` |

## 主要方法

### Initialize
`public void Initialize(TextObject description, SkillObject effectedSkill, PartyRole role, float bonus, EffectIncrementType incrementType, float baseValue = 0f, float limitMin = float.MinValue, float limitMax = float.MaxValue)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SkillEffect 实例
SkillEffect skillEffect = ...;
skillEffect.Initialize(description, effectedSkill, role, 0, incrementType, 0, 0, 0);
```

### GetSkillEffectValue
`public float GetSkillEffectValue(int skillLevel)`

**用途 / Purpose:** 读取并返回当前对象中 skill effect value 的结果。

```csharp
// 先通过子系统 API 拿到 SkillEffect 实例
SkillEffect skillEffect = ...;
var result = skillEffect.GetSkillEffectValue(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SkillEffect skillEffect = ...;
skillEffect.Initialize(description, effectedSkill, role, 0, incrementType, 0, 0, 0);
```

## 参见

- [本区域目录](../)
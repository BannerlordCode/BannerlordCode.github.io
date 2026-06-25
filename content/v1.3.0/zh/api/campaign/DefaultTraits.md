---
title: "DefaultTraits"
description: "DefaultTraits 的自动生成类参考。"
---
# DefaultTraits

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTraits`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultTraits.cs`

## 概述

`DefaultTraits` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Frequency` | `public static TraitObject Frequency { get; }` |
| `Mercy` | `public static TraitObject Mercy { get; }` |
| `Valor` | `public static TraitObject Valor { get; }` |
| `Honor` | `public static TraitObject Honor { get; }` |
| `Generosity` | `public static TraitObject Generosity { get; }` |
| `Calculating` | `public static TraitObject Calculating { get; }` |
| `PersonaCurt` | `public static TraitObject PersonaCurt { get; }` |
| `PersonaEarnest` | `public static TraitObject PersonaEarnest { get; }` |
| `PersonaIronic` | `public static TraitObject PersonaIronic { get; }` |
| `PersonaSoftspoken` | `public static TraitObject PersonaSoftspoken { get; }` |
| `Surgery` | `public static TraitObject Surgery { get; }` |
| `SergeantCommandSkills` | `public static TraitObject SergeantCommandSkills { get; }` |
| `RogueSkills` | `public static TraitObject RogueSkills { get; }` |
| `Siegecraft` | `public static TraitObject Siegecraft { get; }` |
| `ScoutSkills` | `public static TraitObject ScoutSkills { get; }` |
| `Blacksmith` | `public static TraitObject Blacksmith { get; }` |
| `Commander` | `public static TraitObject Commander { get; }` |
| `Trader` | `public static TraitObject Trader { get; }` |
| `Thug` | `public static TraitObject Thug { get; }` |
| `Smuggler` | `public static TraitObject Smuggler { get; }` |
| `Egalitarian` | `public static TraitObject Egalitarian { get; }` |
| `Oligarchic` | `public static TraitObject Oligarchic { get; }` |
| `Authoritarian` | `public static TraitObject Authoritarian { get; }` |
| `NavalSoldier` | `public static TraitObject NavalSoldier { get; }` |
| `Personality` | `public static IEnumerable<TraitObject> Personality { get; }` |

## 主要方法

### RegisterAll
`public void RegisterAll()`

**用途 / Purpose:** 将all注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 DefaultTraits 实例
DefaultTraits defaultTraits = ...;
defaultTraits.RegisterAll();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DefaultTraits defaultTraits = ...;
defaultTraits.RegisterAll();
```

## 参见

- [本区域目录](../)
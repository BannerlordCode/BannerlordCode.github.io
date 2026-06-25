---
title: "DefaultFigureheads"
description: "DefaultFigureheads 的自动生成类参考。"
---
# DefaultFigureheads

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultFigureheads`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Naval/DefaultFigureheads.cs`

## 概述

`DefaultFigureheads` 位于 `TaleWorlds.CampaignSystem.Naval`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Naval` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static DefaultFigureheads Instance { get; }` |
| `Hawk` | `public static Figurehead Hawk { get; }` |
| `Lion` | `public static Figurehead Lion { get; }` |
| `Dragon` | `public static Figurehead Dragon { get; }` |
| `WingsOfVictory` | `public static Figurehead WingsOfVictory { get; }` |
| `Ram` | `public static Figurehead Ram { get; }` |
| `SeaSerpent` | `public static Figurehead SeaSerpent { get; }` |
| `Viper` | `public static Figurehead Viper { get; }` |
| `SaberToothTiger` | `public static Figurehead SaberToothTiger { get; }` |
| `Siren` | `public static Figurehead Siren { get; }` |
| `Horse` | `public static Figurehead Horse { get; }` |
| `Turtle` | `public static Figurehead Turtle { get; }` |
| `Boar` | `public static Figurehead Boar { get; }` |
| `Oxen` | `public static Figurehead Oxen { get; }` |
| `Swan` | `public static Figurehead Swan { get; }` |
| `Deer` | `public static Figurehead Deer { get; }` |
| `Raven` | `public static Figurehead Raven { get; }` |
| `SeaHorse` | `public static Figurehead SeaHorse { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
DefaultFigureheads instance = ...;
```

## 参见

- [本区域目录](../)
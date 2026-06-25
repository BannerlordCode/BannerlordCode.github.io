---
title: "StoryModeHeroes"
description: "StoryModeHeroes 的自动生成类参考。"
---
# StoryModeHeroes

**Namespace:** StoryMode.StoryModeObjects
**Module:** StoryMode.StoryModeObjects
**Type:** `public class StoryModeHeroes`
**Base:** 无
**File:** `StoryMode/StoryModeObjects/StoryModeHeroes.cs`

## 概述

`StoryModeHeroes` 位于 `StoryMode.StoryModeObjects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.StoryModeObjects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ElderBrother` | `public static Hero ElderBrother { get; }` |
| `LittleBrother` | `public static Hero LittleBrother { get; }` |
| `LittleSister` | `public static Hero LittleSister { get; }` |
| `Tacitus` | `public static Hero Tacitus { get; }` |
| `Radagos` | `public static Hero Radagos { get; }` |
| `ImperialMentor` | `public static Hero ImperialMentor { get; }` |
| `AntiImperialMentor` | `public static Hero AntiImperialMentor { get; }` |
| `RadagosHenchman` | `public static Hero RadagosHenchman { get; }` |
| `MainHeroMother` | `public static Hero MainHeroMother { get; }` |
| `MainHeroFather` | `public static Hero MainHeroFather { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
StoryModeHeroes instance = ...;
```

## 参见

- [本区域目录](../)
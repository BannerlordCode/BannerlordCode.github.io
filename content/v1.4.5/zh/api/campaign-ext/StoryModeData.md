---
title: "StoryModeData"
description: "StoryModeData 的自动生成类参考。"
---
# StoryModeData

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeData`
**Base:** 无
**File:** `Modules.StoryMode/StoryMode/StoryMode/StoryModeData.cs`

## 概述

`StoryModeData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `StoryModeData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NorthernEmpireKingdom` | `public static Kingdom NorthernEmpireKingdom { get; }` |
| `WesternEmpireKingdom` | `public static Kingdom WesternEmpireKingdom { get; }` |
| `SouthernEmpireKingdom` | `public static Kingdom SouthernEmpireKingdom { get; }` |
| `SturgiaKingdom` | `public static Kingdom SturgiaKingdom { get; }` |
| `AseraiKingdom` | `public static Kingdom AseraiKingdom { get; }` |
| `VlandiaKingdom` | `public static Kingdom VlandiaKingdom { get; }` |
| `BattaniaKingdom` | `public static Kingdom BattaniaKingdom { get; }` |
| `KhuzaitKingdom` | `public static Kingdom KhuzaitKingdom { get; }` |

## 主要方法

### IsKingdomImperial
`public static bool IsKingdomImperial(Kingdom kingdomToCheck)`

**用途 / Purpose:** 判断当前对象是否处于 kingdom imperial 状态或条件。

```csharp
// 静态调用，不需要实例
StoryModeData.IsKingdomImperial(kingdomToCheck);
```

### IsConspiracyTroop
`public static bool IsConspiracyTroop(CharacterObject troop)`

**用途 / Purpose:** 判断当前对象是否处于 conspiracy troop 状态或条件。

```csharp
// 静态调用，不需要实例
StoryModeData.IsConspiracyTroop(troop);
```

### OnGameEnd
`public static void OnGameEnd()`

**用途 / Purpose:** 在 game end 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
StoryModeData.OnGameEnd();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
StoryModeData entry = ...;
```

## 参见

- [本区域目录](../)
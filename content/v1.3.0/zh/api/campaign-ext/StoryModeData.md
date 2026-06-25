---
title: "StoryModeData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeData

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeData`
**Base:** 无
**File:** `StoryMode/StoryModeData.cs`

## 概述

`StoryModeData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `StoryModeData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ImperialCulture` | `public static CultureObject ImperialCulture { get; }` |
| `NorthernEmpireKingdom` | `public static Kingdom NorthernEmpireKingdom { get; }` |
| `WesternEmpireKingdom` | `public static Kingdom WesternEmpireKingdom { get; }` |
| `SouthernEmpireKingdom` | `public static Kingdom SouthernEmpireKingdom { get; }` |
| `SturgiaKingdom` | `public static Kingdom SturgiaKingdom { get; }` |
| `AseraiKingdom` | `public static Kingdom AseraiKingdom { get; }` |
| `VlandiaKingdom` | `public static Kingdom VlandiaKingdom { get; }` |
| `BattaniaKingdom` | `public static Kingdom BattaniaKingdom { get; }` |
| `KhuzaitKingdom` | `public static Kingdom KhuzaitKingdom { get; }` |

## 主要方法

### OnGameEnd
`public static void OnGameEnd()`

**用途 / Purpose:** 当 `game end` 事件触发时调用此方法。

### IsKingdomImperial
`public static bool IsKingdomImperial(Kingdom kingdomToCheck)`

**用途 / Purpose:** 处理 `is kingdom imperial` 相关逻辑。

## 使用示例

```csharp
var value = new StoryModeData();
```

## 参见

- [完整类目录](../catalog)
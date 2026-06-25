---
title: "CampaignTimeModel"
description: "CampaignTimeModel 的自动生成类参考。"
---
# CampaignTimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignTimeModel : MBGameModel<CampaignTimeModel>`
**Base:** `MBGameModel<CampaignTimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignTimeModel.cs`

## 概述

`CampaignTimeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CampaignTimeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CampaignStartTime` | `public abstract CampaignTime CampaignStartTime { get; }` |
| `SunRise` | `public abstract int SunRise { get; }` |
| `SunSet` | `public abstract int SunSet { get; }` |
| `TimeTicksPerMillisecond` | `public abstract long TimeTicksPerMillisecond { get; }` |
| `MillisecondInSecond` | `public abstract int MillisecondInSecond { get; }` |
| `SecondsInMinute` | `public abstract int SecondsInMinute { get; }` |
| `MinutesInHour` | `public abstract int MinutesInHour { get; }` |
| `HoursInDay` | `public abstract int HoursInDay { get; }` |
| `DaysInWeek` | `public abstract int DaysInWeek { get; }` |
| `WeeksInSeason` | `public abstract int WeeksInSeason { get; }` |
| `SeasonsInYear` | `public abstract int SeasonsInYear { get; }` |

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CampaignTimeModel instance = ...;
```

## 参见

- [本区域目录](../)
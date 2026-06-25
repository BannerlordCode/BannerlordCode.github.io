---
title: "LocatableSearchData"
description: "LocatableSearchData 的自动生成类参考。"
---
# LocatableSearchData

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct LocatableSearchData<T>`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Map/LocatableSearchData.cs`

## 概述

`LocatableSearchData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `LocatableSearchData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
LocatableSearchData entry = ...;
```

## 参见

- [本区域目录](../)
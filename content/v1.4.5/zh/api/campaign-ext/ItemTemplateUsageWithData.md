---
title: "ItemTemplateUsageWithData"
description: "ItemTemplateUsageWithData 的自动生成类参考。"
---
# ItemTemplateUsageWithData

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ItemTemplateUsageWithData`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.Data/ItemTemplateUsageWithData.cs`

## 概述

`ItemTemplateUsageWithData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ItemTemplateUsageWithData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GivenParameters` | `public Dictionary<string, WidgetAttributeTemplate> GivenParameters { get; }` |
| `ItemTemplateUsage` | `public ItemTemplateUsage ItemTemplateUsage { get; }` |
| `DefaultItemTemplate` | `public WidgetTemplate DefaultItemTemplate { get; }` |
| `FirstItemTemplate` | `public WidgetTemplate FirstItemTemplate { get; }` |
| `LastItemTemplate` | `public WidgetTemplate LastItemTemplate { get; }` |

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ItemTemplateUsageWithData entry = ...;
```

## 参见

- [本区域目录](../)
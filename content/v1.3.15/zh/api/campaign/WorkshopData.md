---
title: "WorkshopData"
description: "WorkshopData 的自动生成类参考。"
---
# WorkshopData

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class WorkshopData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/WorkshopsCampaignBehavior.cs`

## 概述

`WorkshopData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `WorkshopData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 WorkshopData 实例
WorkshopData workshopData = ...;
var result = workshopData.ToString();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
WorkshopData entry = ...;
```

## 参见

- [本区域目录](../)
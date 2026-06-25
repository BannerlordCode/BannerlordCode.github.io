---
title: "FleeingData"
description: "FleeingData 的自动生成类参考。"
---
# FleeingData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FleeingData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Party/MobilePartyAi.cs`

## 概述

`FleeingData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `FleeingData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Clear
`public void Clear()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 FleeingData 实例
FleeingData fleeingData = ...;
fleeingData.Clear();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
FleeingData entry = ...;
```

## 参见

- [本区域目录](../)
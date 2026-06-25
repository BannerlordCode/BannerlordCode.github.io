---
title: "SelectionCampaignOptionData"
description: "SelectionCampaignOptionData 的自动生成类参考。"
---
# SelectionCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SelectionCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectionCampaignOptionData.cs`

## 概述

`SelectionCampaignOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `SelectionCampaignOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Selections` | `public List<TextObject> Selections { get; }` |

## 主要方法

### GetDataType
`public override CampaignOptionDataType GetDataType()`

**用途 / Purpose:** 读取并返回当前对象中 data type 的结果。

```csharp
// 先通过子系统 API 拿到 SelectionCampaignOptionData 实例
SelectionCampaignOptionData selectionCampaignOptionData = ...;
var result = selectionCampaignOptionData.GetDataType();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
SelectionCampaignOptionData entry = ...;
```

## 参见

- [本区域目录](../)
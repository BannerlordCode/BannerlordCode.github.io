---
title: "GameMenuItemCreationData"
description: "GameMenuItemCreationData 的自动生成类参考。"
---
# GameMenuItemCreationData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `struct GameMenuItemCreationData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs`

## 概述

`GameMenuItemCreationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `GameMenuItemCreationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `OptionID` | `public string OptionID { get; }` |

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
GameMenuItemCreationData entry = ...;
```

## 参见

- [本区域目录](../)
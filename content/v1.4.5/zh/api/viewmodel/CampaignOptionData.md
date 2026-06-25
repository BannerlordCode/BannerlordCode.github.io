---
title: "CampaignOptionData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignOptionData`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignOptionData : ICampaignOptionData`
**Base:** `ICampaignOptionData`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/CampaignOptionData.cs`

## 概述

`CampaignOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CampaignOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetNameOfOption
`public static TextObject GetNameOfOption(string optionIdentifier)`

**用途 / Purpose:** 获取 `name of option` 的当前值。

### GetDescriptionOfOption
`public static TextObject GetDescriptionOfOption(string optionIdentifier)`

**用途 / Purpose:** 获取 `description of option` 的当前值。

### GetPriorityIndex
`public int GetPriorityIndex()`

**用途 / Purpose:** 获取 `priority index` 的当前值。

### GetDataType
`public abstract CampaignOptionDataType GetDataType()`

**用途 / Purpose:** 获取 `data type` 的当前值。

### IsRelatedToDifficultyPreset
`public bool IsRelatedToDifficultyPreset()`

**用途 / Purpose:** 处理 `is related to difficulty preset` 相关逻辑。

### GetValueFromDifficultyPreset
`public float GetValueFromDifficultyPreset(CampaignOptionsDifficultyPresets preset)`

**用途 / Purpose:** 获取 `value from difficulty preset` 的当前值。

### GetIsDisabledWithReason
`public CampaignOptionDisableStatus GetIsDisabledWithReason()`

**用途 / Purpose:** 获取 `is disabled with reason` 的当前值。

### GetIdentifier
`public string GetIdentifier()`

**用途 / Purpose:** 获取 `identifier` 的当前值。

### GetEnableState
`public CampaignOptionEnableState GetEnableState()`

**用途 / Purpose:** 获取 `enable state` 的当前值。

### GetName
`public string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetDescription
`public string GetDescription()`

**用途 / Purpose:** 获取 `description` 的当前值。

### GetValue
`public float GetValue()`

**用途 / Purpose:** 获取 `value` 的当前值。

### SetValue
`public void SetValue(float value)`

**用途 / Purpose:** 设置 `value` 的值或状态。

## 使用示例

```csharp
var implementation = new CustomCampaignOptionData();
```

## 参见

- [完整类目录](../catalog)
---
title: "CampaignOptionData"
description: "CampaignOptionData 的自动生成类参考。"
---
# CampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignOptionData : ICampaignOptionData`
**Base:** `ICampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs`

## 概述

`CampaignOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CampaignOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetNameOfOption
`public static TextObject GetNameOfOption(string optionIdentifier)`

**用途 / Purpose:** 读取并返回当前对象中 name of option 的结果。

```csharp
// 静态调用，不需要实例
CampaignOptionData.GetNameOfOption("example");
```

### GetDescriptionOfOption
`public static TextObject GetDescriptionOfOption(string optionIdentifier)`

**用途 / Purpose:** 读取并返回当前对象中 description of option 的结果。

```csharp
// 静态调用，不需要实例
CampaignOptionData.GetDescriptionOfOption("example");
```

### GetPriorityIndex
`public int GetPriorityIndex()`

**用途 / Purpose:** 读取并返回当前对象中 priority index 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignOptionData 实例
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetPriorityIndex();
```

### GetDataType
`public abstract CampaignOptionDataType GetDataType()`

**用途 / Purpose:** 读取并返回当前对象中 data type 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignOptionData 实例
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetDataType();
```

### IsRelatedToDifficultyPreset
`public bool IsRelatedToDifficultyPreset()`

**用途 / Purpose:** 判断当前对象是否处于 related to difficulty preset 状态或条件。

```csharp
// 先通过子系统 API 拿到 CampaignOptionData 实例
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.IsRelatedToDifficultyPreset();
```

### GetValueFromDifficultyPreset
`public float GetValueFromDifficultyPreset(CampaignOptionsDifficultyPresets preset)`

**用途 / Purpose:** 读取并返回当前对象中 value from difficulty preset 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignOptionData 实例
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetValueFromDifficultyPreset(preset);
```

### GetIsDisabledWithReason
`public CampaignOptionDisableStatus GetIsDisabledWithReason()`

**用途 / Purpose:** 读取并返回当前对象中 is disabled with reason 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignOptionData 实例
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetIsDisabledWithReason();
```

### GetIdentifier
`public string GetIdentifier()`

**用途 / Purpose:** 读取并返回当前对象中 identifier 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignOptionData 实例
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetIdentifier();
```

### GetEnableState
`public CampaignOptionEnableState GetEnableState()`

**用途 / Purpose:** 读取并返回当前对象中 enable state 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignOptionData 实例
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetEnableState();
```

### GetName
`public string GetName()`

**用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignOptionData 实例
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetName();
```

### GetDescription
`public string GetDescription()`

**用途 / Purpose:** 读取并返回当前对象中 description 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignOptionData 实例
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetDescription();
```

### GetValue
`public float GetValue()`

**用途 / Purpose:** 读取并返回当前对象中 value 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignOptionData 实例
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetValue();
```

### SetValue
`public void SetValue(float value)`

**用途 / Purpose:** 为 value 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CampaignOptionData 实例
CampaignOptionData campaignOptionData = ...;
campaignOptionData.SetValue(0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CampaignOptionData instance = ...;
```

## 参见

- [本区域目录](../)
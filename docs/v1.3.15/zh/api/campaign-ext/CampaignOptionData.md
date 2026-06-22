<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignOptionData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignOptionData : ICampaignOptionData`
**Base:** `ICampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs`

## 概述

`CampaignOptionData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### GetNameOfOption
```csharp
public static TextObject GetNameOfOption(string optionIdentifier)
```

### GetDescriptionOfOption
```csharp
public static TextObject GetDescriptionOfOption(string optionIdentifier)
```

### GetPriorityIndex
```csharp
public int GetPriorityIndex()
```

### GetDataType
```csharp
public abstract CampaignOptionDataType GetDataType()
```

### IsRelatedToDifficultyPreset
```csharp
public bool IsRelatedToDifficultyPreset()
```

### GetValueFromDifficultyPreset
```csharp
public float GetValueFromDifficultyPreset(CampaignOptionsDifficultyPresets preset)
```

### GetIsDisabledWithReason
```csharp
public CampaignOptionDisableStatus GetIsDisabledWithReason()
```

### GetIdentifier
```csharp
public string GetIdentifier()
```

### GetEnableState
```csharp
public CampaignOptionEnableState GetEnableState()
```

### GetName
```csharp
public string GetName()
```

### GetDescription
```csharp
public string GetDescription()
```

### GetValue
```csharp
public float GetValue()
```

### SetValue
```csharp
public void SetValue(float value)
```

## 使用示例

```csharp
// CampaignOptionData (Data) 的典型用法
new CampaignOptionData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignOptionData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignOptionData : ICampaignOptionData`
**Base:** `ICampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs`

## Overview

`CampaignOptionData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of CampaignOptionData (Data)
new CampaignOptionData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
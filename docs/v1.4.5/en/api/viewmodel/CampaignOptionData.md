<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignOptionData`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignOptionData : ICampaignOptionData`
**Base:** `ICampaignOptionData`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/CampaignOptionData.cs`

## Overview

`CampaignOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CampaignOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetNameOfOption
`public static TextObject GetNameOfOption(string optionIdentifier)`

**Purpose:** Gets the current value of `name of option`.

### GetDescriptionOfOption
`public static TextObject GetDescriptionOfOption(string optionIdentifier)`

**Purpose:** Gets the current value of `description of option`.

### GetPriorityIndex
`public int GetPriorityIndex()`

**Purpose:** Gets the current value of `priority index`.

### GetDataType
`public abstract CampaignOptionDataType GetDataType()`

**Purpose:** Gets the current value of `data type`.

### IsRelatedToDifficultyPreset
`public bool IsRelatedToDifficultyPreset()`

**Purpose:** Handles logic related to `is related to difficulty preset`.

### GetValueFromDifficultyPreset
`public float GetValueFromDifficultyPreset(CampaignOptionsDifficultyPresets preset)`

**Purpose:** Gets the current value of `value from difficulty preset`.

### GetIsDisabledWithReason
`public CampaignOptionDisableStatus GetIsDisabledWithReason()`

**Purpose:** Gets the current value of `is disabled with reason`.

### GetIdentifier
`public string GetIdentifier()`

**Purpose:** Gets the current value of `identifier`.

### GetEnableState
`public CampaignOptionEnableState GetEnableState()`

**Purpose:** Gets the current value of `enable state`.

### GetName
`public string GetName()`

**Purpose:** Gets the current value of `name`.

### GetDescription
`public string GetDescription()`

**Purpose:** Gets the current value of `description`.

### GetValue
`public float GetValue()`

**Purpose:** Gets the current value of `value`.

### SetValue
`public void SetValue(float value)`

**Purpose:** Sets the value or state of `value`.

## Usage Example

```csharp
var implementation = new CustomCampaignOptionData();
```

## See Also

- [Complete Class Catalog](../catalog)
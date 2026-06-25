---
title: "CampaignOptionData"
description: "Auto-generated class reference for CampaignOptionData."
---
# CampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignOptionData : ICampaignOptionData`
**Base:** `ICampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs`

## Overview

`CampaignOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CampaignOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetNameOfOption
`public static TextObject GetNameOfOption(string optionIdentifier)`

**Purpose:** Reads and returns the `name of option` value held by the current object.

```csharp
// Static call; no instance required
CampaignOptionData.GetNameOfOption("example");
```

### GetDescriptionOfOption
`public static TextObject GetDescriptionOfOption(string optionIdentifier)`

**Purpose:** Reads and returns the `description of option` value held by the current object.

```csharp
// Static call; no instance required
CampaignOptionData.GetDescriptionOfOption("example");
```

### GetPriorityIndex
`public int GetPriorityIndex()`

**Purpose:** Reads and returns the `priority index` value held by the current object.

```csharp
// Obtain an instance of CampaignOptionData from the subsystem API first
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetPriorityIndex();
```

### GetDataType
`public abstract CampaignOptionDataType GetDataType()`

**Purpose:** Reads and returns the `data type` value held by the current object.

```csharp
// Obtain an instance of CampaignOptionData from the subsystem API first
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetDataType();
```

### IsRelatedToDifficultyPreset
`public bool IsRelatedToDifficultyPreset()`

**Purpose:** Determines whether the current object is in the `related to difficulty preset` state or condition.

```csharp
// Obtain an instance of CampaignOptionData from the subsystem API first
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.IsRelatedToDifficultyPreset();
```

### GetValueFromDifficultyPreset
`public float GetValueFromDifficultyPreset(CampaignOptionsDifficultyPresets preset)`

**Purpose:** Reads and returns the `value from difficulty preset` value held by the current object.

```csharp
// Obtain an instance of CampaignOptionData from the subsystem API first
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetValueFromDifficultyPreset(preset);
```

### GetIsDisabledWithReason
`public CampaignOptionDisableStatus GetIsDisabledWithReason()`

**Purpose:** Reads and returns the `is disabled with reason` value held by the current object.

```csharp
// Obtain an instance of CampaignOptionData from the subsystem API first
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetIsDisabledWithReason();
```

### GetIdentifier
`public string GetIdentifier()`

**Purpose:** Reads and returns the `identifier` value held by the current object.

```csharp
// Obtain an instance of CampaignOptionData from the subsystem API first
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetIdentifier();
```

### GetEnableState
`public CampaignOptionEnableState GetEnableState()`

**Purpose:** Reads and returns the `enable state` value held by the current object.

```csharp
// Obtain an instance of CampaignOptionData from the subsystem API first
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetEnableState();
```

### GetName
`public string GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of CampaignOptionData from the subsystem API first
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetName();
```

### GetDescription
`public string GetDescription()`

**Purpose:** Reads and returns the `description` value held by the current object.

```csharp
// Obtain an instance of CampaignOptionData from the subsystem API first
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetDescription();
```

### GetValue
`public float GetValue()`

**Purpose:** Reads and returns the `value` value held by the current object.

```csharp
// Obtain an instance of CampaignOptionData from the subsystem API first
CampaignOptionData campaignOptionData = ...;
var result = campaignOptionData.GetValue();
```

### SetValue
`public void SetValue(float value)`

**Purpose:** Assigns a new value to `value` and updates the object's internal state.

```csharp
// Obtain an instance of CampaignOptionData from the subsystem API first
CampaignOptionData campaignOptionData = ...;
campaignOptionData.SetValue(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CampaignOptionData instance = ...;
```

## See Also

- [Area Index](../)
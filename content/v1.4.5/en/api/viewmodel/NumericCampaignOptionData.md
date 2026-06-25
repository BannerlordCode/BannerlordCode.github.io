---
title: "NumericCampaignOptionData"
description: "Auto-generated class reference for NumericCampaignOptionData."
---
# NumericCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NumericCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/NumericCampaignOptionData.cs`

## Overview

`NumericCampaignOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `NumericCampaignOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinValue` | `public float MinValue { get; }` |
| `MaxValue` | `public float MaxValue { get; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; }` |

## Key Methods

### GetDataType
`public override CampaignOptionDataType GetDataType()`

**Purpose:** **Purpose:** Reads and returns the data type value held by the this instance.

```csharp
// Obtain an instance of NumericCampaignOptionData from the subsystem API first
NumericCampaignOptionData numericCampaignOptionData = ...;
var result = numericCampaignOptionData.GetDataType();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
NumericCampaignOptionData entry = ...;
```

## See Also

- [Area Index](../)
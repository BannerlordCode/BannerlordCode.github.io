---
title: "BooleanCampaignOptionData"
description: "Auto-generated class reference for BooleanCampaignOptionData."
---
# BooleanCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BooleanCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/BooleanCampaignOptionData.cs`

## Overview

`BooleanCampaignOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BooleanCampaignOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDataType
`public override CampaignOptionDataType GetDataType()`

**Purpose:** **Purpose:** Reads and returns the data type value held by the this instance.

```csharp
// Obtain an instance of BooleanCampaignOptionData from the subsystem API first
BooleanCampaignOptionData booleanCampaignOptionData = ...;
var result = booleanCampaignOptionData.GetDataType();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BooleanCampaignOptionData entry = ...;
```

## See Also

- [Area Index](../)
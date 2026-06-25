---
title: "SelectionCampaignOptionData"
description: "Auto-generated class reference for SelectionCampaignOptionData."
---
# SelectionCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SelectionCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/SelectionCampaignOptionData.cs`

## Overview

`SelectionCampaignOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SelectionCampaignOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Selections` | `public List<TextObject> Selections { get; }` |

## Key Methods

### GetDataType
`public override CampaignOptionDataType GetDataType()`

**Purpose:** Reads and returns the data type value held by the this instance.

```csharp
// Obtain an instance of SelectionCampaignOptionData from the subsystem API first
SelectionCampaignOptionData selectionCampaignOptionData = ...;
var result = selectionCampaignOptionData.GetDataType();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SelectionCampaignOptionData entry = ...;
```

## See Also

- [Area Index](../)
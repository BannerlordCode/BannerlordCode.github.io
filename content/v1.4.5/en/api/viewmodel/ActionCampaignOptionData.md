---
title: "ActionCampaignOptionData"
description: "Auto-generated class reference for ActionCampaignOptionData."
---
# ActionCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ActionCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/ActionCampaignOptionData.cs`

## Overview

`ActionCampaignOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ActionCampaignOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDataType
`public override CampaignOptionDataType GetDataType()`

**Purpose:** Reads and returns the data type value held by the this instance.

```csharp
// Obtain an instance of ActionCampaignOptionData from the subsystem API first
ActionCampaignOptionData actionCampaignOptionData = ...;
var result = actionCampaignOptionData.GetDataType();
```

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of ActionCampaignOptionData from the subsystem API first
ActionCampaignOptionData actionCampaignOptionData = ...;
actionCampaignOptionData.ExecuteAction();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ActionCampaignOptionData entry = ...;
```

## See Also

- [Area Index](../)
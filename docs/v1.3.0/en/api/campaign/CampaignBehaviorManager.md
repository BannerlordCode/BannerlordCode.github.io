<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignBehaviorManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignBehaviorManager

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignBehaviorManager : ICampaignBehaviorManager`
**Base:** `ICampaignBehaviorManager`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignBehaviorManager.cs`

## Overview

`CampaignBehaviorManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CampaignBehaviorManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### InitializeCampaignBehaviors
`public void InitializeCampaignBehaviors(IEnumerable<CampaignBehaviorBase> inputComponents)`

**Purpose:** Initializes the state, resources, or bindings for `campaign behaviors`.

### RegisterEvents
`public void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### LoadBehaviorData
`public void LoadBehaviorData()`

**Purpose:** Loads `behavior data` data.

### AddBehavior
`public void AddBehavior(CampaignBehaviorBase campaignBehavior)`

**Purpose:** Adds `behavior` to the current collection or state.

### ClearBehaviors
`public void ClearBehaviors()`

**Purpose:** Handles logic related to `clear behaviors`.

## Usage Example

```csharp
var manager = CampaignBehaviorManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
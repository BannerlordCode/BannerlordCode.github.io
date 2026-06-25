---
title: "RetirementCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RetirementCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RetirementCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class RetirementCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.CampaignBehaviors/RetirementCampaignBehavior.cs`

## Overview

`RetirementCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

## Usage Example

```csharp
var value = new RetirementCampaignBehavior();
value.SyncData(dataStore);
```

## See Also

- [Complete Class Catalog](../catalog)
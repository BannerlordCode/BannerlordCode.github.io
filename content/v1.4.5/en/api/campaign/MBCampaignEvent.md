---
title: "MBCampaignEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBCampaignEvent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBCampaignEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MBCampaignEvent`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/MBCampaignEvent.cs`

## Overview

`MBCampaignEvent` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TriggerPeriod` | `public CampaignTime TriggerPeriod { get; }` |
| `InitialWait` | `public CampaignTime InitialWait { get; }` |
| `isEventDeleted` | `public bool isEventDeleted { get; set; }` |

## Key Methods

### CampaignEventDelegate
`public delegate void CampaignEventDelegate(MBCampaignEvent campaignEvent, params object delegateParams)`

**Purpose:** Handles logic related to `campaign event delegate`.

### AddHandler
`public void AddHandler(CampaignEventDelegate gameEventDelegate)`

**Purpose:** Adds `handler` to the current collection or state.

### RunHandlers
`public void RunHandlers(params object delegateParams)`

**Purpose:** Handles logic related to `run handlers`.

### Unregister
`public void Unregister(object instance)`

**Purpose:** Handles logic related to `unregister`.

### CheckUpdate
`public void CheckUpdate()`

**Purpose:** Handles logic related to `check update`.

### DeletePeriodicEvent
`public void DeletePeriodicEvent()`

**Purpose:** Handles logic related to `delete periodic event`.

## Usage Example

```csharp
var value = new MBCampaignEvent();
value.CampaignEventDelegate(campaignEvent, delegateParams);
```

## See Also

- [Complete Class Catalog](../catalog)
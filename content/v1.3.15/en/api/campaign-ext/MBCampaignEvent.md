---
title: "MBCampaignEvent"
description: "Auto-generated class reference for MBCampaignEvent."
---
# MBCampaignEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MBCampaignEvent`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/MBCampaignEvent.cs`

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

### AddHandler
`public void AddHandler(MBCampaignEvent.CampaignEventDelegate gameEventDelegate)`

**Purpose:** Adds handler to the current collection or state.

```csharp
// Obtain an instance of MBCampaignEvent from the subsystem API first
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.AddHandler(gameEventDelegate);
```

### RunHandlers
`public void RunHandlers(params object delegateParams)`

**Purpose:** Executes the RunHandlers logic.

```csharp
// Obtain an instance of MBCampaignEvent from the subsystem API first
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.RunHandlers(delegateParams);
```

### Unregister
`public void Unregister(object instance)`

**Purpose:** Unregisters the this instance from the current system.

```csharp
// Obtain an instance of MBCampaignEvent from the subsystem API first
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.Unregister(instance);
```

### CheckUpdate
`public void CheckUpdate()`

**Purpose:** Verifies whether update holds true for the this instance.

```csharp
// Obtain an instance of MBCampaignEvent from the subsystem API first
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.CheckUpdate();
```

### DeletePeriodicEvent
`public void DeletePeriodicEvent()`

**Purpose:** Executes the DeletePeriodicEvent logic.

```csharp
// Obtain an instance of MBCampaignEvent from the subsystem API first
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.DeletePeriodicEvent();
```

### CampaignEventDelegate
`public delegate void CampaignEventDelegate(MBCampaignEvent campaignEvent, params object delegateParams)`

**Purpose:** Executes the CampaignEventDelegate logic.

```csharp
// Obtain an instance of MBCampaignEvent from the subsystem API first
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.CampaignEventDelegate(campaignEvent, delegateParams);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.AddHandler(gameEventDelegate);
```

## See Also

- [Area Index](../)
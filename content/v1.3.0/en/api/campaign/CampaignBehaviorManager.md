---
title: "CampaignBehaviorManager"
description: "Auto-generated class reference for CampaignBehaviorManager."
---
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

**Purpose:** Prepares the resources, state, or bindings required by `campaign behaviors`.

```csharp
// Obtain an instance of CampaignBehaviorManager from the subsystem API first
CampaignBehaviorManager campaignBehaviorManager = ...;
campaignBehaviorManager.InitializeCampaignBehaviors(inputComponents);
```

### RegisterEvents
`public void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CampaignBehaviorManager from the subsystem API first
CampaignBehaviorManager campaignBehaviorManager = ...;
campaignBehaviorManager.RegisterEvents();
```

### LoadBehaviorData
`public void LoadBehaviorData()`

**Purpose:** Reads `behavior data` from persistent storage or a stream.

```csharp
// Obtain an instance of CampaignBehaviorManager from the subsystem API first
CampaignBehaviorManager campaignBehaviorManager = ...;
campaignBehaviorManager.LoadBehaviorData();
```

### AddBehavior
`public void AddBehavior(CampaignBehaviorBase campaignBehavior)`

**Purpose:** Adds `behavior` to the current collection or state.

```csharp
// Obtain an instance of CampaignBehaviorManager from the subsystem API first
CampaignBehaviorManager campaignBehaviorManager = ...;
campaignBehaviorManager.AddBehavior(campaignBehavior);
```

### ClearBehaviors
`public void ClearBehaviors()`

**Purpose:** Removes all `behaviors` from the current object.

```csharp
// Obtain an instance of CampaignBehaviorManager from the subsystem API first
CampaignBehaviorManager campaignBehaviorManager = ...;
campaignBehaviorManager.ClearBehaviors();
```

## Usage Example

```csharp
var manager = CampaignBehaviorManager.Current;
```

## See Also

- [Area Index](../)
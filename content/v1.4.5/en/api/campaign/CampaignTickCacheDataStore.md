---
title: "CampaignTickCacheDataStore"
description: "Auto-generated class reference for CampaignTickCacheDataStore."
---
# CampaignTickCacheDataStore

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignTickCacheDataStore`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignTickCacheDataStore.cs`

## Overview

`CampaignTickCacheDataStore` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(MobileParty x, MobileParty y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of CampaignTickCacheDataStore from the subsystem API first
CampaignTickCacheDataStore campaignTickCacheDataStore = ...;
var result = campaignTickCacheDataStore.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CampaignTickCacheDataStore campaignTickCacheDataStore = ...;
campaignTickCacheDataStore.Compare(x, y);
```

## See Also

- [Area Index](../)
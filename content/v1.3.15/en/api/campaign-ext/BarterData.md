---
title: "BarterData"
description: "Auto-generated class reference for BarterData."
---
# BarterData

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs`

## Overview

`BarterData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BarterData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OffererMapFaction` | `public IFaction OffererMapFaction { get; }` |
| `OtherMapFaction` | `public IFaction OtherMapFaction { get; }` |
| `IsAiBarter` | `public bool IsAiBarter { get; }` |

## Key Methods

### AddBarterGroup
`public void AddBarterGroup(BarterGroup barterGroup)`

**Purpose:** **Purpose:** Adds barter group to the current collection or state.

```csharp
// Obtain an instance of BarterData from the subsystem API first
BarterData barterData = ...;
barterData.AddBarterGroup(barterGroup);
```

### GetBarterGroups
`public List<BarterGroup> GetBarterGroups()`

**Purpose:** **Purpose:** Reads and returns the barter groups value held by the this instance.

```csharp
// Obtain an instance of BarterData from the subsystem API first
BarterData barterData = ...;
var result = barterData.GetBarterGroups();
```

### GetBarterables
`public List<Barterable> GetBarterables()`

**Purpose:** **Purpose:** Reads and returns the barterables value held by the this instance.

```csharp
// Obtain an instance of BarterData from the subsystem API first
BarterData barterData = ...;
var result = barterData.GetBarterables();
```

### GetOfferedBarterables
`public List<Barterable> GetOfferedBarterables()`

**Purpose:** **Purpose:** Reads and returns the offered barterables value held by the this instance.

```csharp
// Obtain an instance of BarterData from the subsystem API first
BarterData barterData = ...;
var result = barterData.GetOfferedBarterables();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BarterData entry = ...;
```

## See Also

- [Area Index](../)
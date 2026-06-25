---
title: "FactionManagerStancesData"
description: "Auto-generated class reference for FactionManagerStancesData."
---
# FactionManagerStancesData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class FactionManagerStancesData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/FactionManagerStancesData.cs`

## Overview

`FactionManagerStancesData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FactionManagerStancesData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddStance
`public void AddStance(StanceLink stance)`

**Purpose:** Adds `stance` to the current collection or state.

```csharp
// Obtain an instance of FactionManagerStancesData from the subsystem API first
FactionManagerStancesData factionManagerStancesData = ...;
factionManagerStancesData.AddStance(stance);
```

### RemoveStance
`public void RemoveStance(StanceLink stance)`

**Purpose:** Removes `stance` from the current collection or state.

```csharp
// Obtain an instance of FactionManagerStancesData from the subsystem API first
FactionManagerStancesData factionManagerStancesData = ...;
factionManagerStancesData.RemoveStance(stance);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
FactionManagerStancesData entry = ...;
```

## See Also

- [Area Index](../)
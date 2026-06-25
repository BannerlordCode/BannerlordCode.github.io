---
title: "WeaponStatsData"
description: "Auto-generated class reference for WeaponStatsData."
---
# WeaponStatsData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct WeaponStatsData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/WeaponStatsData.cs`

## Overview

`WeaponStatsData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `WeaponStatsData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
WeaponStatsData entry = ...;
```

## See Also

- [Area Index](../)
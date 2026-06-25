---
title: "WeaponData"
description: "Auto-generated class reference for WeaponData."
---
# WeaponData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct WeaponData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/WeaponData.cs`

## Overview

`WeaponData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `WeaponData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsValid
`public bool IsValid()`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid state or condition.

```csharp
// Obtain an instance of WeaponData from the subsystem API first
WeaponData weaponData = ...;
var result = weaponData.IsValid();
```

### GetItemObject
`public ItemObject GetItemObject()`

**Purpose:** **Purpose:** Reads and returns the item object value held by the this instance.

```csharp
// Obtain an instance of WeaponData from the subsystem API first
WeaponData weaponData = ...;
var result = weaponData.GetItemObject();
```

### DeinitializeManagedPointers
`public void DeinitializeManagedPointers()`

**Purpose:** **Purpose:** Executes the DeinitializeManagedPointers logic.

```csharp
// Obtain an instance of WeaponData from the subsystem API first
WeaponData weaponData = ...;
weaponData.DeinitializeManagedPointers();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
WeaponData entry = ...;
```

## See Also

- [Area Index](../)
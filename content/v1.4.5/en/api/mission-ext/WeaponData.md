---
title: "WeaponData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct WeaponData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/WeaponData.cs`

## Overview

`WeaponData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `WeaponData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsValid
`public bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

### GetItemObject
`public ItemObject GetItemObject()`

**Purpose:** Gets the current value of `item object`.

### DeinitializeManagedPointers
`public void DeinitializeManagedPointers()`

**Purpose:** Handles logic related to `deinitialize managed pointers`.

## Usage Example

```csharp
var value = new WeaponData();
```

## See Also

- [Complete Class Catalog](../catalog)
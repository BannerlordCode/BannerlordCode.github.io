---
title: "ModuleNetworkData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ModuleNetworkData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleNetworkData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ModuleNetworkData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/ModuleNetworkData.cs`

## Overview

`ModuleNetworkData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ModuleNetworkData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ReadItemReferenceFromPacket
`public static EquipmentElement ReadItemReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read item reference from packet`.

### WriteItemReferenceToPacket
`public static void WriteItemReferenceToPacket(EquipmentElement equipElement)`

**Purpose:** Handles logic related to `write item reference to packet`.

### ReadWeaponReferenceFromPacket
`public static MissionWeapon ReadWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read weapon reference from packet`.

### WriteWeaponReferenceToPacket
`public static void WriteWeaponReferenceToPacket(MissionWeapon weapon)`

**Purpose:** Handles logic related to `write weapon reference to packet`.

### ReadMissileWeaponReferenceFromPacket
`public static MissionWeapon ReadMissileWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read missile weapon reference from packet`.

### WriteMissileWeaponReferenceToPacket
`public static void WriteMissileWeaponReferenceToPacket(MissionWeapon weapon)`

**Purpose:** Handles logic related to `write missile weapon reference to packet`.

## Usage Example

```csharp
var value = new ModuleNetworkData();
```

## See Also

- [Complete Class Catalog](../catalog)
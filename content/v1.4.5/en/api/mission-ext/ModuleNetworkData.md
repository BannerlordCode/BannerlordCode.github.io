---
title: "ModuleNetworkData"
description: "Auto-generated class reference for ModuleNetworkData."
---
# ModuleNetworkData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ModuleNetworkData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ModuleNetworkData.cs`

## Overview

`ModuleNetworkData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ModuleNetworkData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ReadItemReferenceFromPacket
`public static EquipmentElement ReadItemReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of `item reference from packet`.

```csharp
// Static call; no instance required
ModuleNetworkData.ReadItemReferenceFromPacket(objectManager, bufferReadValid);
```

### WriteItemReferenceToPacket
`public static void WriteItemReferenceToPacket(EquipmentElement equipElement)`

**Purpose:** Writes `item reference to packet` to the target location.

```csharp
// Static call; no instance required
ModuleNetworkData.WriteItemReferenceToPacket(equipElement);
```

### ReadWeaponReferenceFromPacket
`public static MissionWeapon ReadWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of `weapon reference from packet`.

```csharp
// Static call; no instance required
ModuleNetworkData.ReadWeaponReferenceFromPacket(objectManager, bufferReadValid);
```

### WriteWeaponReferenceToPacket
`public static void WriteWeaponReferenceToPacket(MissionWeapon weapon)`

**Purpose:** Writes `weapon reference to packet` to the target location.

```csharp
// Static call; no instance required
ModuleNetworkData.WriteWeaponReferenceToPacket(weapon);
```

### ReadMissileWeaponReferenceFromPacket
`public static MissionWeapon ReadMissileWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of `missile weapon reference from packet`.

```csharp
// Static call; no instance required
ModuleNetworkData.ReadMissileWeaponReferenceFromPacket(objectManager, bufferReadValid);
```

### WriteMissileWeaponReferenceToPacket
`public static void WriteMissileWeaponReferenceToPacket(MissionWeapon weapon)`

**Purpose:** Writes `missile weapon reference to packet` to the target location.

```csharp
// Static call; no instance required
ModuleNetworkData.WriteMissileWeaponReferenceToPacket(weapon);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ModuleNetworkData entry = ...;
```

## See Also

- [Area Index](../)
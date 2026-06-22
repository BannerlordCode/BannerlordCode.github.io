<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ModuleNetworkData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleNetworkData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ModuleNetworkData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/ModuleNetworkData.cs`

## Overview

`ModuleNetworkData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### ReadItemReferenceFromPacket
```csharp
public static EquipmentElement ReadItemReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)
```

### WriteItemReferenceToPacket
```csharp
public static void WriteItemReferenceToPacket(EquipmentElement equipElement)
```

### ReadWeaponReferenceFromPacket
```csharp
public static MissionWeapon ReadWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)
```

### WriteWeaponReferenceToPacket
```csharp
public static void WriteWeaponReferenceToPacket(MissionWeapon weapon)
```

### ReadMissileWeaponReferenceFromPacket
```csharp
public static MissionWeapon ReadMissileWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)
```

### WriteMissileWeaponReferenceToPacket
```csharp
public static void WriteMissileWeaponReferenceToPacket(MissionWeapon weapon)
```

## Usage Example

```csharp
// Typical usage of ModuleNetworkData (Data)
new ModuleNetworkData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
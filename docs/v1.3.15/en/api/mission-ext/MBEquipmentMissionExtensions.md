<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBEquipmentMissionExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBEquipmentMissionExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBEquipmentMissionExtensions`
**Area:** mission-ext

## Overview

`MBEquipmentMissionExtensions` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSkinMeshesMask
`public static SkinMask GetSkinMeshesMask(this Equipment equipment)`

**Purpose:** Gets the current value of `skin meshes mask`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBEquipmentMissionExtensions.GetSkinMeshesMask(equipment);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)

---
title: "SetWeaponNetworkData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SetWeaponNetworkData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SetWeaponNetworkData

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class SetWeaponNetworkData : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/SetWeaponNetworkData.cs`

## Overview

`SetWeaponNetworkData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SetWeaponNetworkData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentIndex` | `public int AgentIndex { get; }` |
| `WeaponEquipmentIndex` | `public EquipmentIndex WeaponEquipmentIndex { get; }` |
| `DataValue` | `public short DataValue { get; }` |

## Usage Example

```csharp
var value = new SetWeaponNetworkData();
```

## See Also

- [Complete Class Catalog](../catalog)
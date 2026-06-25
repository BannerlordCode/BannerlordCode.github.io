---
title: "UnselectSiegeWeapon"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UnselectSiegeWeapon`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UnselectSiegeWeapon

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class UnselectSiegeWeapon : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromClient/UnselectSiegeWeapon.cs`

## Overview

`UnselectSiegeWeapon` lives in `NetworkMessages.FromClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SiegeWeaponId` | `public MissionObjectId SiegeWeaponId { get; }` |

## Usage Example

```csharp
var example = new UnselectSiegeWeapon();
```

## See Also

- [Complete Class Catalog](../catalog)
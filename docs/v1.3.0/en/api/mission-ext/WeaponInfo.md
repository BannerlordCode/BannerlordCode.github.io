<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct WeaponInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/WeaponInfo.cs`

## Overview

`WeaponInfo` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `IsMeleeWeapon` | `public bool IsMeleeWeapon { get; }` |
| `IsRangedWeapon` | `public bool IsRangedWeapon { get; }` |

## Usage Example

```csharp
var example = new WeaponInfo();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "ActionCodeType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ActionCodeType`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ActionCodeType

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum ActionCodeType`
**Area:** mission-ext

## Overview

`ActionCodeType` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Other` |
| `DefendFist` |
| `DefendShield` |
| `DefendForward2h` |
| `DefendUp2h` |
| `DefendRight2h` |
| `DefendLeft2h` |
| `DefendForward1h` |
| `DefendUp1h` |
| `DefendRight1h` |
| `DefendLeft1h` |
| `DefendForwardStaff` |
| `DefendUpStaff` |
| `DefendRightStaff` |
| `DefendLeftStaff` |
| `ReadyRanged` |
| `ReleaseRanged` |
| `ReleaseThrowing` |
| `Reload` |
| `ReadyMelee` |
| `ReleaseMelee` |
| `ParriedMelee` |
| `BlockedMelee` |
| `Fall` |
| `JumpStart` |
| `Jump` |
| `JumpEnd` |
| `JumpEndHard` |
| `Kick` |
| `KickContinue` |

## Usage Example

```csharp
ActionCodeType example = ActionCodeType.Other;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)

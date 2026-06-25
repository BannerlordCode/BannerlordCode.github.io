---
title: "ItemPhysicsSoundContainer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemPhysicsSoundContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemPhysicsSoundContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ItemPhysicsSoundContainer`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/ItemPhysicsSoundContainer.cs`

## Overview

`ItemPhysicsSoundContainer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SoundCodePhysicsBoulderDefault` | `public static int SoundCodePhysicsBoulderDefault { get; }` |
| `SoundCodePhysicsArrowlikeDefault` | `public static int SoundCodePhysicsArrowlikeDefault { get; }` |
| `SoundCodePhysicsBowlikeDefault` | `public static int SoundCodePhysicsBowlikeDefault { get; }` |
| `SoundCodePhysicsDaggerlikeDefault` | `public static int SoundCodePhysicsDaggerlikeDefault { get; }` |
| `SoundCodePhysicsGreatswordlikeDefault` | `public static int SoundCodePhysicsGreatswordlikeDefault { get; }` |
| `SoundCodePhysicsShieldlikeDefault` | `public static int SoundCodePhysicsShieldlikeDefault { get; }` |
| `SoundCodePhysicsSpearlikeDefault` | `public static int SoundCodePhysicsSpearlikeDefault { get; }` |
| `SoundCodePhysicsSwordlikeDefault` | `public static int SoundCodePhysicsSwordlikeDefault { get; }` |
| `SoundCodePhysicsBoulderWood` | `public static int SoundCodePhysicsBoulderWood { get; }` |
| `SoundCodePhysicsArrowlikeWood` | `public static int SoundCodePhysicsArrowlikeWood { get; }` |
| `SoundCodePhysicsBowlikeWood` | `public static int SoundCodePhysicsBowlikeWood { get; }` |
| `SoundCodePhysicsDaggerlikeWood` | `public static int SoundCodePhysicsDaggerlikeWood { get; }` |
| `SoundCodePhysicsGreatswordlikeWood` | `public static int SoundCodePhysicsGreatswordlikeWood { get; }` |
| `SoundCodePhysicsShieldlikeWood` | `public static int SoundCodePhysicsShieldlikeWood { get; }` |
| `SoundCodePhysicsSpearlikeWood` | `public static int SoundCodePhysicsSpearlikeWood { get; }` |
| `SoundCodePhysicsSwordlikeWood` | `public static int SoundCodePhysicsSwordlikeWood { get; }` |
| `SoundCodePhysicsBoulderStone` | `public static int SoundCodePhysicsBoulderStone { get; }` |
| `SoundCodePhysicsArrowlikeStone` | `public static int SoundCodePhysicsArrowlikeStone { get; }` |
| `SoundCodePhysicsBowlikeStone` | `public static int SoundCodePhysicsBowlikeStone { get; }` |
| `SoundCodePhysicsDaggerlikeStone` | `public static int SoundCodePhysicsDaggerlikeStone { get; }` |
| `SoundCodePhysicsGreatswordlikeStone` | `public static int SoundCodePhysicsGreatswordlikeStone { get; }` |
| `SoundCodePhysicsShieldlikeStone` | `public static int SoundCodePhysicsShieldlikeStone { get; }` |
| `SoundCodePhysicsSpearlikeStone` | `public static int SoundCodePhysicsSpearlikeStone { get; }` |
| `SoundCodePhysicsSwordlikeStone` | `public static int SoundCodePhysicsSwordlikeStone { get; }` |
| `SoundCodePhysicsWater` | `public static int SoundCodePhysicsWater { get; }` |

## Usage Example

```csharp
var value = new ItemPhysicsSoundContainer();
```

## See Also

- [Complete Class Catalog](../catalog)
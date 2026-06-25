---
title: "WeaponDescription"
description: "Auto-generated class reference for WeaponDescription."
---
# WeaponDescription

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponDescription : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/WeaponDescription.cs`

## Overview

`WeaponDescription` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeaponClass` | `public WeaponClass WeaponClass { get; }` |
| `WeaponFlags` | `public WeaponFlags WeaponFlags { get; }` |
| `ItemUsageFeatures` | `public string ItemUsageFeatures { get; }` |
| `RotatedInHand` | `public bool RotatedInHand { get; }` |
| `IsHiddenFromUI` | `public bool IsHiddenFromUI { get; set; }` |

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of WeaponDescription from the subsystem API first
WeaponDescription weaponDescription = ...;
weaponDescription.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeaponDescription weaponDescription = ...;
weaponDescription.Deserialize(objectManager, node);
```

## See Also

- [Area Index](../)
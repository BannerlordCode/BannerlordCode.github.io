---
title: "WeaponDesign"
description: "Auto-generated class reference for WeaponDesign."
---
# WeaponDesign

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponDesign`
**Base:** none
**File:** `TaleWorlds.Core/WeaponDesign.cs`

## Overview

`WeaponDesign` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeaponName` | `public TextObject WeaponName { get; }` |
| `UsedPieces` | `public WeaponDesignElement UsedPieces { get; }` |
| `PiecePivotDistances` | `public float PiecePivotDistances { get; }` |
| `TotalLength` | `public float TotalLength { get; }` |
| `HandToBottomLength` | `public float HandToBottomLength { get; }` |
| `HashedCode` | `public string HashedCode { get; }` |
| `BottomPivotOffset` | `public float BottomPivotOffset { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of WeaponDesign from the subsystem API first
WeaponDesign weaponDesign = ...;
var result = weaponDesign.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of WeaponDesign from the subsystem API first
WeaponDesign weaponDesign = ...;
var result = weaponDesign.GetHashCode();
```

### SetWeaponName
`public void SetWeaponName(TextObject name)`

**Purpose:** **Purpose:** Assigns a new value to weapon name and updates the object's internal state.

```csharp
// Obtain an instance of WeaponDesign from the subsystem API first
WeaponDesign weaponDesign = ...;
weaponDesign.SetWeaponName(name);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeaponDesign weaponDesign = ...;
weaponDesign.Equals(obj);
```

## See Also

- [Area Index](../)
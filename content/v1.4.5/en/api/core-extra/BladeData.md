---
title: "BladeData"
description: "Auto-generated class reference for BladeData."
---
# BladeData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class BladeData : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/BladeData.cs`

## Overview

`BladeData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BladeData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ThrustDamageType` | `public DamageTypes ThrustDamageType { get; }` |
| `ThrustDamageFactor` | `public float ThrustDamageFactor { get; }` |
| `SwingDamageType` | `public DamageTypes SwingDamageType { get; }` |
| `SwingDamageFactor` | `public float SwingDamageFactor { get; }` |
| `BladeLength` | `public float BladeLength { get; }` |
| `BladeWidth` | `public float BladeWidth { get; }` |
| `StackAmount` | `public short StackAmount { get; }` |
| `PhysicsMaterial` | `public string PhysicsMaterial { get; }` |
| `BodyName` | `public string BodyName { get; }` |
| `HolsterMeshName` | `public string HolsterMeshName { get; }` |
| `HolsterBodyName` | `public string HolsterBodyName { get; }` |
| `HolsterMeshLength` | `public float HolsterMeshLength { get; }` |

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode childNode)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of BladeData from the subsystem API first
BladeData bladeData = ...;
bladeData.Deserialize(objectManager, childNode);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BladeData entry = ...;
```

## See Also

- [Area Index](../)
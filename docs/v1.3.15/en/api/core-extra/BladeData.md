<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BladeData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BladeData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class BladeData : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/BladeData.cs`

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

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new BladeData();
```

## See Also

- [Complete Class Catalog](../catalog)
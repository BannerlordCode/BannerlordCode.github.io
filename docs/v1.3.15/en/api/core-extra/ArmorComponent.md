<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmorComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmorComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ArmorComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `TaleWorlds.Core/ArmorComponent.cs`

## Overview

`ArmorComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ArmorComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeadArmor` | `public int HeadArmor { get; }` |
| `BodyArmor` | `public int BodyArmor { get; }` |
| `LegArmor` | `public int LegArmor { get; }` |
| `ArmArmor` | `public int ArmArmor { get; }` |
| `ManeuverBonus` | `public int ManeuverBonus { get; }` |
| `SpeedBonus` | `public int SpeedBonus { get; }` |
| `ChargeBonus` | `public int ChargeBonus { get; }` |
| `FamilyType` | `public int FamilyType { get; }` |
| `MultiMeshHasGenderVariations` | `public bool MultiMeshHasGenderVariations { get; }` |
| `MaterialType` | `public ArmorComponent.ArmorMaterialTypes MaterialType { get; }` |
| `MeshesMask` | `public SkinMask MeshesMask { get; }` |
| `BodyMeshType` | `public ArmorComponent.BodyMeshTypes BodyMeshType { get; }` |
| `BodyDeformType` | `public ArmorComponent.BodyDeformTypes BodyDeformType { get; }` |
| `HairCoverType` | `public ArmorComponent.HairCoverTypes HairCoverType { get; }` |
| `BeardCoverType` | `public ArmorComponent.BeardCoverTypes BeardCoverType { get; }` |
| `ManeCoverType` | `public ArmorComponent.HorseHarnessCoverTypes ManeCoverType { get; }` |
| `TailCoverType` | `public ArmorComponent.HorseTailCoverTypes TailCoverType { get; }` |
| `StealthFactor` | `public int StealthFactor { get; }` |
| `ReinsMesh` | `public string ReinsMesh { get; }` |
| `ReinsRopeMesh` | `public string ReinsRopeMesh { get; }` |

## Key Methods

### GetCopy
`public override ItemComponent GetCopy()`

**Purpose:** Gets the current value of `copy`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var component = agent.GetComponent<ArmorComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)
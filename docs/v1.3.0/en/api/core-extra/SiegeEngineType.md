<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEngineType`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeEngineType

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class SiegeEngineType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/SiegeEngineType.cs`

## Overview

`SiegeEngineType` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Difficulty` | `public int Difficulty { get; }` |
| `BaseHitPoints` | `public int BaseHitPoints { get; }` |
| `ToolCost` | `public int ToolCost { get; }` |
| `HitChance` | `public float HitChance { get; }` |
| `IsAntiPersonnel` | `public bool IsAntiPersonnel { get; }` |
| `AntiPersonnelHitChance` | `public float AntiPersonnelHitChance { get; }` |
| `IsConstructible` | `public bool IsConstructible { get; }` |
| `IsRanged` | `public bool IsRanged { get; }` |
| `Damage` | `public int Damage { get; }` |
| `ManDayCost` | `public int ManDayCost { get; }` |
| `CampaignRateOfFirePerDay` | `public float CampaignRateOfFirePerDay { get; }` |
| `MovementSpeed` | `public float MovementSpeed { get; }` |
| `ProjectileSpeed` | `public float ProjectileSpeed { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new SiegeEngineType();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MonsterMissionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MonsterMissionData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MonsterMissionData : IMonsterMissionData`
**Base:** `IMonsterMissionData`
**File:** `TaleWorlds.MountAndBlade/MonsterMissionData.cs`

## Overview

`MonsterMissionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MonsterMissionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Monster` | `public Monster Monster { get; }` |
| `BodyCapsule` | `public CapsuleData BodyCapsule { get; }` |
| `CrouchedBodyCapsule` | `public CapsuleData CrouchedBodyCapsule { get; }` |
| `ActionSet` | `public MBActionSet ActionSet { get; }` |
| `FemaleActionSet` | `public MBActionSet FemaleActionSet { get; }` |

## Usage Example

```csharp
var value = new MonsterMissionData();
```

## See Also

- [Complete Class Catalog](../catalog)
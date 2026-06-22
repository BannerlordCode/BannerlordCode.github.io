<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MonsterMissionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MonsterMissionData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MonsterMissionData : IMonsterMissionData`
**Base:** `IMonsterMissionData`
**File:** `TaleWorlds.MountAndBlade/MonsterMissionData.cs`

## Overview

`MonsterMissionData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

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
// Typical usage of MonsterMissionData (Data)
new MonsterMissionData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
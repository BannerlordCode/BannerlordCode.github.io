<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CombatLogData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatLogData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CombatLogData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CombatLogData.cs`

## Overview

`CombatLogData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `TotalDamage` | `public int TotalDamage { get; set; }` |
| `AttackProgress` | `public float AttackProgress { get; set; }` |

## Key Methods

### GetLogString
```csharp
public List<ValueTuple<string, uint>> GetLogString()
```

### SetVictimAgent
```csharp
public void SetVictimAgent(Agent victimAgent)
```

## Usage Example

```csharp
// Typical usage of CombatLogData (Data)
new CombatLogData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
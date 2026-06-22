<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FactionManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FactionManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FactionManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/FactionManager.cs`

## Overview

`FactionManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static FactionManager Instance { get; }` |

## Key Methods

### DeclareWar
```csharp
public static void DeclareWar(IFaction faction1, IFaction faction2)
```

### SetNeutral
```csharp
public static void SetNeutral(IFaction faction1, IFaction faction2)
```

### IsAtWarAgainstFaction
```csharp
public static bool IsAtWarAgainstFaction(IFaction faction1, IFaction faction2)
```

### IsAtConstantWarAgainstFaction
```csharp
public static bool IsAtConstantWarAgainstFaction(IFaction faction1, IFaction faction2)
```

### IsNeutralWithFaction
```csharp
public static bool IsNeutralWithFaction(IFaction faction1, IFaction faction2)
```

### GetRelationBetweenClans
```csharp
public static int GetRelationBetweenClans(Clan clan1, Clan clan2)
```

## Usage Example

```csharp
// Typical usage of FactionManager (Manager)
FactionManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
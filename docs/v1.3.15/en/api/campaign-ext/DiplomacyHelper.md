<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DiplomacyHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DiplomacyHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `DiplomacyHelper` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### IsWarCausedByPlayer

```csharp
public static bool IsWarCausedByPlayer(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)
```

### IsSameFactionAndNotEliminated

```csharp
public static bool IsSameFactionAndNotEliminated(IFaction faction1, IFaction faction2)
```

### GetLogsForWar

```csharp
public static List<ValueTuple<LogEntry, IFaction, IFaction>> GetLogsForWar(StanceLink stance)
```

### GetPrisonersOfWarTakenByFaction

```csharp
public static List<Hero> GetPrisonersOfWarTakenByFaction(IFaction capturerFaction, IFaction prisonerFaction)
```

### DidMainHeroSwornNotToAttackFaction

```csharp
public static bool DidMainHeroSwornNotToAttackFaction(IFaction faction, out TextObject explanation)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSiegeStrategies`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeStrategies

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeStrategies`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Siege/DefaultSiegeStrategies.cs`

## Overview

`DefaultSiegeStrategies` lives in `TaleWorlds.CampaignSystem.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PreserveStrength` | `public static SiegeStrategy PreserveStrength { get; }` |
| `PrepareAgainstAssault` | `public static SiegeStrategy PrepareAgainstAssault { get; }` |
| `CounterBombardment` | `public static SiegeStrategy CounterBombardment { get; }` |
| `PrepareAssault` | `public static SiegeStrategy PrepareAssault { get; }` |
| `BreachWalls` | `public static SiegeStrategy BreachWalls { get; }` |
| `WearOutDefenders` | `public static SiegeStrategy WearOutDefenders { get; }` |
| `Custom` | `public static SiegeStrategy Custom { get; }` |
| `AllAttackerStrategies` | `public static IEnumerable<SiegeStrategy> AllAttackerStrategies { get; }` |
| `AllDefenderStrategies` | `public static IEnumerable<SiegeStrategy> AllDefenderStrategies { get; }` |

## Usage Example

```csharp
var value = new DefaultSiegeStrategies();
```

## See Also

- [Complete Class Catalog](../catalog)
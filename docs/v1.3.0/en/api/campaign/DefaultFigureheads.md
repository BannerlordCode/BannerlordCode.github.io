<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultFigureheads`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultFigureheads

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultFigureheads`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Naval/DefaultFigureheads.cs`

## Overview

`DefaultFigureheads` lives in `TaleWorlds.CampaignSystem.Naval` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Naval` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static DefaultFigureheads Instance { get; }` |
| `Hawk` | `public static Figurehead Hawk { get; }` |
| `Lion` | `public static Figurehead Lion { get; }` |
| `Dragon` | `public static Figurehead Dragon { get; }` |
| `WingsOfVictory` | `public static Figurehead WingsOfVictory { get; }` |
| `Ram` | `public static Figurehead Ram { get; }` |
| `SeaSerpent` | `public static Figurehead SeaSerpent { get; }` |
| `Viper` | `public static Figurehead Viper { get; }` |
| `SaberToothTiger` | `public static Figurehead SaberToothTiger { get; }` |
| `Siren` | `public static Figurehead Siren { get; }` |
| `Horse` | `public static Figurehead Horse { get; }` |
| `Turtle` | `public static Figurehead Turtle { get; }` |
| `Boar` | `public static Figurehead Boar { get; }` |
| `Oxen` | `public static Figurehead Oxen { get; }` |
| `Swan` | `public static Figurehead Swan { get; }` |
| `Deer` | `public static Figurehead Deer { get; }` |
| `Raven` | `public static Figurehead Raven { get; }` |
| `SeaHorse` | `public static Figurehead SeaHorse { get; }` |

## Usage Example

```csharp
var example = new DefaultFigureheads();
```

## See Also

- [Complete Class Catalog](../catalog)
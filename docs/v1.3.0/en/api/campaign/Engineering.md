<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Engineering`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Engineering

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Engineering`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Engineering` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Scaffolds` | `public static PerkObject Scaffolds { get; }` |
| `TorsionEngines` | `public static PerkObject TorsionEngines { get; }` |
| `SiegeWorks` | `public static PerkObject SiegeWorks { get; }` |
| `DungeonArchitect` | `public static PerkObject DungeonArchitect { get; }` |
| `Carpenters` | `public static PerkObject Carpenters { get; }` |
| `MilitaryPlanner` | `public static PerkObject MilitaryPlanner { get; }` |
| `WallBreaker` | `public static PerkObject WallBreaker { get; }` |
| `DreadfulSieger` | `public static PerkObject DreadfulSieger { get; }` |
| `Salvager` | `public static PerkObject Salvager { get; }` |
| `Foreman` | `public static PerkObject Foreman { get; }` |
| `Stonecutters` | `public static PerkObject Stonecutters { get; }` |
| `SiegeEngineer` | `public static PerkObject SiegeEngineer { get; }` |
| `CampBuilding` | `public static PerkObject CampBuilding { get; }` |
| `Battlements` | `public static PerkObject Battlements { get; }` |
| `EngineeringGuilds` | `public static PerkObject EngineeringGuilds { get; }` |
| `Apprenticeship` | `public static PerkObject Apprenticeship { get; }` |
| `Metallurgy` | `public static PerkObject Metallurgy { get; }` |
| `ImprovedTools` | `public static PerkObject ImprovedTools { get; }` |
| `Clockwork` | `public static PerkObject Clockwork { get; }` |
| `ArchitecturalCommisions` | `public static PerkObject ArchitecturalCommisions { get; }` |
| `Masterwork` | `public static PerkObject Masterwork { get; }` |

## Usage Example

```csharp
var example = new Engineering();
```

## See Also

- [Complete Class Catalog](../catalog)
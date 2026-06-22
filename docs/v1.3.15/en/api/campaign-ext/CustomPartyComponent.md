<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomPartyComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CustomPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/CustomPartyComponent.cs`

## Overview

`CustomPartyComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<CustomPartyComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomPartyBaseSpeed` | `public float CustomPartyBaseSpeed { get; set; }` |
| `AvoidHostileActions` | `public override bool AvoidHostileActions { get; }` |
| `Leader` | `public override Hero Leader { get; }` |
| `BaseSpeed` | `public float BaseSpeed { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `IsCreatedWithPartyTemplate` | `public bool IsCreatedWithPartyTemplate { get; }` |

## Key Methods

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

### CreateCustomPartyWithPartyTemplate
```csharp
public static MobileParty CreateCustomPartyWithPartyTemplate(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, PartyTemplateObject partyTemplate, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)
```

### CreateCustomPartyWithPartyTemplate
```csharp
public static MobileParty CreateCustomPartyWithPartyTemplate(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, PartyTemplateObject partyTemplate, Hero owner, Hero leader, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)
```

### CreateCustomPartyWithTroopRoster
```csharp
public static MobileParty CreateCustomPartyWithTroopRoster(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, TroopRoster troopRoster, TroopRoster prisonerRoster, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)
```

### ConvertPartyToCustomParty
```csharp
public static void ConvertPartyToCustomParty(MobileParty mobileParty, Settlement homeSettlement, TextObject name, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)
```

### SetBaseSpeed
```csharp
public void SetBaseSpeed(float speed)
```

### GetMountAndHarnessVisualIdsForPartyIcon
```csharp
public override void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)
```

### InitializeCustomPartyPropertiesWithPartyTemplate
```csharp
public void InitializeCustomPartyPropertiesWithPartyTemplate(MobileParty mobileParty)
```

### InitializeCustomPartyPropertiesWithTroopRoster
```csharp
public void InitializeCustomPartyPropertiesWithTroopRoster(MobileParty mobileParty)
```

## Usage Example

```csharp
// Typical usage of CustomPartyComponent (Component)
agent.GetComponent<CustomPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)
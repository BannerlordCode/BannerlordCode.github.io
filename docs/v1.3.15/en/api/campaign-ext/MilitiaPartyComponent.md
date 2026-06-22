<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MilitiaPartyComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MilitiaPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MilitiaPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/MilitiaPartyComponent.cs`

## Overview

`MilitiaPartyComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MilitiaPartyComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |

## Key Methods

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

### CreateMilitiaParty
```csharp
public static MobileParty CreateMilitiaParty(string stringId, Settlement settlement)
```

### ConvertPartyToMilitiaParty
```csharp
public static void ConvertPartyToMilitiaParty(MobileParty mobileParty, Settlement settlement)
```

### ClearCachedName
```csharp
public override void ClearCachedName()
```

### InitializeMilitiaPartyProperties
```csharp
public void InitializeMilitiaPartyProperties(MobileParty mobileParty, Settlement settlement)
```

## Usage Example

```csharp
// Typical usage of MilitiaPartyComponent (Component)
agent.GetComponent<MilitiaPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)
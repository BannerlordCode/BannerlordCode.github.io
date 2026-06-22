<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GarrisonPartyComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GarrisonPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GarrisonPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/GarrisonPartyComponent.cs`

## Overview

`GarrisonPartyComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<GarrisonPartyComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `WagePaymentLimit` | `public override int WagePaymentLimit { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |

## Key Methods

### CreateGarrisonParty
```csharp
public static MobileParty CreateGarrisonParty(string stringId, Settlement settlement)
```

### ConvertPartyToGarrisonParty
```csharp
public static void ConvertPartyToGarrisonParty(MobileParty mobileParty, Settlement settlement)
```

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

### SetWagePaymentLimit
```csharp
public override void SetWagePaymentLimit(int newLimit)
```

### ClearCachedName
```csharp
public override void ClearCachedName()
```

### InitializeGarrisonPartyProperties
```csharp
public void InitializeGarrisonPartyProperties(MobileParty mobileParty, Settlement settlement)
```

## Usage Example

```csharp
// Typical usage of GarrisonPartyComponent (Component)
agent.GetComponent<GarrisonPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncounterManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncounterManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class EncounterManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/EncounterManager.cs`

## Overview

`EncounterManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `EncounterModel` | `public static EncounterModel EncounterModel { get; }` |

## Key Methods

### Tick
```csharp
public static void Tick(float dt)
```

### HandleEncounterForMobileParty
```csharp
public static void HandleEncounterForMobileParty(MobileParty mobileParty, float dt)
```

### StartPartyEncounter
```csharp
public static void StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)
```

### StartSettlementEncounter
```csharp
public static void StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)
```

## Usage Example

```csharp
// Typical usage of EncounterManager (Manager)
EncounterManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEventManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEventManager

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEventManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeEventManager.cs`

## Overview

`SiegeEventManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `SiegeEvents` | `public MBReadOnlyList<SiegeEvent> SiegeEvents { get; }` |

## Key Methods

### StartSiegeEvent
```csharp
public SiegeEvent StartSiegeEvent(Settlement settlement, MobileParty besiegerParty)
```

### Tick
```csharp
public void Tick(float dt)
```

### OnAfterLoad
```csharp
public void OnAfterLoad()
```

## Usage Example

```csharp
// Typical usage of SiegeEventManager (Manager)
SiegeEventManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
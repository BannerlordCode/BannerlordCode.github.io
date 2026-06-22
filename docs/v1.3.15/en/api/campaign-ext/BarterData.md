<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterData

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs`

## Overview

`BarterData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `OffererMapFaction` | `public IFaction OffererMapFaction { get; }` |
| `OtherMapFaction` | `public IFaction OtherMapFaction { get; }` |
| `IsAiBarter` | `public bool IsAiBarter { get; }` |

## Key Methods

### AddBarterGroup
```csharp
public void AddBarterGroup(BarterGroup barterGroup)
```

### GetBarterGroups
```csharp
public List<BarterGroup> GetBarterGroups()
```

### GetBarterables
```csharp
public List<Barterable> GetBarterables()
```

### GetOfferedBarterables
```csharp
public List<Barterable> GetOfferedBarterables()
```

## Usage Example

```csharp
// Typical usage of BarterData (Data)
new BarterData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BarterData

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterData.cs`

## Overview

`BarterData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BarterData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAiBarter` | `public bool IsAiBarter { get; }` |

## Key Methods

### AddBarterGroup
`public void AddBarterGroup(BarterGroup barterGroup)`

**Purpose:** Adds `barter group` to the current collection or state.

### GetBarterGroups
`public List<BarterGroup> GetBarterGroups()`

**Purpose:** Gets the current value of `barter groups`.

### GetBarterables
`public List<Barterable> GetBarterables()`

**Purpose:** Gets the current value of `barterables`.

### GetOfferedBarterables
`public List<Barterable> GetOfferedBarterables()`

**Purpose:** Gets the current value of `offered barterables`.

## Usage Example

```csharp
var value = new BarterData();
```

## See Also

- [Complete Class Catalog](../catalog)
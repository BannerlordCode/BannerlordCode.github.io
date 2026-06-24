<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocatableSearchData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocatableSearchData

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct LocatableSearchData<T>`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Map/LocatableSearchData.cs`

## Overview

`LocatableSearchData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `LocatableSearchData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new LocatableSearchData();
```

## See Also

- [Complete Class Catalog](../catalog)
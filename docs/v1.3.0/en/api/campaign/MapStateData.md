<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapStateData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapStateData

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapStateData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameState/MapStateData.cs`

## Overview

`MapStateData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MapStateData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new MapStateData();
```

## See Also

- [Complete Class Catalog](../catalog)
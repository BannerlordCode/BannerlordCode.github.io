<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignData.cs`

## Overview

`CampaignData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CampaignData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new CampaignData();
```

## See Also

- [Complete Class Catalog](../catalog)
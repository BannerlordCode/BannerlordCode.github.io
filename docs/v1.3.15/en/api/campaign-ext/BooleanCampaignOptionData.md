<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BooleanCampaignOptionData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BooleanCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BooleanCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BooleanCampaignOptionData.cs`

## Overview

`BooleanCampaignOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BooleanCampaignOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDataType
`public override CampaignOptionDataType GetDataType()`

**Purpose:** Gets the current value of `data type`.

## Usage Example

```csharp
var value = new BooleanCampaignOptionData();
```

## See Also

- [Complete Class Catalog](../catalog)
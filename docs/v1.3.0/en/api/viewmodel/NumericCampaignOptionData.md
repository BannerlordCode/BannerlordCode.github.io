<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NumericCampaignOptionData`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NumericCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NumericCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/NumericCampaignOptionData.cs`

## Overview

`NumericCampaignOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `NumericCampaignOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinValue` | `public float MinValue { get; }` |
| `MaxValue` | `public float MaxValue { get; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; }` |

## Key Methods

### GetDataType
`public override CampaignOptionDataType GetDataType()`

**Purpose:** Gets the current value of `data type`.

## Usage Example

```csharp
var value = new NumericCampaignOptionData();
```

## See Also

- [Complete Class Catalog](../catalog)
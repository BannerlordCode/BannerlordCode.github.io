<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NumericCampaignOptionData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NumericCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NumericCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/NumericCampaignOptionData.cs`

## Overview

`NumericCampaignOptionData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinValue` | `public float MinValue { get; }` |
| `MaxValue` | `public float MaxValue { get; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; }` |

## Key Methods

### GetDataType
```csharp
public override CampaignOptionDataType GetDataType()
```

## Usage Example

```csharp
// Typical usage of NumericCampaignOptionData (Data)
new NumericCampaignOptionData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
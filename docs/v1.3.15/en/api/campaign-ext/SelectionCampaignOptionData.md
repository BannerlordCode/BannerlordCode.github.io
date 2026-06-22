<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SelectionCampaignOptionData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SelectionCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SelectionCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectionCampaignOptionData.cs`

## Overview

`SelectionCampaignOptionData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `Selections` | `public List<TextObject> Selections { get; }` |

## Key Methods

### GetDataType
```csharp
public override CampaignOptionDataType GetDataType()
```

## Usage Example

```csharp
// Typical usage of SelectionCampaignOptionData (Data)
new SelectionCampaignOptionData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
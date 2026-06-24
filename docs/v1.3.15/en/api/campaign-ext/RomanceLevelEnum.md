<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RomanceLevelEnum`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RomanceLevelEnum

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum RomanceLevelEnum`
**Area:** campaign-ext

## Overview

`RomanceLevelEnum` lives in `TaleWorlds.CampaignSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Ended` |
| `2` |
| `Rejection` |
| `Untested` |
| `FailedInCompatibility` |
| `FailedInPracticalities` |
| `MatchMadeByFamily` |
| `CourtshipStarted` |
| `CoupleDecidedThatTheyAreCompatible` |
| `CoupleAgreedOnMarriage` |

## Usage Example

```csharp
RomanceLevelEnum example = RomanceLevelEnum.Ended;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)

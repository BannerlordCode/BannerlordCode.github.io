<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaSortController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaSortController

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSortController`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaSortController.cs`

## Overview

`EncyclopediaSortController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Comparer` | `public EncyclopediaListItemComparerBase Comparer { get; }` |

## Usage Example

```csharp
// Typical usage of EncyclopediaSortController (Controller)
Mission.Current.GetMissionBehavior<EncyclopediaSortController>();
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignInformationManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignInformationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignInformationManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignInformationManager.cs`

## Overview

`CampaignInformationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CampaignInformationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnGameLoaded
`public void OnGameLoaded()`

**Purpose:** Called when the `game loaded` event is raised.

### NewMapNoticeAdded
`public void NewMapNoticeAdded(InformationData informationData)`

**Purpose:** Handles logic related to `new map notice added`.

## Usage Example

```csharp
var manager = CampaignInformationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
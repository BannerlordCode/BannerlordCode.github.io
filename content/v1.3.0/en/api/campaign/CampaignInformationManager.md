---
title: "CampaignInformationManager"
description: "Auto-generated class reference for CampaignInformationManager."
---
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

**Purpose:** Invoked when the `game loaded` event is raised.

```csharp
// Obtain an instance of CampaignInformationManager from the subsystem API first
CampaignInformationManager campaignInformationManager = ...;
campaignInformationManager.OnGameLoaded();
```

### NewMapNoticeAdded
`public void NewMapNoticeAdded(InformationData informationData)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignInformationManager from the subsystem API first
CampaignInformationManager campaignInformationManager = ...;
campaignInformationManager.NewMapNoticeAdded(informationData);
```

## Usage Example

```csharp
var manager = CampaignInformationManager.Current;
```

## See Also

- [Area Index](../)
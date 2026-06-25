---
title: "CampaignOptionsManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignOptionsManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignOptionsManager

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignOptionsManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionsManager.cs`

## Overview

`CampaignOptionsManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CampaignOptionsManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetOptionWithIdExists
`public static bool GetOptionWithIdExists(string identifier)`

**Purpose:** Gets the current value of `option with id exists`.

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### ClearCachedOptions
`public static void ClearCachedOptions()`

**Purpose:** Handles logic related to `clear cached options`.

### GetGameplayCampaignOptions
`public static List<ICampaignOptionData> GetGameplayCampaignOptions()`

**Purpose:** Gets the current value of `gameplay campaign options`.

### GetCharacterCreationCampaignOptions
`public static List<ICampaignOptionData> GetCharacterCreationCampaignOptions()`

**Purpose:** Gets the current value of `character creation campaign options`.

## Usage Example

```csharp
var manager = CampaignOptionsManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
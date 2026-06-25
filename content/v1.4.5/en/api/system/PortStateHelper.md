---
title: "PortStateHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PortStateHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PortStateHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PortStateHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/PortStateHelper.cs`

## Overview

`PortStateHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `PortStateHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OpenAsTrade
`public static void OpenAsTrade(Town town)`

**Purpose:** Handles logic related to `open as trade`.

### OpenAsLoot
`public static void OpenAsLoot(MBReadOnlyList<Ship> lootShips, Action onEndAction = null)`

**Purpose:** Handles logic related to `open as loot`.

### OpenAsRestricted
`public static void OpenAsRestricted(Town town, TextObject restrictedReason)`

**Purpose:** Handles logic related to `open as restricted`.

### OpenAsStoryMode
`public static void OpenAsStoryMode(Settlement settlement)`

**Purpose:** Handles logic related to `open as story mode`.

### OpenAsManageFleet
`public static void OpenAsManageFleet(MBReadOnlyList<Ship> leftShips)`

**Purpose:** Handles logic related to `open as manage fleet`.

### OpenAsManageOtherFleet
`public static void OpenAsManageOtherFleet(PartyBase other, Action onEndAction)`

**Purpose:** Handles logic related to `open as manage other fleet`.

## Usage Example

```csharp
PortStateHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
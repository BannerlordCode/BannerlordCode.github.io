<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNavigationHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapNavigationHelper

**Namespace:** SandBox.View.Map.Navigation
**Module:** SandBox.View
**Type:** `public static class MapNavigationHelper`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Navigation/MapNavigationHelper.cs`

## Overview

`MapNavigationHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MapNavigationHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetUnsavedChangedInquiry
`public static InquiryData GetUnsavedChangedInquiry(Action openNewScreenAction)`

**Purpose:** Gets the current value of `unsaved changed inquiry`.

### GetUnapplicableChangedInquiry
`public static InquiryData GetUnapplicableChangedInquiry()`

**Purpose:** Gets the current value of `unapplicable changed inquiry`.

### IsMapTopScreen
`public static bool IsMapTopScreen()`

**Purpose:** Handles logic related to `is map top screen`.

### IsNavigationBarEnabled
`public static bool IsNavigationBarEnabled(MapNavigationHandler handler)`

**Purpose:** Handles logic related to `is navigation bar enabled`.

### SwitchToANewScreen
`public static void SwitchToANewScreen(Action openNewScreenAction)`

**Purpose:** Handles logic related to `switch to a new screen`.

## Usage Example

```csharp
MapNavigationHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
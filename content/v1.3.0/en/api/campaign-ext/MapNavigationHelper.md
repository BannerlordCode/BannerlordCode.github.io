---
title: "MapNavigationHelper"
description: "Auto-generated class reference for MapNavigationHelper."
---
# MapNavigationHelper

**Namespace:** SandBox.View.Map.Navigation
**Module:** SandBox.View
**Type:** `public static class MapNavigationHelper`
**Base:** none
**File:** `SandBox.View/Map/Navigation/MapNavigationHelper.cs`

## Overview

`MapNavigationHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MapNavigationHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetUnsavedChangedInquiry
`public static InquiryData GetUnsavedChangedInquiry()`

**Purpose:** Reads and returns the `unsaved changed inquiry` value held by the current object.

```csharp
// Static call; no instance required
MapNavigationHelper.GetUnsavedChangedInquiry();
```

### GetUnapplicableChangedInquiry
`public static InquiryData GetUnapplicableChangedInquiry()`

**Purpose:** Reads and returns the `unapplicable changed inquiry` value held by the current object.

```csharp
// Static call; no instance required
MapNavigationHelper.GetUnapplicableChangedInquiry();
```

### IsMapTopScreen
`public static bool IsMapTopScreen()`

**Purpose:** Determines whether the current object is in the `map top screen` state or condition.

```csharp
// Static call; no instance required
MapNavigationHelper.IsMapTopScreen();
```

### IsNavigationBarEnabled
`public static bool IsNavigationBarEnabled(MapNavigationHandler handler)`

**Purpose:** Determines whether the current object is in the `navigation bar enabled` state or condition.

```csharp
// Static call; no instance required
MapNavigationHelper.IsNavigationBarEnabled(handler);
```

### ApplyCurrentChanges
`public static void ApplyCurrentChanges()`

**Purpose:** Applies the effect of `current changes` to the current object.

```csharp
// Static call; no instance required
MapNavigationHelper.ApplyCurrentChanges();
```

## Usage Example

```csharp
MapNavigationHelper.Initialize();
```

## See Also

- [Area Index](../)
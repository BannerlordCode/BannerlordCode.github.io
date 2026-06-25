---
title: "SteamParentalSettings"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamParentalSettings`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamParentalSettings

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamParentalSettings`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamParentalSettings.cs`

## Overview

`SteamParentalSettings` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BIsParentalLockEnabled
`public static bool BIsParentalLockEnabled()`

**Purpose:** Handles logic related to `b is parental lock enabled`.

### BIsParentalLockLocked
`public static bool BIsParentalLockLocked()`

**Purpose:** Handles logic related to `b is parental lock locked`.

### BIsAppBlocked
`public static bool BIsAppBlocked(AppId_t nAppID)`

**Purpose:** Handles logic related to `b is app blocked`.

### BIsAppInBlockList
`public static bool BIsAppInBlockList(AppId_t nAppID)`

**Purpose:** Handles logic related to `b is app in block list`.

### BIsFeatureBlocked
`public static bool BIsFeatureBlocked(EParentalFeature eFeature)`

**Purpose:** Handles logic related to `b is feature blocked`.

### BIsFeatureInBlockList
`public static bool BIsFeatureInBlockList(EParentalFeature eFeature)`

**Purpose:** Handles logic related to `b is feature in block list`.

## Usage Example

```csharp
SteamParentalSettings.BIsParentalLockEnabled();
```

## See Also

- [Complete Class Catalog](../catalog)
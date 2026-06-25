---
title: "PersuasionHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PersuasionHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PersuasionHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PersuasionHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/PersuasionHelper.cs`

## Overview

`PersuasionHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `PersuasionHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ShowSuccess
`public static TextObject ShowSuccess(PersuasionOptionArgs optionArgs, bool showToPlayer = true)`

**Purpose:** Handles logic related to `show success`.

### GetDefaultPersuasionOptionReaction
`public static TextObject GetDefaultPersuasionOptionReaction(PersuasionOptionResult optionResult)`

**Purpose:** Gets the current value of `default persuasion option reaction`.

## Usage Example

```csharp
PersuasionHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
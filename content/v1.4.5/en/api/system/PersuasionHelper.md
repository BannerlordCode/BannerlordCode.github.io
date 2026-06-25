---
title: "PersuasionHelper"
description: "Auto-generated class reference for PersuasionHelper."
---
# PersuasionHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PersuasionHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/PersuasionHelper.cs`

## Overview

`PersuasionHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `PersuasionHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ShowSuccess
`public static TextObject ShowSuccess(PersuasionOptionArgs optionArgs, bool showToPlayer = true)`

**Purpose:** Displays the UI or element associated with `success`.

```csharp
// Static call; no instance required
PersuasionHelper.ShowSuccess(optionArgs, false);
```

### GetDefaultPersuasionOptionReaction
`public static TextObject GetDefaultPersuasionOptionReaction(PersuasionOptionResult optionResult)`

**Purpose:** Reads and returns the `default persuasion option reaction` value held by the current object.

```csharp
// Static call; no instance required
PersuasionHelper.GetDefaultPersuasionOptionReaction(optionResult);
```

## Usage Example

```csharp
PersuasionHelper.Initialize();
```

## See Also

- [Area Index](../)
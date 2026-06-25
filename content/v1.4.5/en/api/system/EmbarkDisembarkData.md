---
title: "EmbarkDisembarkData"
description: "Auto-generated class reference for EmbarkDisembarkData."
---
# EmbarkDisembarkData

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public class EmbarkDisembarkData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## Overview

`EmbarkDisembarkData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `EmbarkDisembarkData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
EmbarkDisembarkData entry = ...;
```

## See Also

- [Area Index](../)
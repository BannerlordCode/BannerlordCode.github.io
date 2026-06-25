---
title: "EmbarkDisembarkData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EmbarkDisembarkData`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EmbarkDisembarkData

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public class EmbarkDisembarkData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## Overview

`EmbarkDisembarkData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `EmbarkDisembarkData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new EmbarkDisembarkData();
```

## See Also

- [Complete Class Catalog](../catalog)
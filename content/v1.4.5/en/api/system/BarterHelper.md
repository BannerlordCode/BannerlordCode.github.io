---
title: "BarterHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BarterHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class BarterHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/BarterHelper.cs`

## Overview

`BarterHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `BarterHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
BarterHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
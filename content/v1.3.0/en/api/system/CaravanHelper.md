---
title: "CaravanHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CaravanHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CaravanHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class CaravanHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/CaravanHelper.cs`

## Overview

`CaravanHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `CaravanHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetRandomCaravanTemplate
`public static PartyTemplateObject GetRandomCaravanTemplate(CultureObject culture, bool isElite, bool isLand)`

**Purpose:** Gets the current value of `random caravan template`.

## Usage Example

```csharp
CaravanHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
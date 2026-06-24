<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IncidentHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IncidentHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class IncidentHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/IncidentHelper.cs`

## Overview

`IncidentHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `IncidentHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IncidentHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
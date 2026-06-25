---
title: "BoardGameHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoardGameHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class BoardGameHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`

## Overview

`BoardGameHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `BoardGameHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
BoardGameHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
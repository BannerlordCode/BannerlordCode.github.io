<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TooltipHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public class TooltipHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/TooltipHelper.cs`

## Overview

`TooltipHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `TooltipHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSendTroopsPowerContextTooltipForMapEvent
`public static TextObject GetSendTroopsPowerContextTooltipForMapEvent()`

**Purpose:** Gets the current value of `send troops power context tooltip for map event`.

### GetSendTroopsPowerContextTooltipForSiege
`public static TextObject GetSendTroopsPowerContextTooltipForSiege()`

**Purpose:** Gets the current value of `send troops power context tooltip for siege`.

## Usage Example

```csharp
TooltipHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
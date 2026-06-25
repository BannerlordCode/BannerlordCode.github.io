---
title: "TooltipHelper"
description: "Auto-generated class reference for TooltipHelper."
---
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

**Purpose:** **Purpose:** Reads and returns the send troops power context tooltip for map event value held by the this instance.

```csharp
// Static call; no instance required
TooltipHelper.GetSendTroopsPowerContextTooltipForMapEvent();
```

### GetSendTroopsPowerContextTooltipForSiege
`public static TextObject GetSendTroopsPowerContextTooltipForSiege()`

**Purpose:** **Purpose:** Reads and returns the send troops power context tooltip for siege value held by the this instance.

```csharp
// Static call; no instance required
TooltipHelper.GetSendTroopsPowerContextTooltipForSiege();
```

## Usage Example

```csharp
TooltipHelper.Initialize();
```

## See Also

- [Area Index](../)
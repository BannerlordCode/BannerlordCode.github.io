---
title: "FleeingData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FleeingData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FleeingData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FleeingData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Party/MobilePartyAi.cs`

## Overview

`FleeingData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FleeingData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
var value = new FleeingData();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "PlayerAlleyData"
description: "Auto-generated class reference for PlayerAlleyData."
---
# PlayerAlleyData

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `internal class PlayerAlleyData`
**Base:** none
**File:** `SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs`

## Overview

`PlayerAlleyData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PlayerAlleyData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
PlayerAlleyData entry = ...;
```

## See Also

- [Area Index](../../)
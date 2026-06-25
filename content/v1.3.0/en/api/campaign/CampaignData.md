---
title: "CampaignData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignData.cs`

## Overview

`CampaignData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CampaignData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NeutralFactionName` | `public static TextObject NeutralFactionName { get; }` |

## Usage Example

```csharp
var value = new CampaignData();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "CampaignData"
description: "Auto-generated class reference for CampaignData."
---
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
// This data object is usually returned by campaign/mission APIs
CampaignData entry = ...;
```

## See Also

- [Area Index](../)
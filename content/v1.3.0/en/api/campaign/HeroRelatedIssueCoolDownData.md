---
title: "HeroRelatedIssueCoolDownData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroRelatedIssueCoolDownData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeroRelatedIssueCoolDownData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroRelatedIssueCoolDownData : IssueCoolDownData`
**Base:** `IssueCoolDownData`
**File:** `TaleWorlds.CampaignSystem/Issues/HeroRelatedIssueCoolDownData.cs`

## Overview

`HeroRelatedIssueCoolDownData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `HeroRelatedIssueCoolDownData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsRelatedTo
`public override bool IsRelatedTo(object obj)`

**Purpose:** Handles logic related to `is related to`.

### IsValid
`public override bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

## Usage Example

```csharp
var value = new HeroRelatedIssueCoolDownData();
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IssueCoolDownData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IssueCoolDownData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueCoolDownData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/IssueCoolDownData.cs`

## Overview

`IssueCoolDownData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `IssueCoolDownData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsValid
`public virtual bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

### IsRelatedTo
`public abstract bool IsRelatedTo(object obj)`

**Purpose:** Handles logic related to `is related to`.

## Usage Example

```csharp
var implementation = new CustomIssueCoolDownData();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "PotentialIssueData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PotentialIssueData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PotentialIssueData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct PotentialIssueData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/PotentialIssueData.cs`

## Overview

`PotentialIssueData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PotentialIssueData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OnStartIssue` | `public PotentialIssueData.StartIssueDelegate OnStartIssue { get; }` |
| `IssueId` | `public string IssueId { get; }` |
| `IssueType` | `public Type IssueType { get; }` |
| `Frequency` | `public IssueBase.IssueFrequency Frequency { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### StartIssueDelegate
`public delegate IssueBase StartIssueDelegate(in PotentialIssueData pid, Hero issueOwner)`

**Purpose:** Handles logic related to `start issue delegate`.

## Usage Example

```csharp
var value = new PotentialIssueData();
```

## See Also

- [Complete Class Catalog](../catalog)
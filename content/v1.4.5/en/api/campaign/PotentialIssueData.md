---
title: "PotentialIssueData"
description: "Auto-generated class reference for PotentialIssueData."
---
# PotentialIssueData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct PotentialIssueData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/PotentialIssueData.cs`

## Overview

`PotentialIssueData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PotentialIssueData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OnStartIssue` | `public StartIssueDelegate OnStartIssue { get; }` |
| `IssueId` | `public string IssueId { get; }` |
| `IssueType` | `public Type IssueType { get; }` |
| `Frequency` | `public IssueBase.IssueFrequency Frequency { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |

## Key Methods

### StartIssueDelegate
`public delegate IssueBase StartIssueDelegate(in PotentialIssueData pid, Hero issueOwner)`

**Purpose:** Starts the `issue delegate` flow or state machine.

```csharp
// Obtain an instance of PotentialIssueData from the subsystem API first
PotentialIssueData potentialIssueData = ...;
var result = potentialIssueData.StartIssueDelegate(pid, issueOwner);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
PotentialIssueData entry = ...;
```

## See Also

- [Area Index](../)
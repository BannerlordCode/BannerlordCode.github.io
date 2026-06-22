<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PotentialIssueData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PotentialIssueData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct PotentialIssueData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/PotentialIssueData.cs`

## Overview

`PotentialIssueData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

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
```csharp
public delegate IssueBase StartIssueDelegate(in PotentialIssueData pid, Hero issueOwner)
```

## Usage Example

```csharp
// Typical usage of PotentialIssueData (Data)
new PotentialIssueData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
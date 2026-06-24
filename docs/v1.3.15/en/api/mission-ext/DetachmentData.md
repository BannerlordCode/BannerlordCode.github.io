<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DetachmentData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DetachmentData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DetachmentData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DetachmentData.cs`

## Overview

`DetachmentData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `DetachmentData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentCount` | `public int AgentCount { get; }` |

## Key Methods

### IsPrecalculated
`public bool IsPrecalculated()`

**Purpose:** Handles logic related to `is precalculated`.

### RemoveScoreOfAgent
`public void RemoveScoreOfAgent(Agent agent)`

**Purpose:** Removes `score of agent` from the current collection or state.

## Usage Example

```csharp
var value = new DetachmentData();
```

## See Also

- [Complete Class Catalog](../catalog)
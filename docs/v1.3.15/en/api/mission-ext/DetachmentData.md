<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DetachmentData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DetachmentData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DetachmentData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DetachmentData.cs`

## Overview

`DetachmentData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentCount` | `public int AgentCount { get; }` |

## Key Methods

### IsPrecalculated
```csharp
public bool IsPrecalculated()
```

### RemoveScoreOfAgent
```csharp
public void RemoveScoreOfAgent(Agent agent)
```

## Usage Example

```csharp
// Typical usage of DetachmentData (Data)
new DetachmentData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
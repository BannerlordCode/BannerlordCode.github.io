<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IssueCoolDownData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IssueCoolDownData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueCoolDownData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/IssueCoolDownData.cs`

## Overview

`IssueCoolDownData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### IsValid
```csharp
public virtual bool IsValid()
```

### IsRelatedTo
```csharp
public abstract bool IsRelatedTo(object obj)
```

## Usage Example

```csharp
// Typical usage of IssueCoolDownData (Data)
new IssueCoolDownData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
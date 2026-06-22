<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AIBehaviorData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AIBehaviorData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct AIBehaviorData : IEquatable<AIBehaviorData>`
**Base:** `IEquatable<AIBehaviorData>`
**File:** `TaleWorlds.CampaignSystem/AIBehaviorData.cs`

## Overview

`AIBehaviorData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### Equals
```csharp
public override bool Equals(object obj)
```

### Equals
```csharp
public bool Equals(AIBehaviorData other)
```

### GetHashCode
```csharp
public override int GetHashCode()
```

## Usage Example

```csharp
// Typical usage of AIBehaviorData (Data)
new AIBehaviorData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
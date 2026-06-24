<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AIBehaviorData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AIBehaviorData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct AIBehaviorData : IEquatable<AIBehaviorData>`
**Base:** `IEquatable<AIBehaviorData>`
**File:** `TaleWorlds.CampaignSystem/AIBehaviorData.cs`

## Overview

`AIBehaviorData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AIBehaviorData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public bool Equals(AIBehaviorData other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new AIBehaviorData();
```

## See Also

- [Complete Class Catalog](../catalog)
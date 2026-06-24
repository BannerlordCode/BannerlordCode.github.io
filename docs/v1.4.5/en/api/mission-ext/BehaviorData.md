<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BehaviorData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationAI.cs`

## Overview

`BehaviorData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BehaviorData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new BehaviorData();
```

## See Also

- [Complete Class Catalog](../catalog)
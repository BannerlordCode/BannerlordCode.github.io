<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentSpawnData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentSpawnData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AgentSpawnData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AgentSpawnData.cs`

## Overview

`AgentSpawnData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AgentSpawnData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new AgentSpawnData();
```

## See Also

- [Complete Class Catalog](../catalog)
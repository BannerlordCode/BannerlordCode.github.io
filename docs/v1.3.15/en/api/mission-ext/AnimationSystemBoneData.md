<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimationSystemBoneData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnimationSystemBoneData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AnimationSystemBoneData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AnimationSystemBoneData.cs`

## Overview

`AnimationSystemBoneData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AnimationSystemBoneData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new AnimationSystemBoneData();
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoneBodyTypeData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoneBodyTypeData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BoneBodyTypeData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BoneBodyTypeData.cs`

## Overview

`BoneBodyTypeData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BoneBodyTypeData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new BoneBodyTypeData();
```

## See Also

- [Complete Class Catalog](../catalog)
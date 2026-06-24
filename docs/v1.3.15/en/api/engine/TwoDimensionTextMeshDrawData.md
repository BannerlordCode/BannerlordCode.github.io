<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TwoDimensionTextMeshDrawData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoDimensionTextMeshDrawData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct TwoDimensionTextMeshDrawData`
**Base:** none
**File:** `TaleWorlds.Engine/TwoDimensionTextMeshDrawData.cs`

## Overview

`TwoDimensionTextMeshDrawData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TwoDimensionTextMeshDrawData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new TwoDimensionTextMeshDrawData();
```

## See Also

- [Complete Class Catalog](../catalog)
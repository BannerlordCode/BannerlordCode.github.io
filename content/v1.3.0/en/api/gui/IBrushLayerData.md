---
title: "IBrushLayerData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IBrushLayerData`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IBrushLayerData

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushLayerData.cs`

## Overview

`IBrushLayerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `IBrushLayerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IBrushLayerData implementation = GetBrushLayerDataImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
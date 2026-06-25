---
title: "IBrushLayerData"
description: "Auto-generated class reference for IBrushLayerData."
---
# IBrushLayerData

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public interface IBrushLayerData`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/IBrushLayerData.cs`

## Overview

`IBrushLayerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `IBrushLayerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIBrushLayerData service = ...;
```

## See Also

- [Area Index](../)
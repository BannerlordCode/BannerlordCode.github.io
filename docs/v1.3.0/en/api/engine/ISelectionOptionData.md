<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISelectionOptionData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISelectionOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.Engine/Options/ISelectionOptionData.cs`

## Overview

`ISelectionOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ISelectionOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ISelectionOptionData implementation = GetSelectionOptionDataImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
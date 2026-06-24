<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `INumericOptionData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# INumericOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.Engine/Options/INumericOptionData.cs`

## Overview

`INumericOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `INumericOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
INumericOptionData implementation = GetNumericOptionDataImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
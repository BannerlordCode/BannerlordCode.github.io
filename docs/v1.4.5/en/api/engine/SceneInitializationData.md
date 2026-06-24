<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneInitializationData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SceneInitializationData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct SceneInitializationData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/SceneInitializationData.cs`

## Overview

`SceneInitializationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SceneInitializationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new SceneInitializationData();
```

## See Also

- [Complete Class Catalog](../catalog)
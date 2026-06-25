---
title: "ICallbackManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICallbackManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ICallbackManager

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.DotNet/ICallbackManager.cs`

## Overview

`ICallbackManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ICallbackManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ICallbackManager implementation = GetCallbackManagerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "IManagedComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IManagedComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IManagedComponent

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.DotNet/IManagedComponent.cs`

## Overview

`IManagedComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `IManagedComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IManagedComponent implementation = GetManagedComponentImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
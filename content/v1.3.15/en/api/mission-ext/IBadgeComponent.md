---
title: "IBadgeComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IBadgeComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IBadgeComponent

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/IBadgeComponent.cs`

## Overview

`IBadgeComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `IBadgeComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IBadgeComponent implementation = GetBadgeComponentImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
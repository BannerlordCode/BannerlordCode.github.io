---
title: "ScreenComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScreenComponent`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScreenComponent

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public class ScreenComponent`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenComponent.cs`

## Overview

`ScreenComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ScreenComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var component = agent.GetComponent<ScreenComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)
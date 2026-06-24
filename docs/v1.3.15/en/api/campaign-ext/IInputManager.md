<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IInputManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IInputManager

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.InputSystem/IInputManager.cs`

## Overview

`IInputManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IInputManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IInputManager implementation = GetInputManagerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
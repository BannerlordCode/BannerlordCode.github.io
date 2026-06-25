---
title: "ITelemetryManager"
description: "Auto-generated class reference for ITelemetryManager."
---
# ITelemetryManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public interface ITelemetryManager`
**Base:** none
**File:** `TaleWorlds.Library/ITelemetryManager.cs`

## Overview

`ITelemetryManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ITelemetryManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IITelemetryManager service = ...;
```

## See Also

- [Area Index](../)
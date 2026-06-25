---
title: "CallbackStringBufferManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CallbackStringBufferManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CallbackStringBufferManager

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class CallbackStringBufferManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/CallbackStringBufferManager.cs`

## Overview

`CallbackStringBufferManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CallbackStringBufferManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var manager = CallbackStringBufferManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
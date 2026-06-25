---
title: "IMissionPlayerFollowerHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IMissionPlayerFollowerHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IMissionPlayerFollowerHandler

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.GameComponents/IMissionPlayerFollowerHandler.cs`

## Overview

`IMissionPlayerFollowerHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IMissionPlayerFollowerHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IMissionPlayerFollowerHandler implementation = GetMissionPlayerFollowerHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
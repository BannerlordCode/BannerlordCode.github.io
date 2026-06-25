---
title: "IFaceGeneratorHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IFaceGeneratorHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IFaceGeneratorHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IFaceGeneratorHandler.cs`

## Overview

`IFaceGeneratorHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IFaceGeneratorHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IFaceGeneratorHandler implementation = GetFaceGeneratorHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
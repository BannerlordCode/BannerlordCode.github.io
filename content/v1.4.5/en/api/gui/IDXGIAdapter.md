---
title: "IDXGIAdapter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IDXGIAdapter`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IDXGIAdapter

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public interface IDXGIAdapter`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.Windows/DXGI.cs`

## Overview

`IDXGIAdapter` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IDXGIAdapter implementation = GetDXGIAdapterImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
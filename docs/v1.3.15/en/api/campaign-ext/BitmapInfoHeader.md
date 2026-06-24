<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BitmapInfoHeader`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BitmapInfoHeader

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct BitmapInfoHeader`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/BitmapInfoHeader.cs`

## Overview

`BitmapInfoHeader` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new BitmapInfoHeader();
```

## See Also

- [Complete Class Catalog](../catalog)
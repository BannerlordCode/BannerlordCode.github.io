<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OpenGlLoadException`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OpenGlLoadException

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.OpenGL
**Module:** TaleWorlds.TwoDimension
**Type:** `public class OpenGlLoadException : Exception`
**Base:** `Exception`
**File:** `TaleWorlds.TwoDimension.Standalone/Native/OpenGL/OpenGlLoadException.cs`

## Overview

`OpenGlLoadException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `OpenGlLoadException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallOpenGlLoadException(); } catch (OpenGlLoadException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)
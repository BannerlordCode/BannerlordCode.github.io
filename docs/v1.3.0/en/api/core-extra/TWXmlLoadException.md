<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TWXmlLoadException`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TWXmlLoadException

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TWXmlLoadException : TWException`
**Base:** `TWException`
**File:** `TaleWorlds.Library/TWXmlLoadException.cs`

## Overview

`TWXmlLoadException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `TWXmlLoadException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallTWXmlLoadException(); } catch (TWXmlLoadException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)
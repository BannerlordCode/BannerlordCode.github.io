<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RichTextException`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RichTextException

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class RichTextException : Exception`
**Base:** `Exception`
**File:** `TaleWorlds.TwoDimension/RichTextException.cs`

## Overview

`RichTextException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `RichTextException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallRichTextException(); } catch (RichTextException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)
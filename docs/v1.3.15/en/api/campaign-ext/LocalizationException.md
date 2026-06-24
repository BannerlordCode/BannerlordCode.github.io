<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocalizationException`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocalizationException

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class LocalizationException : Exception`
**Base:** `Exception`
**File:** `TaleWorlds.Localization/LocalizationException.cs`

## Overview

`LocalizationException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `LocalizationException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallLocalizationException(); } catch (LocalizationException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "IntegrityException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IntegrityException`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IntegrityException

**Namespace:** Jose
**Module:** Jose
**Type:** `public class IntegrityException : JoseException`
**Base:** `JoseException`
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/IntegrityException.cs`

## Overview

`IntegrityException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `IntegrityException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallIntegrityException(); } catch (IntegrityException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)
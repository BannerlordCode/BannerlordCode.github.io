<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncryptionException`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncryptionException

**Namespace:** Jose
**Module:** Jose
**Type:** `public class EncryptionException : JoseException`
**Base:** `JoseException`
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/EncryptionException.cs`

## Overview

`EncryptionException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `EncryptionException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallEncryptionException(); } catch (EncryptionException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)
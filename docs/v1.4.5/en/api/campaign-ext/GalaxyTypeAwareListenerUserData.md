<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GalaxyTypeAwareListenerUserData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GalaxyTypeAwareListenerUserData

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class GalaxyTypeAwareListenerUserData : IGalaxyListener`
**Base:** `IGalaxyListener`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/GalaxyTypeAwareListenerUserData.cs`

## Overview

`GalaxyTypeAwareListenerUserData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `GalaxyTypeAwareListenerUserData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### GetListenerType
`public static ListenerType GetListenerType()`

**Purpose:** Gets the current value of `listener type`.

## Usage Example

```csharp
var implementation = new CustomGalaxyTypeAwareListenerUserData();
```

## See Also

- [Complete Class Catalog](../catalog)
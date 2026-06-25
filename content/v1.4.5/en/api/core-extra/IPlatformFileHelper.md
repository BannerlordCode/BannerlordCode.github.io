---
title: "IPlatformFileHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IPlatformFileHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IPlatformFileHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/IPlatformFileHelper.cs`

## Overview

`IPlatformFileHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `IPlatformFileHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IPlatformFileHelper implementation = GetPlatformFileHelperImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
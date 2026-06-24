<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UiStringHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UiStringHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class UiStringHelper`
**Base:** none
**File:** `TaleWorlds.Library/UiStringHelper.cs`

## Overview

`UiStringHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `UiStringHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsStringNoneOrEmptyForUi
`public static bool IsStringNoneOrEmptyForUi(string str)`

**Purpose:** Handles logic related to `is string none or empty for ui`.

## Usage Example

```csharp
UiStringHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
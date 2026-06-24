<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HttpDriverManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HttpDriverManager

**Namespace:** TaleWorlds.Library.Http
**Module:** TaleWorlds.Library
**Type:** `public static class HttpDriverManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library.Http/HttpDriverManager.cs`

## Overview

`HttpDriverManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `HttpDriverManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddHttpDriver
`public static void AddHttpDriver(string name, IHttpDriver driver)`

**Purpose:** Adds `http driver` to the current collection or state.

### SetDefault
`public static void SetDefault(string name)`

**Purpose:** Sets the value or state of `default`.

### GetHttpDriver
`public static IHttpDriver GetHttpDriver(string name)`

**Purpose:** Gets the current value of `http driver`.

### GetDefaultHttpDriver
`public static IHttpDriver GetDefaultHttpDriver()`

**Purpose:** Gets the current value of `default http driver`.

## Usage Example

```csharp
var manager = HttpDriverManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "HttpDriverManager"
description: "Auto-generated class reference for HttpDriverManager."
---
# HttpDriverManager

**Namespace:** TaleWorlds.Library.Http
**Module:** TaleWorlds.Library
**Type:** `public static class HttpDriverManager`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library.Http/HttpDriverManager.cs`

## Overview

`HttpDriverManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `HttpDriverManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddHttpDriver
`public static void AddHttpDriver(string name, IHttpDriver driver)`

**Purpose:** Adds http driver to the current collection or state.

```csharp
// Static call; no instance required
HttpDriverManager.AddHttpDriver("example", driver);
```

### SetDefault
`public static void SetDefault(string name)`

**Purpose:** Assigns a new value to default and updates the object's internal state.

```csharp
// Static call; no instance required
HttpDriverManager.SetDefault("example");
```

### GetHttpDriver
`public static IHttpDriver GetHttpDriver(string name)`

**Purpose:** Reads and returns the http driver value held by the this instance.

```csharp
// Static call; no instance required
HttpDriverManager.GetHttpDriver("example");
```

### GetDefaultHttpDriver
`public static IHttpDriver GetDefaultHttpDriver()`

**Purpose:** Reads and returns the default http driver value held by the this instance.

```csharp
// Static call; no instance required
HttpDriverManager.GetDefaultHttpDriver();
```

## Usage Example

```csharp
var manager = HttpDriverManager.Current;
```

## See Also

- [Area Index](../)
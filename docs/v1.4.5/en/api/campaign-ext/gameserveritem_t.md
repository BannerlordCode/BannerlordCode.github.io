<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `gameserveritem_t`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# gameserveritem_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public class gameserveritem_t`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/gameserveritem_t.cs`

## Overview

`gameserveritem_t` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGameDir
`public string GetGameDir()`

**Purpose:** Gets the current value of `game dir`.

### SetGameDir
`public void SetGameDir(string dir)`

**Purpose:** Sets the value or state of `game dir`.

### GetMap
`public string GetMap()`

**Purpose:** Gets the current value of `map`.

### SetMap
`public void SetMap(string map)`

**Purpose:** Sets the value or state of `map`.

### GetGameDescription
`public string GetGameDescription()`

**Purpose:** Gets the current value of `game description`.

### SetGameDescription
`public void SetGameDescription(string desc)`

**Purpose:** Sets the value or state of `game description`.

### GetServerName
`public string GetServerName()`

**Purpose:** Gets the current value of `server name`.

### SetServerName
`public void SetServerName(string name)`

**Purpose:** Sets the value or state of `server name`.

### GetGameTags
`public string GetGameTags()`

**Purpose:** Gets the current value of `game tags`.

### SetGameTags
`public void SetGameTags(string tags)`

**Purpose:** Sets the value or state of `game tags`.

## Usage Example

```csharp
var value = new gameserveritem_t();
value.GetGameDir();
```

## See Also

- [Complete Class Catalog](../catalog)
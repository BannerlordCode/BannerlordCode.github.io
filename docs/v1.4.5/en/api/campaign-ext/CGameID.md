<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CGameID`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CGameID

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct CGameID : IEquatable<CGameID>, IComparable<CGameID>`
**Base:** `IEquatable<CGameID>`
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/CGameID.cs`

## Overview

`CGameID` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsSteamApp
`public bool IsSteamApp()`

**Purpose:** Handles logic related to `is steam app`.

### IsMod
`public bool IsMod()`

**Purpose:** Handles logic related to `is mod`.

### IsShortcut
`public bool IsShortcut()`

**Purpose:** Handles logic related to `is shortcut`.

### IsP2PFile
`public bool IsP2PFile()`

**Purpose:** Handles logic related to `is p2 p file`.

### AppID
`public AppId_t AppID()`

**Purpose:** Handles logic related to `app i d`.

### Type
`public EGameIDType Type()`

**Purpose:** Handles logic related to `type`.

### ModID
`public uint ModID()`

**Purpose:** Handles logic related to `mod i d`.

### IsValid
`public bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### Set
`public void Set(ulong GameID)`

**Purpose:** Sets the value or state of `set`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### CGameID
`public static explicit operator CGameID(ulong value)`

**Purpose:** Handles logic related to `c game i d`.

### ulong
`public static explicit operator ulong(CGameID that)`

**Purpose:** Handles logic related to `ulong`.

### Equals
`public bool Equals(CGameID other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(CGameID other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new CGameID();
value.IsSteamApp();
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CSteamID`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CSteamID

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct CSteamID : IEquatable<CSteamID>, IComparable<CSteamID>`
**Base:** `IEquatable<CSteamID>`
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/CSteamID.cs`

## Overview

`CSteamID` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Set
`public void Set(AccountID_t unAccountID, EUniverse eUniverse, EAccountType eAccountType)`

**Purpose:** Sets the value or state of `set`.

### InstancedSet
`public void InstancedSet(AccountID_t unAccountID, uint unInstance, EUniverse eUniverse, EAccountType eAccountType)`

**Purpose:** Handles logic related to `instanced set`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### CreateBlankAnonLogon
`public void CreateBlankAnonLogon(EUniverse eUniverse)`

**Purpose:** Creates a new `blank anon logon` instance or object.

### CreateBlankAnonUserLogon
`public void CreateBlankAnonUserLogon(EUniverse eUniverse)`

**Purpose:** Creates a new `blank anon user logon` instance or object.

### BBlankAnonAccount
`public bool BBlankAnonAccount()`

**Purpose:** Handles logic related to `b blank anon account`.

### BGameServerAccount
`public bool BGameServerAccount()`

**Purpose:** Handles logic related to `b game server account`.

### BPersistentGameServerAccount
`public bool BPersistentGameServerAccount()`

**Purpose:** Handles logic related to `b persistent game server account`.

### BAnonGameServerAccount
`public bool BAnonGameServerAccount()`

**Purpose:** Handles logic related to `b anon game server account`.

### BContentServerAccount
`public bool BContentServerAccount()`

**Purpose:** Handles logic related to `b content server account`.

### BClanAccount
`public bool BClanAccount()`

**Purpose:** Handles logic related to `b clan account`.

### BChatAccount
`public bool BChatAccount()`

**Purpose:** Handles logic related to `b chat account`.

### IsLobby
`public bool IsLobby()`

**Purpose:** Handles logic related to `is lobby`.

### BIndividualAccount
`public bool BIndividualAccount()`

**Purpose:** Handles logic related to `b individual account`.

### BAnonAccount
`public bool BAnonAccount()`

**Purpose:** Handles logic related to `b anon account`.

### BAnonUserAccount
`public bool BAnonUserAccount()`

**Purpose:** Handles logic related to `b anon user account`.

### BConsoleUserAccount
`public bool BConsoleUserAccount()`

**Purpose:** Handles logic related to `b console user account`.

### SetAccountID
`public void SetAccountID(AccountID_t other)`

**Purpose:** Sets the value or state of `account i d`.

### SetAccountInstance
`public void SetAccountInstance(uint other)`

**Purpose:** Sets the value or state of `account instance`.

### SetEAccountType
`public void SetEAccountType(EAccountType other)`

**Purpose:** Sets the value or state of `e account type`.

### SetEUniverse
`public void SetEUniverse(EUniverse other)`

**Purpose:** Sets the value or state of `e universe`.

### GetAccountID
`public AccountID_t GetAccountID()`

**Purpose:** Gets the current value of `account i d`.

### GetUnAccountInstance
`public uint GetUnAccountInstance()`

**Purpose:** Gets the current value of `un account instance`.

### GetEAccountType
`public EAccountType GetEAccountType()`

**Purpose:** Gets the current value of `e account type`.

### GetEUniverse
`public EUniverse GetEUniverse()`

**Purpose:** Gets the current value of `e universe`.

### IsValid
`public bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### CSteamID
`public static explicit operator CSteamID(ulong value)`

**Purpose:** Handles logic related to `c steam i d`.

### ulong
`public static explicit operator ulong(CSteamID that)`

**Purpose:** Handles logic related to `ulong`.

### Equals
`public bool Equals(CSteamID other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(CSteamID other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new CSteamID();
value.Set(unAccountID, eUniverse, eAccountType);
```

## See Also

- [Complete Class Catalog](../catalog)
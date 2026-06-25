---
title: "UserDataManager"
description: "Auto-generated class reference for UserDataManager."
---
# UserDataManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserDataManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserDataManager.cs`

## Overview

`UserDataManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `UserDataManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `UserData` | `public UserData UserData { get; }` |

## Key Methods

### HasUserData
`public bool HasUserData()`

**Purpose:** Determines whether the this instance already holds user data.

```csharp
// Obtain an instance of UserDataManager from the subsystem API first
UserDataManager userDataManager = ...;
var result = userDataManager.HasUserData();
```

### LoadUserData
`public void LoadUserData()`

**Purpose:** Reads user data from persistent storage or a stream.

```csharp
// Obtain an instance of UserDataManager from the subsystem API first
UserDataManager userDataManager = ...;
userDataManager.LoadUserData();
```

### SaveUserData
`public void SaveUserData()`

**Purpose:** Writes user data to persistent storage or a stream.

```csharp
// Obtain an instance of UserDataManager from the subsystem API first
UserDataManager userDataManager = ...;
userDataManager.SaveUserData();
```

## Usage Example

```csharp
var manager = UserDataManager.Current;
```

## See Also

- [Area Index](../)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UserDataManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UserDataManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserDataManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.UserDatas/UserDataManager.cs`

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

**Purpose:** Checks whether the current object has/contains `user data`.

### LoadUserData
`public void LoadUserData()`

**Purpose:** Loads `user data` data.

### SaveUserData
`public void SaveUserData()`

**Purpose:** Saves `user data` data.

## Usage Example

```csharp
var manager = UserDataManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
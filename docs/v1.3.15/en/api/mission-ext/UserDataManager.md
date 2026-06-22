<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UserDataManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UserDataManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserDataManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserDataManager.cs`

## Overview

`UserDataManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `UserData` | `public UserData UserData { get; }` |

## Key Methods

### HasUserData
```csharp
public bool HasUserData()
```

### LoadUserData
```csharp
public void LoadUserData()
```

### SaveUserData
```csharp
public void SaveUserData()
```

## Usage Example

```csharp
// Typical usage of UserDataManager (Manager)
UserDataManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
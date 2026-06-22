<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UserData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UserData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserData.cs`

## Overview

`UserData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameType` | `public GameType GameType { get; set; }` |
| `SingleplayerData` | `public UserGameTypeData SingleplayerData { get; set; }` |
| `MultiplayerData` | `public UserGameTypeData MultiplayerData { get; set; }` |
| `DLLCheckData` | `public DLLCheckDataCollection DLLCheckData { get; set; }` |

## Key Methods

### GetUserModData
```csharp
public UserModData GetUserModData(bool isMultiplayer, string id)
```

### GetDLLLatestSizeInBytes
```csharp
public uint? GetDLLLatestSizeInBytes(string dllName)
```

### GetDLLLatestIsDangerous
```csharp
public bool GetDLLLatestIsDangerous(string dllName)
```

### GetDLLLatestVerifyInformation
```csharp
public string GetDLLLatestVerifyInformation(string dllName)
```

### SetDLLLatestSizeInBytes
```csharp
public void SetDLLLatestSizeInBytes(string dllName, uint sizeInBytes)
```

### SetDLLLatestVerifyInformation
```csharp
public void SetDLLLatestVerifyInformation(string dllName, string verifyInformation)
```

### SetDLLLatestIsDangerous
```csharp
public void SetDLLLatestIsDangerous(string dllName, bool isDangerous)
```

## Usage Example

```csharp
// Typical usage of UserData (Data)
new UserData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
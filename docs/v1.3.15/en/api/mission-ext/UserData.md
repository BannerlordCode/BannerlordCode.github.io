<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UserData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UserData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserData.cs`

## Overview

`UserData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `UserData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameType` | `public GameType GameType { get; set; }` |
| `SingleplayerData` | `public UserGameTypeData SingleplayerData { get; set; }` |
| `MultiplayerData` | `public UserGameTypeData MultiplayerData { get; set; }` |
| `DLLCheckData` | `public DLLCheckDataCollection DLLCheckData { get; set; }` |

## Key Methods

### GetUserModData
`public UserModData GetUserModData(bool isMultiplayer, string id)`

**Purpose:** Gets the current value of `user mod data`.

### GetDLLLatestSizeInBytes
`public uint? GetDLLLatestSizeInBytes(string dllName)`

**Purpose:** Gets the current value of `d l l latest size in bytes`.

### GetDLLLatestIsDangerous
`public bool GetDLLLatestIsDangerous(string dllName)`

**Purpose:** Gets the current value of `d l l latest is dangerous`.

### GetDLLLatestVerifyInformation
`public string GetDLLLatestVerifyInformation(string dllName)`

**Purpose:** Gets the current value of `d l l latest verify information`.

### SetDLLLatestSizeInBytes
`public void SetDLLLatestSizeInBytes(string dllName, uint sizeInBytes)`

**Purpose:** Sets the value or state of `d l l latest size in bytes`.

### SetDLLLatestVerifyInformation
`public void SetDLLLatestVerifyInformation(string dllName, string verifyInformation)`

**Purpose:** Sets the value or state of `d l l latest verify information`.

### SetDLLLatestIsDangerous
`public void SetDLLLatestIsDangerous(string dllName, bool isDangerous)`

**Purpose:** Sets the value or state of `d l l latest is dangerous`.

## Usage Example

```csharp
var value = new UserData();
```

## See Also

- [Complete Class Catalog](../catalog)
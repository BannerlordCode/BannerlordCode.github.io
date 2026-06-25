---
title: "UserData"
description: "Auto-generated class reference for UserData."
---
# UserData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.UserDatas/UserData.cs`

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

**Purpose:** Reads and returns the `user mod data` value held by the current object.

```csharp
// Obtain an instance of UserData from the subsystem API first
UserData userData = ...;
var result = userData.GetUserModData(false, "example");
```

### GetDLLLatestSizeInBytes
`public uint? GetDLLLatestSizeInBytes(string dllName)`

**Purpose:** Reads and returns the `d l l latest size in bytes` value held by the current object.

```csharp
// Obtain an instance of UserData from the subsystem API first
UserData userData = ...;
var result = userData.GetDLLLatestSizeInBytes("example");
```

### GetDLLLatestIsDangerous
`public bool GetDLLLatestIsDangerous(string dllName)`

**Purpose:** Reads and returns the `d l l latest is dangerous` value held by the current object.

```csharp
// Obtain an instance of UserData from the subsystem API first
UserData userData = ...;
var result = userData.GetDLLLatestIsDangerous("example");
```

### GetDLLLatestVerifyInformation
`public string GetDLLLatestVerifyInformation(string dllName)`

**Purpose:** Reads and returns the `d l l latest verify information` value held by the current object.

```csharp
// Obtain an instance of UserData from the subsystem API first
UserData userData = ...;
var result = userData.GetDLLLatestVerifyInformation("example");
```

### SetDLLLatestSizeInBytes
`public void SetDLLLatestSizeInBytes(string dllName, uint sizeInBytes)`

**Purpose:** Assigns a new value to `d l l latest size in bytes` and updates the object's internal state.

```csharp
// Obtain an instance of UserData from the subsystem API first
UserData userData = ...;
userData.SetDLLLatestSizeInBytes("example", 0);
```

### SetDLLLatestVerifyInformation
`public void SetDLLLatestVerifyInformation(string dllName, string verifyInformation)`

**Purpose:** Assigns a new value to `d l l latest verify information` and updates the object's internal state.

```csharp
// Obtain an instance of UserData from the subsystem API first
UserData userData = ...;
userData.SetDLLLatestVerifyInformation("example", "example");
```

### SetDLLLatestIsDangerous
`public void SetDLLLatestIsDangerous(string dllName, bool isDangerous)`

**Purpose:** Assigns a new value to `d l l latest is dangerous` and updates the object's internal state.

```csharp
// Obtain an instance of UserData from the subsystem API first
UserData userData = ...;
userData.SetDLLLatestIsDangerous("example", false);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
UserData entry = ...;
```

## See Also

- [Area Index](../)
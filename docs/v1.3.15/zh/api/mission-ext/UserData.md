<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UserData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UserData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserData.cs`

## 概述

`UserData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameType` | `public GameType GameType { get; set; }` |
| `SingleplayerData` | `public UserGameTypeData SingleplayerData { get; set; }` |
| `MultiplayerData` | `public UserGameTypeData MultiplayerData { get; set; }` |
| `DLLCheckData` | `public DLLCheckDataCollection DLLCheckData { get; set; }` |

## 主要方法

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

## 使用示例

```csharp
// UserData (Data) 的典型用法
new UserData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UserData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UserData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserData.cs`

## 概述

`UserData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `UserData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameType` | `public GameType GameType { get; set; }` |
| `SingleplayerData` | `public UserGameTypeData SingleplayerData { get; set; }` |
| `MultiplayerData` | `public UserGameTypeData MultiplayerData { get; set; }` |
| `DLLCheckData` | `public DLLCheckDataCollection DLLCheckData { get; set; }` |

## 主要方法

### GetUserModData
`public UserModData GetUserModData(bool isMultiplayer, string id)`

**用途 / Purpose:** 获取 `user mod data` 的当前值。

### GetDLLLatestSizeInBytes
`public uint? GetDLLLatestSizeInBytes(string dllName)`

**用途 / Purpose:** 获取 `d l l latest size in bytes` 的当前值。

### GetDLLLatestIsDangerous
`public bool GetDLLLatestIsDangerous(string dllName)`

**用途 / Purpose:** 获取 `d l l latest is dangerous` 的当前值。

### GetDLLLatestVerifyInformation
`public string GetDLLLatestVerifyInformation(string dllName)`

**用途 / Purpose:** 获取 `d l l latest verify information` 的当前值。

### SetDLLLatestSizeInBytes
`public void SetDLLLatestSizeInBytes(string dllName, uint sizeInBytes)`

**用途 / Purpose:** 设置 `d l l latest size in bytes` 的值或状态。

### SetDLLLatestVerifyInformation
`public void SetDLLLatestVerifyInformation(string dllName, string verifyInformation)`

**用途 / Purpose:** 设置 `d l l latest verify information` 的值或状态。

### SetDLLLatestIsDangerous
`public void SetDLLLatestIsDangerous(string dllName, bool isDangerous)`

**用途 / Purpose:** 设置 `d l l latest is dangerous` 的值或状态。

## 使用示例

```csharp
var value = new UserData();
```

## 参见

- [完整类目录](../catalog)
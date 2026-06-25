---
title: "UserData"
description: "UserData 的自动生成类参考。"
---
# UserData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserData`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.UserDatas/UserData.cs`

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

**用途 / Purpose:** 读取并返回当前对象中 user mod data 的结果。

```csharp
// 先通过子系统 API 拿到 UserData 实例
UserData userData = ...;
var result = userData.GetUserModData(false, "example");
```

### GetDLLLatestSizeInBytes
`public uint? GetDLLLatestSizeInBytes(string dllName)`

**用途 / Purpose:** 读取并返回当前对象中 d l l latest size in bytes 的结果。

```csharp
// 先通过子系统 API 拿到 UserData 实例
UserData userData = ...;
var result = userData.GetDLLLatestSizeInBytes("example");
```

### GetDLLLatestIsDangerous
`public bool GetDLLLatestIsDangerous(string dllName)`

**用途 / Purpose:** 读取并返回当前对象中 d l l latest is dangerous 的结果。

```csharp
// 先通过子系统 API 拿到 UserData 实例
UserData userData = ...;
var result = userData.GetDLLLatestIsDangerous("example");
```

### GetDLLLatestVerifyInformation
`public string GetDLLLatestVerifyInformation(string dllName)`

**用途 / Purpose:** 读取并返回当前对象中 d l l latest verify information 的结果。

```csharp
// 先通过子系统 API 拿到 UserData 实例
UserData userData = ...;
var result = userData.GetDLLLatestVerifyInformation("example");
```

### SetDLLLatestSizeInBytes
`public void SetDLLLatestSizeInBytes(string dllName, uint sizeInBytes)`

**用途 / Purpose:** 为 d l l latest size in bytes 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UserData 实例
UserData userData = ...;
userData.SetDLLLatestSizeInBytes("example", 0);
```

### SetDLLLatestVerifyInformation
`public void SetDLLLatestVerifyInformation(string dllName, string verifyInformation)`

**用途 / Purpose:** 为 d l l latest verify information 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UserData 实例
UserData userData = ...;
userData.SetDLLLatestVerifyInformation("example", "example");
```

### SetDLLLatestIsDangerous
`public void SetDLLLatestIsDangerous(string dllName, bool isDangerous)`

**用途 / Purpose:** 为 d l l latest is dangerous 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UserData 实例
UserData userData = ...;
userData.SetDLLLatestIsDangerous("example", false);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
UserData entry = ...;
```

## 参见

- [本区域目录](../)
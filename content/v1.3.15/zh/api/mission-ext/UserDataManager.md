---
title: "UserDataManager"
description: "UserDataManager 的自动生成类参考。"
---
# UserDataManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserDataManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserDataManager.cs`

## 概述

`UserDataManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `UserDataManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `UserData` | `public UserData UserData { get; }` |

## 主要方法

### HasUserData
`public bool HasUserData()`

**用途 / Purpose:** 判断当前对象是否已经持有 「user data」。

```csharp
// 先通过子系统 API 拿到 UserDataManager 实例
UserDataManager userDataManager = ...;
var result = userDataManager.HasUserData();
```

### LoadUserData
`public void LoadUserData()`

**用途 / Purpose:** 从持久化存储或流中读取 「user data」。

```csharp
// 先通过子系统 API 拿到 UserDataManager 实例
UserDataManager userDataManager = ...;
userDataManager.LoadUserData();
```

### SaveUserData
`public void SaveUserData()`

**用途 / Purpose:** 将 「user data」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 UserDataManager 实例
UserDataManager userDataManager = ...;
userDataManager.SaveUserData();
```

## 使用示例

```csharp
var manager = UserDataManager.Current;
```

## 参见

- [本区域目录](../)
---
title: "UserDataManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UserDataManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# UserDataManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserDataManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.UserDatas/UserDataManager.cs`

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

**用途 / Purpose:** 判断当前对象是否包含/拥有 `user data`。

### LoadUserData
`public void LoadUserData()`

**用途 / Purpose:** 加载 `user data` 数据。

### SaveUserData
`public void SaveUserData()`

**用途 / Purpose:** 保存 `user data` 数据。

## 使用示例

```csharp
var manager = UserDataManager.Current;
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UserDataManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UserDataManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserDataManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserDataManager.cs`

## 概述

`UserDataManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `UserData` | `public UserData UserData { get; }` |

## 主要方法

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

## 使用示例

```csharp
// UserDataManager (Manager) 的典型用法
UserDataManager.Current;
```

## 参见

- [完整类目录](../catalog)
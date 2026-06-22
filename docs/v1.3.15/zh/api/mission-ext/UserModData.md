<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UserModData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UserModData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserModData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserModData.cs`

## 概述

`UserModData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `LastKnownVersion` | `public string LastKnownVersion { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## 主要方法

### IsUpdatedToBeDefault
```csharp
public bool IsUpdatedToBeDefault(ModuleInfo module)
```

## 使用示例

```csharp
// UserModData (Data) 的典型用法
new UserModData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)
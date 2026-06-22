<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherDLLData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherDLLData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherDLLData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs`

## 概述

`LauncherDLLData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `SubModule` | `public SubModuleInfo SubModule { get; }` |
| `IsDangerous` | `public bool IsDangerous { get; }` |
| `VerifyInformation` | `public string VerifyInformation { get; }` |
| `Size` | `public uint Size { get; }` |

## 主要方法

### SetIsDLLDangerous
```csharp
public void SetIsDLLDangerous(bool isDangerous)
```

### SetDLLSize
```csharp
public void SetDLLSize(uint size)
```

### SetDLLVerifyInformation
```csharp
public void SetDLLVerifyInformation(string info)
```

## 使用示例

```csharp
// LauncherDLLData (Data) 的典型用法
new LauncherDLLData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)
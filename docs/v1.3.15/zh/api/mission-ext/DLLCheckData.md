<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DLLCheckData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DLLCheckData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DLLCheckData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/DLLCheckData.cs`

## 概述

`DLLCheckData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `DLLName` | `public string DLLName { get; set; }` |
| `DLLVerifyInformation` | `public string DLLVerifyInformation { get; set; }` |
| `LatestSizeInBytes` | `public uint LatestSizeInBytes { get; set; }` |
| `IsDangerous` | `public bool IsDangerous { get; set; }` |

## 使用示例

```csharp
// DLLCheckData (Data) 的典型用法
new DLLCheckData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)
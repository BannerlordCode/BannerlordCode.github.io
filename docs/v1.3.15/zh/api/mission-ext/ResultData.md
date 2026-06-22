<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ResultData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ResultData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResultData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/ResultData.cs`

## 概述

`ResultData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `Errors` | `public string Errors { get; set; }` |
| `DLLs` | `public List<DLLResult> DLLs { get; set; }` |

## 主要方法

### AddDLLResult
```csharp
public void AddDLLResult(string dllName, bool isSafe, string information)
```

### ToString
```csharp
public override string ToString()
```

## 使用示例

```csharp
// ResultData (Data) 的典型用法
new ResultData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)
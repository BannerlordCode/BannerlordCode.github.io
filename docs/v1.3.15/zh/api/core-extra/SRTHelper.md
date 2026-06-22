<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SRTHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SRTHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class SRTHelper`
**Base:** 无
**File:** `TaleWorlds.Library/SRTHelper.cs`

## 概述

`SRTHelper` 是一个静态工具类，提供辅助方法。

## 主要属性

| Name | Signature |
|------|-----------|
| `StartTime` | `public int StartTime { get; set; }` |
| `EndTime` | `public int EndTime { get; set; }` |
| `Lines` | `public List<string> Lines { get; set; }` |

## 主要方法

### ParseStream
```csharp
public static List<SRTHelper.SubtitleItem> ParseStream(Stream subtitleStream, Encoding encoding)
```

### CopyStream
```csharp
public static Stream CopyStream(Stream inputStream)
```

### ToString
```csharp
public override string ToString()
```

## 使用示例

```csharp
// SRTHelper (Helper) 的典型用法
SRTHelper./* static helper method */();;
```

## 参见

- [完整类目录](../catalog)
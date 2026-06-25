---
title: "SRTHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SRTHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SRTHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class SRTHelper`
**Base:** 无
**File:** `TaleWorlds.Library/SRTHelper.cs`

## 概述

`SRTHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `SRTHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `StartTime` | `public int StartTime { get; set; }` |
| `EndTime` | `public int EndTime { get; set; }` |
| `Lines` | `public List<string> Lines { get; set; }` |

## 主要方法

### ParseStream
`public static List<SRTHelper.SubtitleItem> ParseStream(Stream subtitleStream, Encoding encoding)`

**用途 / Purpose:** 处理 `parse stream` 相关逻辑。

### CopyStream
`public static Stream CopyStream(Stream inputStream)`

**用途 / Purpose:** 处理 `copy stream` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
SRTHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)
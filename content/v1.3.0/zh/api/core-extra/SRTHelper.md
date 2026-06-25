---
title: "SRTHelper"
description: "SRTHelper 的自动生成类参考。"
---
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

**用途 / Purpose:** 将外部输入解析为当前系统可识别的stream。

```csharp
// 静态调用，不需要实例
SRTHelper.ParseStream(subtitleStream, encoding);
```

### CopyStream
`public static Stream CopyStream(Stream inputStream)`

**用途 / Purpose:** 把当前对象的stream状态复制到目标对象。

```csharp
// 静态调用，不需要实例
SRTHelper.CopyStream(inputStream);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 SRTHelper 实例
SRTHelper sRTHelper = ...;
var result = sRTHelper.ToString();
```

## 使用示例

```csharp
SRTHelper.Initialize();
```

## 参见

- [本区域目录](../)
---
title: "CallbackStringBufferManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CallbackStringBufferManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CallbackStringBufferManager

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class CallbackStringBufferManager`
**Base:** 无
**File:** `TaleWorlds.DotNet/CallbackStringBufferManager.cs`

## 概述

`CallbackStringBufferManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CallbackStringBufferManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `StringBuffer0` | `public static byte StringBuffer0 { get; }` |
| `StringBuffer1` | `public static byte StringBuffer1 { get; }` |
| `StringBuffer2` | `public static byte StringBuffer2 { get; }` |
| `StringBuffer3` | `public static byte StringBuffer3 { get; }` |
| `StringBuffer4` | `public static byte StringBuffer4 { get; }` |
| `StringBuffer5` | `public static byte StringBuffer5 { get; }` |

## 使用示例

```csharp
var manager = CallbackStringBufferManager.Current;
```

## 参见

- [完整类目录](../catalog)
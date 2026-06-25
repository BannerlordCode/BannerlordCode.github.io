---
title: "MBOutOfRangeException"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBOutOfRangeException`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBOutOfRangeException

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBOutOfRangeException : ObjectSystemException`
**Base:** `ObjectSystemException`
**File:** `Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBOutOfRangeException.cs`

## 概述

`MBOutOfRangeException` 是一个异常类型，用来表达某种明确的错误条件；调用方需要决定是捕获、转换还是让它继续向上抛出。

## 心智模型

把 `MBOutOfRangeException` 当作一个 Exception 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
try { CallMBOutOfRangeException(); } catch (MBOutOfRangeException exception) { Handle(exception); }
```

## 参见

- [完整类目录](../catalog)
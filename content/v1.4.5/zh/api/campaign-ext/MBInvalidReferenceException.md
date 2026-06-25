---
title: "MBInvalidReferenceException"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBInvalidReferenceException`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBInvalidReferenceException

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBInvalidReferenceException : ObjectSystemException`
**Base:** `ObjectSystemException`
**File:** `Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBInvalidReferenceException.cs`

## 概述

`MBInvalidReferenceException` 是一个异常类型，用来表达某种明确的错误条件；调用方需要决定是捕获、转换还是让它继续向上抛出。

## 心智模型

把 `MBInvalidReferenceException` 当作一个 Exception 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
try { CallMBInvalidReferenceException(); } catch (MBInvalidReferenceException exception) { Handle(exception); }
```

## 参见

- [完整类目录](../catalog)
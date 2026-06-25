---
title: "MBNotNullParameterException"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBNotNullParameterException`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBNotNullParameterException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBNotNullParameterException : MBException`
**Base:** `MBException`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBNotNullParameterException.cs`

## 概述

`MBNotNullParameterException` 是一个异常类型，用来表达某种明确的错误条件；调用方需要决定是捕获、转换还是让它继续向上抛出。

## 心智模型

把 `MBNotNullParameterException` 当作一个 Exception 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
try { CallMBNotNullParameterException(); } catch (MBNotNullParameterException exception) { Handle(exception); }
```

## 参见

- [完整类目录](../catalog)
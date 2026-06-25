---
title: "MBNotFoundException"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBNotFoundException`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBNotFoundException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBNotFoundException : MBException`
**Base:** `MBException`
**File:** `TaleWorlds.Core/MBNotFoundException.cs`

## 概述

`MBNotFoundException` 是一个异常类型，用来表达某种明确的错误条件；调用方需要决定是捕获、转换还是让它继续向上抛出。

## 心智模型

把 `MBNotFoundException` 当作一个 Exception 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
try { CallMBNotFoundException(); } catch (MBNotFoundException exception) { Handle(exception); }
```

## 参见

- [完整类目录](../catalog)
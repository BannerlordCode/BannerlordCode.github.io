---
title: "MBNotNullParameterException"
description: "MBNotNullParameterException 的自动生成类参考。"
---
# MBNotNullParameterException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBNotNullParameterException : MBException`
**Base:** `MBException`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBNotNullParameterException.cs`

## 概述

`MBNotNullParameterException` 是一个异常类型，用来表达某种明确的错误条件；调用方需要决定是捕获、转换还是让它继续向上抛出。

## 心智模型

把 `MBNotNullParameterException` 当作一个 Exception 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
try { /* 调用可能抛出该异常的分支 */ }
catch (MBNotNullParameterException ex) { /* 处理异常 */ }
```

## 参见

- [本区域目录](../)
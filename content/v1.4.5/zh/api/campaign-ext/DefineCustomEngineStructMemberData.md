---
title: "DefineCustomEngineStructMemberData"
description: "DefineCustomEngineStructMemberData 的自动生成类参考。"
---
# DefineCustomEngineStructMemberData

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class DefineCustomEngineStructMemberData : Attribute`
**Base:** `Attribute`
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/DefineCustomEngineStructMemberData.cs`

## 概述

`DefineCustomEngineStructMemberData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `DefineCustomEngineStructMemberData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public Type Type { get; set; }` |
| `MemberName` | `public string MemberName { get; set; }` |
| `ManagedMemberName` | `public string ManagedMemberName { get; set; }` |

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
DefineCustomEngineStructMemberData entry = ...;
```

## 参见

- [本区域目录](../)
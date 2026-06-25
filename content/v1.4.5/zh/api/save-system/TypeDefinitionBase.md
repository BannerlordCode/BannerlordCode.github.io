---
title: "TypeDefinitionBase"
description: "TypeDefinitionBase 的自动生成类参考。"
---
# TypeDefinitionBase

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class TypeDefinitionBase`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/TypeDefinitionBase.cs`

## 概述

`TypeDefinitionBase` 位于 `TaleWorlds.SaveSystem.Definition`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Definition` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SaveId` | `public SaveId SaveId { get; }` |
| `Type` | `public Type Type { get; }` |
| `TypeLevel` | `public byte TypeLevel { get; }` |

## 主要方法

### GetClassLevel
`public static byte GetClassLevel(Type type)`

**用途 / Purpose:** 读取并返回当前对象中 「class level」 的结果。

```csharp
// 静态调用，不需要实例
TypeDefinitionBase.GetClassLevel(type);
```

## 使用示例

```csharp
TypeDefinitionBase.GetClassLevel(type);
```

## 参见

- [本区域目录](../)
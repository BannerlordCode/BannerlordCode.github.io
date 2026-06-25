---
title: "MemberDefinition"
description: "MemberDefinition 的自动生成类参考。"
---
# MemberDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public abstract class MemberDefinition`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/Definition/MemberDefinition.cs`

## 概述

`MemberDefinition` 位于 `TaleWorlds.SaveSystem.Definition`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Definition` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public MemberTypeId Id { get; }` |
| `MemberInfo` | `public MemberInfo MemberInfo { get; }` |

## 主要方法

### GetMemberType
`public abstract Type GetMemberType()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 member type 的结果。

```csharp
// 先通过子系统 API 拿到 MemberDefinition 实例
MemberDefinition memberDefinition = ...;
var result = memberDefinition.GetMemberType();
```

### GetValue
`public abstract object GetValue(object target)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 value 的结果。

```csharp
// 先通过子系统 API 拿到 MemberDefinition 实例
MemberDefinition memberDefinition = ...;
var result = memberDefinition.GetValue(target);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MemberDefinition instance = ...;
```

## 参见

- [本区域目录](../)
---
title: "FieldDefinition"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FieldDefinition`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FieldDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class FieldDefinition : MemberDefinition`
**Base:** `MemberDefinition`
**File:** `TaleWorlds.SaveSystem/Definition/FieldDefinition.cs`

## 概述

`FieldDefinition` 位于 `TaleWorlds.SaveSystem.Definition`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Definition` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FieldInfo` | `public FieldInfo FieldInfo { get; }` |
| `SaveableFieldAttribute` | `public SaveableFieldAttribute SaveableFieldAttribute { get; }` |
| `GetFieldValueMethod` | `public GetFieldValueDelegate GetFieldValueMethod { get; }` |

## 主要方法

### GetMemberType
`public override Type GetMemberType()`

**用途 / Purpose:** 获取 `member type` 的当前值。

### GetValue
`public override object GetValue(object target)`

**用途 / Purpose:** 获取 `value` 的当前值。

### InitializeForAutoGeneration
`public void InitializeForAutoGeneration(GetFieldValueDelegate getFieldValueMethod)`

**用途 / Purpose:** 初始化 `for auto generation` 的状态、资源或绑定。

## 使用示例

```csharp
var value = new FieldDefinition();
value.GetMemberType();
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TypeSaveId`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TypeSaveId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class TypeSaveId : SaveId`
**Base:** `SaveId`
**File:** `TaleWorlds.SaveSystem/Definition/TypeSaveId.cs`

## 概述

`TypeSaveId` 位于 `TaleWorlds.SaveSystem.Definition`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Definition` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |

## 主要方法

### GetStringId
`public override string GetStringId()`

**用途 / Purpose:** 获取 `string id` 的当前值。

### WriteTo
`public override void WriteTo(IWriter writer)`

**用途 / Purpose:** 处理 `write to` 相关逻辑。

### ReadFrom
`public static TypeSaveId ReadFrom(IReader reader)`

**用途 / Purpose:** 处理 `read from` 相关逻辑。

### GetSizeInBytes
`public override int GetSizeInBytes()`

**用途 / Purpose:** 获取 `size in bytes` 的当前值。

## 使用示例

```csharp
var value = new TypeSaveId();
value.GetStringId();
```

## 参见

- [完整类目录](../catalog)
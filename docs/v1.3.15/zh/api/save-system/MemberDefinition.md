<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MemberDefinition`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MemberDefinition

**命名空间:** TaleWorlds.SaveSystem.Definition
**模块:** TaleWorlds.SaveSystem
**类型:** `public abstract class MemberDefinition`
**领域:** save-system

## 概述

`MemberDefinition` 位于 `TaleWorlds.SaveSystem.Definition`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

**用途 / Purpose:** 获取 `member type` 的当前值。

### GetValue
`public abstract object GetValue(object target)`

**用途 / Purpose:** 获取 `value` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMemberDefinition();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)

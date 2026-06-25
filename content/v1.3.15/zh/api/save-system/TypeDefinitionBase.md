---
title: "TypeDefinitionBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TypeDefinitionBase`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TypeDefinitionBase

**命名空间:** TaleWorlds.SaveSystem.Definition
**模块:** TaleWorlds.SaveSystem
**类型:** `public class TypeDefinitionBase`
**领域:** save-system

## 概述

`TypeDefinitionBase` 位于 `TaleWorlds.SaveSystem.Definition`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

**用途 / Purpose:** 获取 `class level` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
TypeDefinitionBase.GetClassLevel(type);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)

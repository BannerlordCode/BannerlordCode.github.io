<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TypeSaveId`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TypeSaveId

**命名空间:** TaleWorlds.SaveSystem.Definition
**模块:** TaleWorlds.SaveSystem
**类型:** `public class TypeSaveId : SaveId`
**Base:** `SaveId`
**领域:** save-system

## 概述

`TypeSaveId` 位于 `TaleWorlds.SaveSystem.Definition`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先从游戏状态中拿到一个 TypeSaveId 实例，再调用它的公开方法
var value = new TypeSaveId();
value.GetStringId();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)

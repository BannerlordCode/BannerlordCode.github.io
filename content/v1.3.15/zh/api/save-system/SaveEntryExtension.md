---
title: "SaveEntryExtension"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveEntryExtension`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveEntryExtension

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** `public enum SaveEntryExtension : byte`
**Base:** `byte`
**领域:** save-system

## 概述

`SaveEntryExtension` 位于 `TaleWorlds.SaveSystem`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `Class` |
| `Struct` |
| `Field` |
| `Property` |
| `Key` |
| `Value` |
| `String` |
| `Config` |
| `Basics` |
| `Object` |

## 使用示例

```csharp
SaveEntryExtension example = SaveEntryExtension.Class;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)

<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveableRootClassAttribute`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveableRootClassAttribute

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** `public class SaveableRootClassAttribute : Attribute`
**Base:** `Attribute`
**领域:** save-system

## 概述

`SaveableRootClassAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `SaveableRootClassAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SaveId` | `public int SaveId { get; set; }` |

## 使用示例

```csharp
[SaveableRootClassAttribute]
public class Example { }
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)

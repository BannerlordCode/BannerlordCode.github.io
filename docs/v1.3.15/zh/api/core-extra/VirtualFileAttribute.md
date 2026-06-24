<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VirtualFileAttribute`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VirtualFileAttribute

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class VirtualFileAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.Library/VirtualFileAttribute.cs`

## 概述

`VirtualFileAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `VirtualFileAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Content` | `public string Content { get; }` |

## 使用示例

```csharp
[VirtualFileAttribute]
public class Example { }
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VirtualDirectoryAttribute`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VirtualDirectoryAttribute

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class VirtualDirectoryAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.Library/VirtualDirectoryAttribute.cs`

## 概述

`VirtualDirectoryAttribute` 是一个 .NET 特性（Attribute），应用到成员/类型上以标记某种用途（如序列化、缓存、验证）。用 `[VirtualDirectoryAttribute]` 注解。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## 使用示例

```csharp
// VirtualDirectoryAttribute (Attribute) 的典型用法
[VirtualDirectoryAttribute] /* applied to a member/type */;
```

## 参见

- [完整类目录](../catalog)
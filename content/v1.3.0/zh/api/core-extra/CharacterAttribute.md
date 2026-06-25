---
title: "CharacterAttribute"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterAttribute`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterAttribute

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class CharacterAttribute : PropertyObject`
**Base:** `PropertyObject`
**File:** `TaleWorlds.Core/CharacterAttribute.cs`

## 概述

`CharacterAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `CharacterAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Abbreviation` | `public TextObject Abbreviation { get; }` |

## 主要方法

### Initialize
`public void Initialize(TextObject name, TextObject description, TextObject abbreviation)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

## 使用示例

```csharp
[CharacterAttribute]
public class Example { }
```

## 参见

- [完整类目录](../catalog)
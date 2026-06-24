<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HotKey`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HotKey

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class HotKey`
**Base:** 无
**File:** `TaleWorlds.InputSystem/HotKey.cs`

## 概述

`HotKey` 位于 `TaleWorlds.InputSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Keys` | `public List<Key> Keys { get; }` |
| `DefaultKeys` | `public List<Key> DefaultKeys { get; }` |

## 主要方法

### HasModifier
`public bool HasModifier(HotKey.Modifiers modifier)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `modifier`。

### HasSameModifiers
`public bool HasSameModifiers(HotKey other)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `same modifiers`。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
var value = new HotKey();
value.HasModifier(modifier);
```

## 参见

- [完整类目录](../catalog)
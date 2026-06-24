<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpriteGeneric`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SpriteGeneric

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteGeneric : Sprite`
**Base:** `Sprite`
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/SpriteGeneric.cs`

## 概述

`SpriteGeneric` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SpritePart` | `public SpritePart SpritePart { get; }` |

## 主要方法

### GetMinUvs
`public override Vec2 GetMinUvs()`

**用途 / Purpose:** 获取 `min uvs` 的当前值。

### GetMaxUvs
`public override Vec2 GetMaxUvs()`

**用途 / Purpose:** 获取 `max uvs` 的当前值。

## 使用示例

```csharp
var value = new SpriteGeneric();
value.GetMinUvs();
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrushAnimationKeyFrame`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BrushAnimationKeyFrame

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimationKeyFrame`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationKeyFrame.cs`

## 概述

`BrushAnimationKeyFrame` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Time` | `public float Time { get; }` |
| `Index` | `public int Index { get; }` |

## 主要方法

### InitializeAsFloat
`public void InitializeAsFloat(float time, float value)`

**用途 / Purpose:** 初始化 `as float` 的状态、资源或绑定。

### InitializeAsColor
`public void InitializeAsColor(float time, Color value)`

**用途 / Purpose:** 初始化 `as color` 的状态、资源或绑定。

### InitializeAsSprite
`public void InitializeAsSprite(float time, Sprite value)`

**用途 / Purpose:** 初始化 `as sprite` 的状态、资源或绑定。

### InitializeIndex
`public void InitializeIndex(int index)`

**用途 / Purpose:** 初始化 `index` 的状态、资源或绑定。

### GetValueAsFloat
`public float GetValueAsFloat()`

**用途 / Purpose:** 获取 `value as float` 的当前值。

### GetValueAsColor
`public Color GetValueAsColor()`

**用途 / Purpose:** 获取 `value as color` 的当前值。

### GetValueAsSprite
`public Sprite GetValueAsSprite()`

**用途 / Purpose:** 获取 `value as sprite` 的当前值。

### GetValueAsObject
`public object GetValueAsObject()`

**用途 / Purpose:** 获取 `value as object` 的当前值。

### Clone
`public BrushAnimationKeyFrame Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

## 使用示例

```csharp
var value = new BrushAnimationKeyFrame();
value.InitializeAsFloat(0, 0);
```

## 参见

- [完整类目录](../catalog)
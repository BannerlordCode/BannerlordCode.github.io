<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Canvas`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Canvas

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Canvas`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/Canvas.cs`

## 概述

`Canvas` 位于 `TaleWorlds.GauntletUI.Canvas`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Canvas` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Root` | `public CanvasObject Root { get; }` |

## 主要方法

### LoadFrom
`public void LoadFrom(XmlNode canvasNode)`

**用途 / Purpose:** 加载 `from` 数据。

### Update
`public void Update(float scale)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### DoMeasure
`public void DoMeasure(bool fixedWidth, bool fixedHeight, float width, float height)`

**用途 / Purpose:** 处理 `do measure` 相关逻辑。

### DoLayout
`public void DoLayout()`

**用途 / Purpose:** 处理 `do layout` 相关逻辑。

### DoRender
`public void DoRender(Vector2 globalPosition, TwoDimensionDrawContext drawContext)`

**用途 / Purpose:** 处理 `do render` 相关逻辑。

## 使用示例

```csharp
var value = new Canvas();
value.LoadFrom(canvasNode);
```

## 参见

- [完整类目录](../catalog)
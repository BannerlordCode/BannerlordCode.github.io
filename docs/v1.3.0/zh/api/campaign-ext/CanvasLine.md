<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CanvasLine`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CanvasLine

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasLine : CanvasObject`
**Base:** `CanvasObject`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasLine.cs`

## 概述

`CanvasLine` 位于 `TaleWorlds.GauntletUI.Canvas`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Canvas` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Alignment` | `public CanvasLineAlignment Alignment { get; set; }` |

## 主要方法

### LoadFrom
`public void LoadFrom(XmlNode lineNode)`

**用途 / Purpose:** 加载 `from` 数据。

### GetHorizontalPositionOf
`public float GetHorizontalPositionOf(int index)`

**用途 / Purpose:** 获取 `horizontal position of` 的当前值。

## 使用示例

```csharp
var value = new CanvasLine();
value.LoadFrom(lineNode);
```

## 参见

- [完整类目录](../catalog)
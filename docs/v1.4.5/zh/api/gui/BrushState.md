<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrushState`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BrushState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public struct BrushState : IBrushAnimationState, IDataSource`
**Base:** `IBrushAnimationState`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushState.cs`

## 概述

`BrushState` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FillFrom
`public void FillFrom(Style style)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### LerpFrom
`public void LerpFrom(BrushState start, Style end, float ratio)`

**用途 / Purpose:** 处理 `lerp from` 相关逻辑。

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 获取 `value as float` 的当前值。

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 获取 `value as color` 的当前值。

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 获取 `value as sprite` 的当前值。

### SetValueAsFloat
`public void SetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType, float value)`

**用途 / Purpose:** 设置 `value as float` 的值或状态。

### SetValueAsColor
`public void SetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType, in Color value)`

**用途 / Purpose:** 设置 `value as color` 的值或状态。

### SetValueAsSprite
`public void SetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType, Sprite value)`

**用途 / Purpose:** 设置 `value as sprite` 的值或状态。

### CreateTextMaterial
`public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`

**用途 / Purpose:** 创建一个 `text material` 实例或对象。

## 使用示例

```csharp
var value = new BrushState();
value.FillFrom(style);
```

## 参见

- [完整类目录](../catalog)
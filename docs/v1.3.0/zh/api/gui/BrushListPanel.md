<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrushListPanel`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BrushListPanel

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushListPanel.cs`

## 概述

`BrushListPanel` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Brush` | `public Brush Brush { get; }` |
| `ReadOnlyBrush` | `public Brush ReadOnlyBrush { get; }` |
| `Sprite` | `public new Sprite Sprite { get; set; }` |
| `BrushRenderer` | `public BrushRenderer BrushRenderer { get; }` |

## 主要方法

### UpdateBrushes
`public override void UpdateBrushes(float dt)`

**用途 / Purpose:** 更新 `brushes` 的状态或数据。

### SetState
`public override void SetState(string stateName)`

**用途 / Purpose:** 设置 `state` 的值或状态。

### UpdateAnimationPropertiesSubTask
`public override void UpdateAnimationPropertiesSubTask(float alphaFactor)`

**用途 / Purpose:** 更新 `animation properties sub task` 的状态或数据。

### OnBrushChanged
`public virtual void OnBrushChanged()`

**用途 / Purpose:** 当 `brush changed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new BrushListPanel();
value.UpdateBrushes(0);
```

## 参见

- [完整类目录](../catalog)
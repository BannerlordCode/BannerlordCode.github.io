<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TacticComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TacticComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TacticComponent`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/TacticComponent.cs`

## 概述

`TacticComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `TacticComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Team` | `public Team Team { get; set; }` |

## 主要方法

### TickOccasionally
`public virtual void TickOccasionally()`

**用途 / Purpose:** 处理 `tick occasionally` 相关逻辑。

### ResetTactic
`public void ResetTactic()`

**用途 / Purpose:** 将 `tactic` 重置为初始状态。

### SetDefaultBehaviorWeights
`public static void SetDefaultBehaviorWeights(Formation f)`

**用途 / Purpose:** 设置 `default behavior weights` 的值或状态。

## 使用示例

```csharp
var implementation = new CustomTacticComponent();
```

## 参见

- [完整类目录](../catalog)
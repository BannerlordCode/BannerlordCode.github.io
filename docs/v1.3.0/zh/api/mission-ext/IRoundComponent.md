<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IRoundComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IRoundComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/IRoundComponent.cs`

## 概述

`IRoundComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `IRoundComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
IRoundComponent implementation = GetRoundComponentImplementation();
```

## 参见

- [完整类目录](../catalog)
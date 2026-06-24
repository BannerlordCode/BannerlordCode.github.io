<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSettlementPrepareView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionSettlementPrepareView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionSettlementPrepareView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionSettlementPrepareView.cs`

## 概述

`MissionSettlementPrepareView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionSettlementPrepareView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

## 使用示例

```csharp
var view = new MissionSettlementPrepareView();
```

## 参见

- [完整类目录](../catalog)